import React from 'react';
import AppHeaderStyled from './AppHeader.styled.js';

function AppHeader(): JSX.Element {
  return (
    <AppHeaderStyled>
      <AppHeaderStyled.Content>
        Status: coding
      </AppHeaderStyled.Content>
    </AppHeaderStyled>
  );
}

export default AppHeader;