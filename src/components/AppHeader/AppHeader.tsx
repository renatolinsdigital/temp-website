import { useToggleDarkModeContext } from 'context';
import { BoxStyled, TextStyled } from 'shared/components';

function AppHeader() {
  const toggleIsInDarkMode = useToggleDarkModeContext();
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
