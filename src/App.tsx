import {
  ChakraProvider,
  extendTheme,
  Box,
  Flex,
} from "@chakra-ui/react"
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom'
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

const theme = extendTheme({ colors })

export const App = () => (
  <ChakraProvider theme={theme}>
    <Router>
      <Box p={3}>
        <Flex justify="end">
          <ColorModeSwitcher />
        </Flex>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/challenge" element={<Challenge/>}/>
          {/* <Route path="/recovery-password" element={<RecoveryPassword/>}/> */}
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Box>
    </Router>
  </ChakraProvider>
)
