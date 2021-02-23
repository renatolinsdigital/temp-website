import styled from 'styled-components';
import { getColorByOption } from '../../HelperMethods';

const AnchorStyled = styled.a(({ isActive, theme, hoverColor }) => {
  const { variantColors } = theme;
  
  const selectedHoverColor = hoverColor
    ? getColorByOption(theme, hoverColor)
    : variantColors.textBold;

  return {
    cursor: 'pointer',
    transition: '.2s all ease',
    lineHeight: 1.5,
    width: '100%',
    padding: '0 10px',
    display: 'flex',
    color: isActive
      ? variantColors.textBold
      : variantColors.text,
    ':hover': {
      color: selectedHoverColor
    }
  };
});

export default AnchorStyled;