/* eslint-disable @typescript-eslint/ban-ts-comment */
import styled, { StyledComponent, DefaultTheme } from 'styled-components';
import { CssInJs, VisualIdentityColorOptions } from '../../models';

interface MenuProps {
  hasNoMainAxisAlignment?: boolean;
}

type ListProps = {
  theme: DefaultTheme;
  isVertical?: boolean;
}

type ItemProps = {
  theme: DefaultTheme;
  hoverColor?: VisualIdentityColorOptions;
  hasIcon?: boolean;
}

type MenuListContainer = StyledComponent<"ul", DefaultTheme, ListProps>;

type MenuItemContainer = StyledComponent<"li", DefaultTheme, ItemProps>;

type MenuStyledContainer = StyledComponent<"nav", DefaultTheme, MenuProps> & {
  List: MenuListContainer;
  Item: MenuItemContainer;
}

// @ts-ignore
const MenuStyled: MenuStyledContainer = styled.nav(
  ({ hasNoMainAxisAlignment }: MenuProps): CssInJs => (
    {
      display: 'flex',
      width: '100%',
      justifyContent: hasNoMainAxisAlignment ? 'flex-start' : 'center'
    }
  ));

MenuStyled.List = styled.ul(
  ({ isVertical }: ListProps): CssInJs => (
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
  ({ hasIcon, hoverColor, theme }: ItemProps): CssInJs => {
    const selectedHoverColor = hoverColor
      ? theme.colors[hoverColor]
      : theme.colors.transparent;

    return {
      display: 'flex',
      textDecoration: 'none',
      listStyleType: 'none',
      borderLeft: !hasIcon ? `5px solid ${theme.colors.transparent}` : 0,
      transition: 'all .2s ease',
      ':hover': {
        borderLeftColor: selectedHoverColor
      }
    };
  });

export default MenuStyled;