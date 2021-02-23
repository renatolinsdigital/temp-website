
import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { defaultTheme, lightModeColors, darkModeColors } from '../theme/default.js';
import useDarkMode from 'use-dark-mode';
import globalStyles from '../global-styles/index.scss';

const GlobalStyle = createGlobalStyle`${globalStyles}`;

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  const { value } = useDarkMode(true, { storageKey: undefined, onChange: undefined });

  const theme = {
    ...defaultTheme,
    ...{ isInDarkMode: value },
    themeColors: value ? darkModeColors : lightModeColors
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
