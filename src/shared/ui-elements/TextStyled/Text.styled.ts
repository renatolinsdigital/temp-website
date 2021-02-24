import styled from 'styled-components';
import { CssInJs, StyledProps } from '../../models';
import { TextStyledContainer, TextStyledProps } from './Text.styled.model';

const TextStyled: TextStyledContainer = styled.span((
  {
    theme,
    isInUpperCase,
    fontSize,
    isBold
  }: StyledProps & TextStyledProps): CssInJs => {
  const { variantColors, fontSizes } = theme;

  return {
    color: isBold ? variantColors.textBold : variantColors.text,
    fontFamily: isBold
      ? theme.fontFamilies.bodyBold.join(',')
      : theme.fontFamilies.body.join(','),
    textTransform: isInUpperCase ? 'uppercase' : 'none',
    fontSize: fontSize ? fontSizes[fontSize] : fontSizes.default
  };
});

export default TextStyled;