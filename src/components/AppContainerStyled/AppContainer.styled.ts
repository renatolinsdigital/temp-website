import styled, { StyledComponent } from 'styled-components';
import { CssInJs, StyledProps } from '../../shared/models';

const AppContainerStyled:
  StyledComponent<"div", CssInJs> = styled.div((
    {
      theme
    }: StyledProps
  ): CssInJs => {
    const { fontFamilies, variantColors, fontSizesRem, lineHeights } = theme;

    return {
      display: 'grid',
      minHeight: '100%',
      height: '100vh',
      width: '100%',
      overflowY: 'auto',
      overflowX: 'hidden',
      gridAutoRows: 'min-content 1fr min-content',

      fontFamily: fontFamilies.body.join(','),
      fontSize: `${fontSizesRem.default}rem`,
      lineHeight: lineHeights.body,
      backgroundColor: variantColors.appBackGround,
      color: variantColors.text
    };
  });

export default AppContainerStyled;