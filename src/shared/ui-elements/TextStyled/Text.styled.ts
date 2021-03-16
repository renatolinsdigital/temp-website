import styled, { StyledComponent } from 'styled-components';
import { CssInJs, WithTheme } from '../../models';
import { DefaultTheme } from 'styled-components';

type TextProps = WithTheme & {
  isInUpperCase?: boolean;
  isBold?: boolean;
  fixedColor?:
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'white'
  | 'snow'
  | 'black'
  | 'dark'
  | 'transparent',
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
    fixedColor,
    isInUpperCase = false,
    fontSize = 'default',
    isBold = false,
    lineHeight = 'body',
    fontWeight = 'regular',
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

  const defaultColor = isBold ? variantColors.textBold : variantColors.text;

  return {
    color: fixedColor
      ? theme.colors[fixedColor]
      : defaultColor,
    fontFamily: isBold
      ? theme.fontFamilies.bodyBold.join(',')
      : theme.fontFamilies.body.join(','),
    textTransform: isInUpperCase ? 'uppercase' : 'none',
    fontSize: fontSizeToBeApplied || `${fontSizesRem.default}rem`,
    lineHeight: Number(lineHeights[lineHeight]),
    fontWeight: fontWeights[fontWeight],
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight
  };
});

export default TextStyled;