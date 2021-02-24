import styled from 'styled-components';
import { getColorByOption } from '../../helper-methods';

const TitleStyled = styled.h1(({ theme, colorOption }) => {

  const { isInDarkMode, colors, variantColors, fontFamilies, fontSizes } = theme;

  const selectedColor = isInDarkMode
    ? getColorByOption(theme, colorOption)
    : theme.colors.dark;
  
  const darkModeColor = colorOption === 'tertiary'
    ? colors.dark
    : variantColors.text;
  const lightModeColor = colors.white;

  return {
    width: '100%',
    display: 'flex',
    backgroundColor: selectedColor,
    margin: '15px 0 5px',
    padding: '4px 10px',
    fontFamily: fontFamilies.heading1,
    fontSize: fontSizes.small,
    textTransform: 'uppercase',
    color: isInDarkMode ? darkModeColor : lightModeColor
  };
});

export default TitleStyled;