import { useEffect } from 'react';
import {
  Box,
  Text,
  Button,
  VStack,
  Stack,
  Heading,
  Icon,
  Image,
} from "@chakra-ui/react";
import Parallax from 'parallax-js'
import {
  Link
} from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai';
import './home.css';
import muchWow from '../../assets/images/much_wow.jpeg';

const Home = () => {

  useEffect(() => {
    var scene = document.getElementById('scene');
    new Parallax(scene, {
      relativeInput: true
    });    
  }, []);

  return (
    <>
    {/* Parallax background image */}
    <Box
      id="scene"
      data-relative-input="true"
      position="absolute"
      top="0"
      bottom="0"
      right="0"
      left="0"
    >
      <Box
        minH="90vh"
        data-depth="0.2"
        className='background5'
      />
    </Box>
    {/* Start of regular content */}
    <Box>
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
          Meme to Earn
        </Heading>
        <Text
          color='gray.350'
          fontSize="3xl"
        >
          The best meme wins. All memes are open source.
        </Text>
        <Stack direction='row' spacing={4} style={{ marginTop: '30px' }}>
          <Link to="/challenge/OVyNZQZY8WqDKF7bdP6Z">
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
      <VStack
        minH={{ base: '35vh', sm: "35vh", md: "23vh", lg: "23vh", xl: "23vh" }}
      />
    </Box>
    </>
  );
}

export default Home;
