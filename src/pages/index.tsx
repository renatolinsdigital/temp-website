import React from 'react';

import {
  AppContainerStyled, AppHeader,
  MainContent, AppFooter
} from '../components';

export default function Home(): JSX.Element {
  return (
    <AppContainerStyled>
      <AppHeader />
      <MainContent />
      <AppFooter />
    </AppContainerStyled>
  );
}
