import styled from 'styled-components';
import { getColorByOption } from '../../helper-methods';

const AnchorStyled = styled.a(({ isActive, theme, hoverColor }) => {
  const { variantColors } = theme;

  const selectedHoverColor = hoverColor
    ? getColorByOption(theme, hoverColor)
    : variantColors.textBold;

  return {
    display: 'flex',
    width: '100%',
    padding: '0 10px',
    cursor: 'pointer',
    transition: '.2s all ease',
    lineHeight: theme.lineHeights.body,

    color: isActive
      ? variantColors.textBold
      : variantColors.text,
    ':hover': {
      color: selectedHoverColor
    }
  };
});

export default AnchorStyled;