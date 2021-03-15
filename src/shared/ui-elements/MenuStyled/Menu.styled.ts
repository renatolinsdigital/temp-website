import styled from 'styled-components';
import { CssInJs, VisualIdentityColorOptions, WithTheme } from '../../models';
import { StyledComponent } from 'styled-components';
import { DefaultTheme } from 'styled-components';

interface MenuProps {
  hasNoMainAxisAlignment?: boolean;
}

type ListProps = WithTheme & {
  isVertical?: boolean;
}

type ItemProps = WithTheme & {
  hoverColor?: VisualIdentityColorOptions;
  hasIcon?: boolean;
}

type MenuListContainer = StyledComponent<"ul", DefaultTheme, ListProps>;

type MenuItemContainer = StyledComponent<"li", DefaultTheme, ItemProps>;

type MenuStyledContainer = StyledComponent<"nav", DefaultTheme, MenuProps> & {
  List?: MenuListContainer;
  Item?: MenuItemContainer;
}

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
      borderLeft: !hasIcon ? `5px solid ${theme.colors.transparent}` : null,
      transition: 'all .2s ease',
      ':hover': {
        borderLeftColor: selectedHoverColor
      }
    };
  });

export default MenuStyled;