import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Button,
  VStack,
  Stack,
  Grid,
  extendTheme,
  Heading,
  Icon,
} from "@chakra-ui/react"
import { AiOutlineArrowRight } from 'react-icons/ai'
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"
import muchWow from './assets/images/much_wow.jpeg';
import './app.css';

const colors = {
  // brand: {
  //   900: '#1a365d',
  //   800: '#153e75',
  //   700: '#2a69ac',
  // }
}

const theme = extendTheme({ colors })

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl" className='background5'>
      <Grid minH="68vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack spacing={3} width="5xl" margin="0 auto" justifyContent="center">
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
          <img
            src={muchWow}
            className="dogeImg"
          />
          <Stack direction='row' spacing={4} style={{ marginTop: '30px' }}>
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
              // _hover={{ transform: "translateX(10px)" }}
            >
              Get Started
            </Button>
          </Stack>
        </VStack>
      </Grid>
      <Box height="30vh" />
    </Box>
  </ChakraProvider>
)
