import styled, { StyledComponent } from 'styled-components';
import { CssInJs, VisualIdentityColorOptions, WithTheme } from '../../models';
import { DefaultTheme } from 'styled-components';

type TitleStyledProps = WithTheme & {
  colorOption?: VisualIdentityColorOptions;
  isSubHeading?: boolean;
  isInUpperCase?: boolean;
  isTextColorDark?: boolean;
};

const TitleStyled: StyledComponent<"h1", DefaultTheme, TitleStyledProps> = styled.h1((
  {
    theme,
    colorOption,
    isSubHeading,
    isInUpperCase = true
  }: TitleStyledProps): CssInJs => {

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
    ? colors[colorOption || 'transparent']
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