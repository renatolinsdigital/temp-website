
import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { defaultTheme, lightVariantColors, darkVariantColors } from '../theme';
import useDarkMode from 'use-dark-mode';
import globalStyles from '../global-styles/index.scss';
import { Theme } from './../theme/models';

const GlobalStyle = createGlobalStyle`${globalStyles}`;

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  const { value } = useDarkMode(true, { storageKey: undefined, onChange: undefined });

  const theme: Theme = {
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
