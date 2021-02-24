import styled, { StyledComponent } from 'styled-components';
import { CssInJs, StyledProps } from '../../models';
import TextStyledProps from './Text.styled.model';

const TextStyled: StyledComponent<"span", CssInJs, TextStyledProps> = styled.span(
  ({ theme, isInUpperCase, fontSize, isBold }: StyledProps & TextStyledProps): CssInJs => {
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