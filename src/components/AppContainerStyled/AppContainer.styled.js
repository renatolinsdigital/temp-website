import styled from 'styled-components';

const AppContainerStyled = styled.div(({ theme }) => {
  const { fontFamilies, themeColors, fontSizes, lineHeights } = theme;

  return {
    display: 'grid',
    minHeight: '100%',
    height: '100vh',
    width: '100%',
    overflowY: 'auto',
    overflowX: 'hidden',
    gridAutoRows: 'min-content 1fr min-content',

    fontFamily: fontFamilies.body.join(','),
    fontSize: fontSizes.default,
    lineHeight: lineHeights.body,
    backgroundColor: themeColors.appBackGround,
    color: themeColors.text
  };
});

export default AppContainerStyled;