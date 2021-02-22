import styled from 'styled-components';
import { getColorByNumber } from '../../HelperMethods';

const TitleStyled = styled.h1(({ theme, colorOption }) => {

  const { isDarkMode } = theme.colors;

  const selectedColor = isDarkMode
    ? getColorByNumber(theme, colorOption)
    : theme.colors.dark;
  
  const darkModeColor = colorOption === 'tertiary' ? theme.colors.dark : theme.colors.text;
  const lightModeColor = theme.colors.white;

  return {
    width: '100%',
    display: 'flex',
    backgroundColor: selectedColor,
    margin: '15px 0 5px',
    padding: '4px 10px',
    fontFamily: theme.fontFamilies.heading1,
    fontSize: theme.fontSizes.small,
    textTransform: 'uppercase',
    color: isDarkMode ? darkModeColor : lightModeColor
  }
});

export default TitleStyled;