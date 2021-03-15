import styled, { StyledComponent } from 'styled-components';
import { CssInJs, WithTheme } from '../../models';
import { DefaultTheme } from 'styled-components';

type TextProps = WithTheme & {
  isInUpperCase?: boolean;
  isBold?: boolean;
  fontSize?:
  'smallest'
  | 'small'
  | 'default'
  | 'large'
  | 'extraLarge'
  | 'huge'
  | 'jumbo'
  | 'biggest',
  lineHeight?:
  'body'
  | 'heading'
  | 'subHeading'
  | 'code';
  fontWeight?:
  'regular'
  | 'bold';
  isRemFontSized?: boolean;
  paddingTop?: number;
  paddingBottom?: number;
  paddingLeft?: number;
  paddingRight?: number;
}

const TextStyled: StyledComponent<"span", DefaultTheme, TextProps> = styled.span((
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
  }: TextProps): CssInJs => {
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