import React from 'react';

import {
  AppContainerStyled,
  AppHeader, MainContent, AppFooter
} from '../components';

function Home(): JSX.Element {
  return (
    <AppContainerStyled>
      <AppHeader />
      <MainContent />
      <AppFooter />
    </AppContainerStyled>
  );
}

export default Home;
