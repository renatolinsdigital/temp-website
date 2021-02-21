import styled from 'styled-components';

const AppContainerStyled = styled.div(({ theme }) => {
  const { fontFamilies, colors, fontSizes, lineHeights } = theme;
  return {
    display: 'grid',
    minHeight: '100%',
    height: '100%',
    height: '100vh',
    width: '100%',
    overflowY: 'auto',
    overflowX: 'hidden',
    gridAutoRows: 'min-content 1fr min-content',

    fontFamily: fontFamilies.body.join(','),
    backgroundColor: colors.appBackGround,
    color: colors.text,
    fontSize: fontSizes.default,
    lineHeight: lineHeights.body
  }
});

export default AppContainerStyled;