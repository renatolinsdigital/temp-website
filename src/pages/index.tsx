import {
  AppFooter,
  AppHeader,
  MainContent,
  AppContainerStyled
} from 'components';
import { useThemeContext } from 'context';
import { ThemeProvider, DefaultTheme } from 'styled-components';

function Home() {
  const { theme } = useThemeContext();
  return (
    <ThemeProvider theme={theme as DefaultTheme}>
      <AppContainerStyled>
        <AppHeader />
        <MainContent />
        <AppFooter />
      </AppContainerStyled>
    </ThemeProvider>
  );
}

export default Home;
