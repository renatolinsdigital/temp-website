import styled from 'styled-components';
import { getColorByNumber } from '../../HelperMethods';
import StyledProps from '../../models/StyledProps.model';
import {
  MenuStyledType, MenuListStyled,
  MenuItemStyled, ListStyledProps,
  ItemStyledProps
} from './Menu.styled.model';

const MenuStyled: MenuStyledType = styled.nav(() => (
  {
    display: 'flex',
    width: '100%'
  }
));

MenuStyled.List = styled.ul(
  ({ isVertical }: StyledProps & ListStyledProps): MenuListStyled => (
    {
      display: 'flex',
      width: '100%',
      justifyContent: 'center',
      flexDirection: isVertical ? 'column' : 'row',
      'li': {
        margin: isVertical ? '8px 0' : '0 20px'
      }
    }
  ));

MenuStyled.Item = styled.li(
  ({ hasIcon, hoverColor, theme }: StyledProps & ItemStyledProps): MenuItemStyled => {
    const selectedHoverColor = getColorByNumber(theme, hoverColor);

    return {
      display: 'flex',
      textDecoration: 'none',
      listStyleType: 'none',
      borderLeft: !hasIcon ? `5px solid ${theme.colors.transparent}` : null,
      transition: 'all .2s ease',
      ':hover': {
        borderLeftColor: selectedHoverColor || null
      }
    };
  });

export default MenuStyled;