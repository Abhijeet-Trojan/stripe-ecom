import '../styles/globals.css';
import { RecoilRoot } from 'recoil';
import { ChakraProvider } from '@chakra-ui/react';

export default function App({ Component, pageProps }) {
  return <RecoilRoot>
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  </RecoilRoot>
}
