import {
  ChakraProvider,
  extendTheme,
  ThemeConfig,
  Box,
  Flex,
} from '@chakra-ui/react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom'
import { initializeApp } from 'firebase/app';
// import { getFirestore } from "firebase/firestore"
import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'
import './app.css';
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import Challenge from "./pages/Challenge";
import Home from "./pages/Home"
import NotFound from "./pages/NotFound";


const colors = {
  // brand: {
  //   900: '#1a365d',
  //   800: '#153e75',
  //   700: '#2a69ac',
  // }
}

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const Border = {
  variants: {
    'thin': (props: any) => ({
      border: '1px solid',
      borderColor: props.colorMode === 'light' ? 'gray.200' : 'whiteAlpha.300',
      borderRadius: '8px',
    }),
    'thick': (props: any) => ({
      border: '4px solid',
      borderColor: props.colorMode === 'light' ? 'gray.200' : 'whiteAlpha.300',
      borderRadius: '8px',
    }),
  },
  // The default variant value
  defaultProps: {
    variant: 'thin',
  },
}

const Text = {
  variants: {
    'blackAndWhite': (props: any) => ({
      color: props.colorMode === 'light' ? 'gray.800' : 'whiteAlpha.800',
    }),
    'teal': (props: any) => ({
      color: props.colorMode === 'light' ? 'teal.500' : 'teal.200',
    }),
  },
  // The default variant value
  defaultProps: {
    variant: 'blackAndWhite',
  },
}

const Background = {
  variants: {
    'shade': (props: any) => ({
      backgroundColor: props.colorMode === 'light' ? 'gray.100' : 'whiteAlpha.100',
    }),
  },
  // The default variant value
  defaultProps: {
    variant: 'shade',
  },
}

const components = {
  Border,
  Text,
  Background,
}

const theme = extendTheme({ config, colors, components })

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  projectId: "meme-to-earn",
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
};
// // Initialize Firebase
const app = initializeApp(firebaseConfig);
// const db = getFirestore();

export const App = () => (
  <ChakraProvider theme={theme}>
    <Router basename="/open-work" >
      <Box p={3}>
        <Flex justify="end">
          <ColorModeSwitcher />
        </Flex>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/challenge/:id" element={<Challenge />}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Box>
    </Router>
  </ChakraProvider>
)
