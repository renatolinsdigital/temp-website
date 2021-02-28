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
    isRemFontSized = true,
    paddingTop = 0,
    paddingBottom = 0,
    paddingLeft = 0,
    paddingRight = 0
  }: StyledProps & TextStyledProps): CssInJs => {
  const {
    variantColors,
    fontSizesRem,
    fontSizesPx,
    lineHeights,
    fontWeights
  } = theme;

  const fontSizeToBeApplied = fontSize
    &&
    (
      isRemFontSized
        ? `${fontSizesRem[fontSize]}rem`
        : `${fontSizesPx[fontSize]}px`
    );

  return {
    color: isBold ? variantColors.textBold : variantColors.text,
    fontFamily: isBold
      ? theme.fontFamilies.bodyBold.join(',')
      : theme.fontFamilies.body.join(','),
    textTransform: isInUpperCase ? 'uppercase' : 'none',
    fontSize: fontSizeToBeApplied || `${fontSizesRem.default}rem`,
    lineHeight: lineHeight ? lineHeights[lineHeight] : lineHeights.body,
    fontWeight: fontWeight ? fontWeights[fontWeight] : fontWeights.regular,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight
  };
});

export default TextStyled;