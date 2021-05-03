import { useContext } from 'react';
import { BoxStyled } from 'shared/containers';
import { TextStyled } from 'shared/ui-elements';
import GlobalActionsContext from 'context/GlobalActionsContext';

function AppHeader() {
  const { toggleIsInDarkMode } = useContext(GlobalActionsContext);

  return (
    <BoxStyled
      justifyContent="flex-end"
      paddingTop={10}
      paddingRight={15}
      paddingLeft={15}
      paddingBottom={10}
    >
      <>
        <button onClick={toggleIsInDarkMode}> TOGGLE</button>

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
