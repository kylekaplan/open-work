import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Textarea,
  VStack,
  useColorMode,
  Grid,
  GridItem,
  NumberInput,
  NumberInputField,
  HStack,
  Button,
} from '@chakra-ui/react'
import { useState } from 'react';
import DatePicker from "react-datepicker";
import { getFilesFromEvent } from 'react-dropzone-uploader';
import { FaEthereum } from 'react-icons/fa';
import  styles from './styles.module.css';
import Uploader from './Uploader';

const Create = () => {
  const { colorMode } = useColorMode();
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [prizeAmount, setPrizeAmount] = useState<string>('0');
  const [loading, setLoading] = useState<boolean>(false);
  const [files, setFiles] = useState<any>([]);

  const [titleInvalid, setTitleInvalid] = useState<boolean>(false);
  const [startDateInvalid, setStartDateInvalid] = useState<boolean>(false);
  const [endDateInvalid, setEndDateInvalid] = useState<boolean>(false);
  const [prizeAmountInvalid, setPrizeAmountInvalid] = useState<boolean>(false);

  const handleChangeStatus = (props: { meta: { id: any; }; }, status: string) => {
    if (status === 'done') {
      setFiles((prevFiles: any) => [...prevFiles, props]);
    } else if (status === 'removed') {
      const newFiles = files.filter((file: any) => file.meta.id !== props.meta.id);
      setFiles([...newFiles]);
    }
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setTitleInvalid(false);
    setStartDateInvalid(false);
    setEndDateInvalid(false);
    setPrizeAmountInvalid(false);
    console.log('endDate', endDate);
    if (title === '' || !startDate || !endDate || !prizeAmount || prizeAmount === '0' ) {
      setLoading(false);
    }
    if (title === '') {
      setTitleInvalid(true);
      return;
    }
    if (!startDate) {
      setStartDateInvalid(true);
      return;
    }
    if (!endDate) {
      setEndDateInvalid(true);
      return;
    }
    if (!prizeAmount || prizeAmount === '0' ) {
      setPrizeAmountInvalid(true);
      return;
    }
    if (startDate && endDate && startDate > endDate) {
      setStartDateInvalid(true);
    }
    const bounty = {
      title,
      description,
      prizeAmount,
      startDate,
      endDate,
    };
    console.log('files', files);
    console.log('bounty', bounty);
    setLoading(false);
  };

  return (
    <Box
      m="0 auto"
      padding={{ base: "30px 5px", md: "30px 40px", lg: "30px 60px", xl: "30px 80px" }}
      maxWidth="1600px"
    >
      <Heading as="h1" size="xl">
        Create a Challenge
      </Heading>
      <VStack spacing={8}>
        <FormControl mt={45} isRequired isInvalid={titleInvalid}>
          <FormLabel>Title:</FormLabel>
          <Input
            id='title'
            placeholder='Good titles are short and sweet'
            value={title}
            onChange={(e: any) => setTitle(e.target.value)}
          />
          {titleInvalid && (
            <FormErrorMessage>Title is required.</FormErrorMessage>
          )}
        </FormControl>

        <FormControl>
          <FormLabel>Description:</FormLabel>
          <Textarea
            id='description'
            placeholder='Describe the details of your challenge'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </FormControl>

        <FormControl>
          <FormLabel>Good Example images:</FormLabel>
          <Uploader handleChangeStatus={handleChangeStatus} />
        </FormControl>

        <Grid
          gap={10}
          templateColumns='repeat(2, 1fr)'
          alignSelf="flex-start"
        >
          <GridItem colSpan={{ base: 2, md: 1 }}>
            <FormControl isRequired isInvalid={startDateInvalid}>
              <FormLabel>Start Date:</FormLabel>
              <DatePicker
                showTimeSelect
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                dateFormat="MMMM d, yyyy h:mm aa z"
                className={colorMode === 'dark' ? styles.darkTheme : styles.lightTheme}
                minDate={new Date()} // limit to right now
                maxDate={new Date(new Date().setDate(new Date().getDate() + 365))} // limit to 1 year from now
              />
              {startDateInvalid && (
                <FormErrorMessage>Start date is required and must be before end date.</FormErrorMessage>
              )}
            </FormControl>
          </GridItem>

          <GridItem colSpan={{ base: 2, md: 1 }}>
            <FormControl isRequired isInvalid={endDateInvalid}>
              <FormLabel>End Date:</FormLabel>
              <DatePicker
                showTimeSelect
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                dateFormat="MMMM d, yyyy h:mm aa z"
                className={colorMode === 'dark' ? styles.darkTheme : styles.lightTheme}
                minDate={startDate} // limit to after start date
                maxDate={new Date(new Date().setDate(new Date().getDate() + 14))} // limit to 2 weeks from now
              />
              {endDateInvalid && (
                <FormErrorMessage>End date is required.</FormErrorMessage>
              )}
            </FormControl>
          </GridItem>
        </Grid>

        <FormControl isRequired isInvalid={prizeAmountInvalid}>
          <FormLabel>Prize Amount:</FormLabel>
          <NumberInput
            id="amount"
            maxW={280}
            min={0}
            value={prizeAmount}
            onChange={(valueString) => setPrizeAmount(valueString)}
          >
            <HStack>
              <FaEthereum />
              <NumberInputField />
            </HStack>
          </NumberInput>
          {!prizeAmountInvalid ? (
            <FormHelperText ml={7}>Amount is denominated in ETH.</FormHelperText>
          ) : (
            <FormErrorMessage>Prize amount is required.</FormErrorMessage>
          )}
        </FormControl>

        <Button
          size="lg"
          mt={3}
          colorScheme='teal'
          // alignSelf="flex-start"
          isLoading={loading}
          disabled={loading}
          type='submit'
          onClick={handleSubmit}
        >
          Create Challenge
        </Button>

      </VStack>
    </Box>
  )
};

export default Create;
