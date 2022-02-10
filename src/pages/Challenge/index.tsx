import {
  useColorModeValue,
  Box,
  Text,
  Heading,
  VStack,
  Flex,
  Button,
  Divider,
  HStack,
} from '@chakra-ui/react';
import { FaEthereum, FaClipboardCheck } from 'react-icons/fa';
import { AiOutlineAlignLeft } from 'react-icons/ai';
import './challenge.css';
import img1 from '../../assets/images/ultra-sound-money/1.jpeg'
import img2 from '../../assets/images/ultra-sound-money/2.jpeg'
import img1Thumbnail from '../../assets/images/ultra-sound-money/1thumbnail.jpeg';
import img2Thumbnail from '../../assets/images/ultra-sound-money/2thumbnail.jpeg';
import ImageExamples from './ImageExamples';
import TimeLeft from '../../molecules/TimeLeft';
import Uploader from './Uploader';
import BorderedBox from '../../atoms/BorderedBox';
import {
  BorderedAccordion,
  BorderedAccordionItem,
  BorderedAccordionButton,
  BorderedAccordionIcon,
  BorderedAccordionPanel,
} from '../../atoms/BorderedAccordion';

const imgs = [
  {
    thumbnail: img1Thumbnail,
    image: img1,
    imgWidth: 508,
    imgHeight: 491,
  },
  {
    thumbnail: img2Thumbnail,
    image: img2,
    imgWidth: 2702,
    imgHeight: 1514,
  },
];

const Challenge = () => {
  return (
    <Box m="30px 85px">
      <Flex>
        <Box width="40vw" bg="black" color="whiteAlpha.800" p={4} alignItems="start" justifyContent="start">
          <Text><b>Title:</b> Create an original Ultra Sound Money meme.</Text>
          <Text><b>Posted by:</b> kylekaplan.eth</Text>
          <Text><b>Start Date:</b> January 7th, 2022</Text>
          <Text><b>End Date:</b> January 14th, 2022</Text>
          <Text><b>Prize amount:</b> 0.01 ETH</Text>
        </Box>
        <Box ml={30}>
          <VStack align="start" spacing={5}>
            <Heading
              fontSize="4xl"
              fontWeight="bold"
              fontFamily="'Work Sans', sans-serif;"
            >
              Create an original Ultra Sound Money meme.
            </Heading>
            <Text
              fontSize="md"
              fontFamily="'Poppins', sans-serif"
              // color={useColorModeValue("gray.900", "#2081e2")}
              // color="#2081e2"
              // color="teal.200"
            >
              By: <Text as="span" color={useColorModeValue("teal.500", "teal.200")}>kylekaplan.eth</Text>
            </Text>
          </VStack>
          <BorderedBox
            mt={8}
            fontFamily="'Poppins', sans-serif"
          >
            <Box p="20px">
              <Text fontSize={16}>
                Challenge ends January 14, 2022 at 6:15am EST
              </Text>
              <TimeLeft date={Date.now() + 1000000000} />
            </Box>
            <Divider />
            <Box
              p={30}
              bg={useColorModeValue("gray.100", "whiteAlpha.100")}
              borderBottomRadius={8}
            >
              <Text>
                Challenge Prize:
              </Text>
              <HStack fontSize="30px">
                <FaEthereum />
                <Text>0.01</Text>
              </HStack>
              <Button colorScheme="teal" mt={4}>
                Submit your meme
              </Button>
            </Box>
          </BorderedBox>
        </Box>
      </Flex>
      <Box height={30} />
      <BorderedAccordion defaultIndex={[0]} allowMultiple>
        <BorderedAccordionItem>
          <h2>
            <BorderedAccordionButton>
              <Box
                flex='1'
                fontSize="lg"
                fontFamily="'Poppins', sans-serif"
              >
                <HStack spacing={2}>
                  <AiOutlineAlignLeft />
                  <Text>Description</Text>
                </HStack>
              </Box>
              <BorderedAccordionIcon />
            </BorderedAccordionButton>
          </h2>
          <BorderedAccordionPanel pb={4} bg={useColorModeValue("gray.100", "whiteAlpha.100")}>
            <Text fontSize="lg">
              The meme must be in favor of the Ultra Sound Money idea and ideally funny and/or educational. I plan on using the meme in an educational series that teaches crypto through memes. Acceptable file formats include all image files, if using photoshop including the .psd file would be extra appreciated by the open source community.
            </Text>
          </BorderedAccordionPanel>
        </BorderedAccordionItem>
      </BorderedAccordion>

      <Box height={30} />

      <BorderedAccordion defaultIndex={[0]} allowMultiple>
        <BorderedAccordionItem>
            <h2>
            <BorderedAccordionButton>
              <Box
                flex='1'
                fontSize="lg"
                fontFamily="'Poppins', sans-serif"
              >
                <HStack spacing={2}>
                  <FaClipboardCheck />
                  <Text>Examples</Text>
                </HStack>
              </Box>
              <BorderedAccordionIcon />
            </BorderedAccordionButton>
            </h2>
            <BorderedAccordionPanel pb={4} bg={useColorModeValue("gray.100", "whiteAlpha.100")}>
              {/* <Text fontSize="2xl">
                <b>Good Examples:</b>
              </Text> */}
              <ImageExamples imgs={imgs} />
            </BorderedAccordionPanel>
          </BorderedAccordionItem>
      </BorderedAccordion>
      {/* <VStack marginTop="30px" fontSize="lg" spacing="5px" align="start">
        <Text>
          🏆 &nbsp; Ξ0.01 ETH
        </Text>
        <Text>
          📅 &nbsp;Jan. 7th - 14th
        </Text>
        <Text>
          ⏳ &nbsp;
          <TimeLeft date={Date.now() + 100000000} />
        </Text>
        <Text fontSize="2xl">
          <b>Good Examples:</b>
        </Text>
        <ImageExamples imgs={imgs} />
      </VStack> */}
      <Box height={75} />
      <Uploader />
    </Box>
  );
}

export default Challenge;
