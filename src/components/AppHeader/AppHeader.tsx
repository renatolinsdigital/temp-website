import React from 'react';
import AppHeaderStyled from './AppHeader.styled';
import { TextStyled } from '../../shared/ui-elements';
import { BoxStyled } from '../../shared/utilities';

function AppHeader() {
  return (
    <AppHeaderStyled>
      <TextStyled
        paddingRight={50}
        isInUpperCase
        fontSize="smallest">
        Status:
      </TextStyled>
      <BoxStyled>
        <TextStyled
          isInUpperCase
          isBold
          fontSize="smallest">
          coding
      </TextStyled>
      </BoxStyled>
    </AppHeaderStyled>
  );
}

export default AppHeader;