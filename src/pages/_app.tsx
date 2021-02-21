
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../theme/default.js';
import useDarkMode from 'use-dark-mode';
import '../global-styles/index.scss';

export default function App({ Component, pageProps }: AppProps) {

  const { value } = useDarkMode(false, { storageKey: undefined, onChange: undefined });
  const theme = value ? darkTheme : lightTheme;

  return (
    <>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
