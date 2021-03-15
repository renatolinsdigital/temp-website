import styled from 'styled-components';
import { AnchorProps, CssInJs } from '../../models';

const AnchorStyled = styled.a((
  {
    theme,
    isActive,
    hoverColor
  }: AnchorProps): CssInJs => {
  const { variantColors } = theme;

  const selectedHoverColor = hoverColor
    ? theme.colors[hoverColor]
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