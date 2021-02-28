import styled, { StyledComponent } from 'styled-components';
import { getColorByOption } from '../../helper-methods';
import { CssInJs, StyledProps } from '../../models';
import { VisualIdentityColorsOptions } from "../../../theme/models";

type TitleStyledProps = {
  colorOption?: VisualIdentityColorsOptions
  isSubHeading?: boolean;
  isInUpperCase?: boolean;
  isTextColorDark?: boolean;
};

type TitleStyledContainer = StyledComponent<"h1", CssInJs, TitleStyledProps>;

const TitleStyled: TitleStyledContainer
  = styled.h1((
    {
      theme,
      colorOption,
      isSubHeading,
      isInUpperCase = true
    }: StyledProps & TitleStyledProps): CssInJs => {

    const {
      isInDarkMode,
      variantColors,
      fontFamilies,
      fontSizesRem,
      lineHeights,
      colors
    } = theme;

    const color = isInDarkMode && colorOption === 'tertiary'
      ? colors.dark
      : variantColors.heading;

    const backgroundColor = isInDarkMode
      ? getColorByOption(theme, colorOption)
      : colors.neutralBlue;

    return {
      width: '100%',
      display: 'flex',
      color,
      backgroundColor,
      margin: '15px 0 5px',
      padding: '2px 12px',

      fontFamily: isSubHeading
        ? fontFamilies.heading2.join(',')
        : fontFamilies.heading1.join(','),

      textTransform: isInUpperCase ? 'uppercase' : 'none',

      fontSize: isSubHeading
        ? `${fontSizesRem.default}rem`
        : `${fontSizesRem.large}rem`,

      lineHeight: isSubHeading
        ? lineHeights.subHeading
        : lineHeights.heading
    };
  });

export default TitleStyled;