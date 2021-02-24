import styled, { StyledComponent } from 'styled-components';
import { getColorByOption } from '../../helper-methods';
import { CssInJs, StyledProps } from '../../models';
import AnchorProps from './Anchor.styled.model';

const AnchorStyled: StyledComponent<"a", CssInJs, StyledProps & AnchorProps> = styled.a((
  {
    isActive,
    theme,
    hoverColor
  }: StyledProps & AnchorProps): CssInJs => {
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