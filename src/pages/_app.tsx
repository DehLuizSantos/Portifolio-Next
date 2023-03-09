import Footer from '@/components/modules/Footer';
import Header from '@/components/modules/Header';
import { GlobalStyle } from '@/styles/global';
import theme from '@/styles/theme';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

function MyApp({ Component, pageProps }: AppProps) {
  const [open, setOpen] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <Header setOpen={setOpen} open={open} />
      <Component {...pageProps} />
      <Footer />
      <GlobalStyle />
    </ThemeProvider>
  );
}
export default MyApp;
