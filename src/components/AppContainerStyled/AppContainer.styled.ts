import styled from 'styled-components';

const AppContainerStyled = styled.div(({ theme }) => {
  const { fontFamilies, variantColors, fontSizesRem, lineHeights } = theme;

  return {
    display: 'grid',
    minHeight: '100%',
    height: '100vh',
    width: '100%',
    gridAutoRows: 'min-content 1fr min-content',

    fontFamily: fontFamilies.body.join(','),
    fontSize: `${fontSizesRem.default}rem`,
    lineHeight: lineHeights.body,
    backgroundColor: variantColors.appBackground,
    color: variantColors.text
  };
});

export default AppContainerStyled;