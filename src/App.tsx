import {
  ChakraProvider,
  extendTheme,
} from "@chakra-ui/react"
import './app.css';
import Home from "./pages/Home"

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
    <Home />
  </ChakraProvider>
)
