import styled from 'styled-components';
import { CssInJs, StyledProps } from '../../models';
import { TextStyledContainer, TextStyledProps } from './Text.styled.model';

const TextStyled: TextStyledContainer = styled.span((
  {
    theme,
    isInUpperCase,
    fontSize,
    isBold,
    lineHeight,
    fontWeight,
    paddingTop = 0,
    paddingBottom = 0,
    paddingLeft = 0,
    paddingRight = 0
  }: StyledProps & TextStyledProps): CssInJs => {
  const { variantColors, fontSizes, lineHeights, fontWeights } = theme;

  return {
    color: isBold ? variantColors.textBold : variantColors.text,
    fontFamily: isBold
      ? theme.fontFamilies.bodyBold.join(',')
      : theme.fontFamilies.body.join(','),
    textTransform: isInUpperCase ? 'uppercase' : 'none',
    fontSize: fontSize ? fontSizes[fontSize] : fontSizes.default,
    lineHeight: lineHeight ? lineHeights[lineHeight] : lineHeights.body,
    fontWeight: fontWeight ? fontWeights[fontWeight] : fontWeights.regular,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight
  };
});

export default TextStyled;