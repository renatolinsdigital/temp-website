import { AppProps } from 'next/app';
import { ThemeProvider, createGlobalStyle, DefaultTheme } from 'styled-components';
import { defaultTheme, lightVariantColors, darkVariantColors } from '../theme';
import globalStyles from '../global-styles/index.scss';
import { useStorageState } from 'shared/utilities';
import GlobalActionsContext from '../context/GlobalActionsContext';

const GlobalStyle = createGlobalStyle`${globalStyles}`;

export default function App({ Component, pageProps }: AppProps) {
  const [isInDarkMode, setIsInDarkMode] = useStorageState<boolean>('isInDarkMode', true);

  const toggleIsInDarkMode = () => {
    setIsInDarkMode(value => !value);
  };

  const globalActions = { toggleIsInDarkMode };

  const theme: DefaultTheme = {
    isInDarkMode,
    ...defaultTheme,
    variantColors: isInDarkMode ? darkVariantColors : lightVariantColors
  };

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <GlobalActionsContext.Provider value={globalActions}>
          <Component {...pageProps} />
        </GlobalActionsContext.Provider>
      </ThemeProvider>
    </>
  );
}
