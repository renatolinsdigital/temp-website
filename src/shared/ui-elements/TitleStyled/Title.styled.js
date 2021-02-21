import styled from 'styled-components';

const TitleStyled = styled.h1(({ theme, colorOption }) => {
  const { primary, secondary, tertiary, quaternary } = theme.colors;
  const availableColors = {
    1: primary,
    2: secondary,
    3: tertiary
  };

  const selectedColor = colorOption && availableColors[colorOption]
    ? availableColors[colorOption]
    : quaternary;

  return {
    width: '100%',
    display: 'flex',
    backgroundColor: selectedColor,
    padding: '5px 10px',
    fontFamily: theme.fontFamilies.heading1,
    fontSize: theme.fontSizes.small,
    textTransform: 'uppercase',
    color: colorOption === 3 ? theme.colors.dark : theme.colors.text
  }
});

export default TitleStyled;