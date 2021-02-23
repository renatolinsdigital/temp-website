import React from 'react';

import {
  AppContainerStyled,
  AppHeader, MainContent, AppFooter
} from '../components';

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
