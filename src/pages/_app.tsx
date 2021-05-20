import { AppProps } from 'next/app';
import { createGlobalStyle } from 'styled-components';
import globalStyles from '../global-styles/index.scss';
import { AppThemeProvider } from 'context';

const GlobalStyle = createGlobalStyle`${globalStyles}`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <AppThemeProvider>
        <Component {...pageProps} />
      </AppThemeProvider>
    </>
  );
}
