import styled from 'styled-components';
import { getColorByNumber } from '../../HelperMethods';

const TitleStyled = styled.h1(({ theme, colorOption }) => {

  const selectedColor = getColorByNumber(theme, colorOption);

  return {
    width: '100%',
    display: 'flex',
    backgroundColor: selectedColor,
    margin: '15px 0 5px',
    padding: '4px 10px',
    fontFamily: theme.fontFamilies.heading1,
    fontSize: theme.fontSizes.small,
    textTransform: 'uppercase',
    color: colorOption === 'tertiary' ? theme.colors.dark : theme.colors.text
  }
});

export default TitleStyled;