import Footer from '@/components/modules/Footer';
import Header from '@/components/modules/Header';
import { GlobalStyle } from '@/styles/global';
import theme from '@/styles/theme';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  );
}
export default MyApp;
