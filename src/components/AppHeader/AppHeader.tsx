import { BoxStyled } from 'shared/containers';
import { TextStyled } from 'shared/ui-elements';

function AppHeader() {
  return (
    <BoxStyled
      mainAxisAlignment="end"
      paddingTop={10}
      paddingRight={15}
      paddingLeft={15}
      paddingBottom={10}
    >
      <>
        <TextStyled
          isInUpperCase
          paddingRight={5}
          fontSize="smallest"
        >
          Status:
        </TextStyled>
        <TextStyled
          isInUpperCase
          isBold
          fontSize="smallest"
        >
          coding
        </TextStyled>
      </>
    </BoxStyled>
  );
}

export default AppHeader;
