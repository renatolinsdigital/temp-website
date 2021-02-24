import React from 'react';
import AppHeaderStyled from './AppHeader.styled';
import { TextStyled } from '../../shared/ui-elements';

function AppHeader() {
  return (
    <AppHeaderStyled>
      <TextStyled
        isInUpperCase
        paddingRight={5}
        fontSize="smallest">
        Status:
      </TextStyled>
      <TextStyled
        isInUpperCase
        isBold
        fontSize="smallest">
        coding
      </TextStyled>
    </AppHeaderStyled>
  );
}

export default AppHeader;