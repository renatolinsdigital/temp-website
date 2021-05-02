import {
  AppFooter,
  AppHeader,
  MainContent,
  AppContainerStyled
} from 'components';

function Home() {
  return (
    <AppContainerStyled>
      <AppHeader />
      <MainContent />
      <AppFooter />
    </AppContainerStyled>
  );
}

export default Home;
