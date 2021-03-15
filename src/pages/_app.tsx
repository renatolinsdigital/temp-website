
import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider, createGlobalStyle, DefaultTheme } from 'styled-components';
import { defaultTheme, lightVariantColors, darkVariantColors } from '../theme';
import useDarkMode from 'use-dark-mode';
import globalStyles from '../global-styles/index.scss';

const GlobalStyle = createGlobalStyle`${globalStyles}`;

export default function App({ Component, pageProps }: AppProps) {
  const { value } = useDarkMode(true, { storageKey: undefined, onChange: undefined });

  const theme: DefaultTheme = {
    isInDarkMode: value,
    ...defaultTheme,
    variantColors: value ? darkVariantColors : lightVariantColors
  };

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
