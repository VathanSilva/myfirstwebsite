import '../styles/globals.css'
import "bootstrap/dist/css/bootstrap.css";
import { ThemeProvider } from "next-themes";
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const colors = {
  barnds: {
    900: "#la365d",
    800: "#153e75",
    700: "#a69ac",
  }
}

const theme = extendTheme({ colors })

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp