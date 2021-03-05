import styled from 'styled-components';
import { getColorByOption } from '../../helper-methods';
import { CssInJs, StyledProps } from '../../models';
import {
  MenuContainerStyled,
  ListStyledProps,
  ItemStyledProps,
  NavStyledProps
} from './Menu.styled.model';

const MenuStyled: MenuContainerStyled = styled.nav(
  ({ hasNoMainAxisAlignment }: StyledProps & NavStyledProps): CssInJs => (
    {
      display: 'flex',
      width: '100%',
      justifyContent: hasNoMainAxisAlignment ? 'flex-start' : 'center'
    }
  ));

MenuStyled.List = styled.ul(
  ({ isVertical }: StyledProps & ListStyledProps): CssInJs => (
    {
      display: 'flex',

      justifyContent: 'center',
      flexDirection: isVertical ? 'column' : 'row',
      'li': {
        margin: isVertical ? '8px 0' : '0 20px'
      }
    }
  ));

MenuStyled.Item = styled.li(
  ({ hasIcon, hoverColor, theme }: StyledProps & ItemStyledProps): CssInJs => {
    const selectedHoverColor = getColorByOption(theme, hoverColor);

    return {
      display: 'flex',
      textDecoration: 'none',
      listStyleType: 'none',
      borderLeft: !hasIcon ? `5px solid ${theme.colors.transparent}` : null,
      transition: 'all .2s ease',
      ':hover': {
        borderLeftColor: selectedHoverColor
      }
    };
  });

export default MenuStyled;