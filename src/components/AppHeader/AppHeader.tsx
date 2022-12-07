// import { useToggleDarkModeContext } from 'context';
import { BoxStyled, TextStyled } from 'shared/components';

function AppHeader() {
  // const toggleIsInDarkMode = useToggleDarkModeContext();
  return (
    <BoxStyled
      paddingTop={10}
      paddingLeft={15}
      paddingRight={15}
      paddingBottom={10}
      justifyContent="flex-end"
    >
      <>
        {/* <button onClick={toggleIsInDarkMode}> TOGGLE</button> */}

        <TextStyled
          isInUpperCase
          paddingRight={5}
          fontSize="smallest"
        >
          Status:
        </TextStyled>
        <TextStyled
          isBold
          isInUpperCase
          fontSize="smallest"
        >
          coding
        </TextStyled>
      </>
    </BoxStyled>
  );
}

export default AppHeader;
