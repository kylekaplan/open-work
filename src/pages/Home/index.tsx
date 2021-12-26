import {
  Box,
  Flex,
  Text,
  Button,
  VStack,
  Stack,
  Grid,
  Heading,
  Icon,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import {
  Link
} from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai';
import './home.css';
import muchWow from '../../assets/images/much_wow.jpeg';

const Home = () => {
  const variant = useBreakpointValue({ base: 'outline', md: 'solid' })
  return (
    <Box className='background5'>
      <VStack
        spacing={3}
        minH="66vh"
        textAlign="center"
        justifyContent="center"
      >
        <Heading
          fontSize='6xl'
          fontWeight='extrabold'
          // fontFamily='"Baloo Bhaijaan 2"'
          className='headerText'
        >
          Earn Crypto by Making Memes
        </Heading>
        <Text
          color='gray.350'
          fontSize="3xl"
        >
          The best meme wins. All memes are open source.
        </Text>
        <Stack direction='row' spacing={4} style={{ marginTop: '30px' }}>
          <Link to="/challenge">
            <Button
              rightIcon={<Icon as={AiOutlineArrowRight} />}
              // colorScheme="#48BB78"
              colorScheme="teal"
              // color='white'
              // bgGradient="linear-gradient(163.91deg,#944af2 18.37%,#448fff 82.04%)"
              variant='solid'
              size="lg"
              height='56px'
              className="ctaButton"
            >
              Get Started
            </Button>
          </Link>
        </Stack>
        <Image
          src={muchWow}
          className="dogeImg"
          alt="Doge meme"
          width={{ base: 290, sm: 290, md: 290, lg: 333, xl: 333 }}
        />
      </VStack>
      <VStack minH={{ base: '38vh', sm: "48vh", md: "30vh", lg: "22vh", xl: "22vh" }} />
    </Box>
  );
}

export default Home;
