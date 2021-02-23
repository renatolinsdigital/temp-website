import styled from 'styled-components';
import { getColorByNumber } from '../../HelperMethods';

const AnchorStyled = styled.a(({ isActive, theme, hoverColor }) => {
  const { themeColors } = theme;
  
  const selectedHoverColor = hoverColor
    ? getColorByNumber(theme, hoverColor)
    : themeColors.textBold;
  
  return {
    cursor: 'pointer',
    transition: '.2s all ease',
    lineHeight: 1.5,
    width: '100%',
    padding: '0 10px',
    display: 'flex',
    color: isActive
      ? themeColors.textBold
      : themeColors.text,
    ':hover': {
      color: selectedHoverColor
    }
  };
});

export default AnchorStyled;