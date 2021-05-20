import styled, { StyledComponent, DefaultTheme } from 'styled-components';
import { CssInJs, VisualIdentityColorOptions } from 'shared/models';

interface MenuProps {
  hasNoMainAxisAlignment?: boolean;
}

type ListProps = {
  theme: DefaultTheme;
  isVertical?: boolean;
};

type ItemProps = {
  theme: DefaultTheme;
  hoverColor?: VisualIdentityColorOptions;
  hasIcon?: boolean;
};

type MenuListContainer = StyledComponent<'ul', DefaultTheme, ListProps>;

type MenuItemContainer = StyledComponent<'li', DefaultTheme, ItemProps>;

type MenuStyledContainer = StyledComponent<'nav', DefaultTheme, MenuProps> & {
  List: MenuListContainer;
  Item: MenuItemContainer;
};

const MenuStyled = styled.nav<MenuProps>(
  ({ hasNoMainAxisAlignment }): CssInJs => (
    {
      display: 'flex',
      width: '100%',
      justifyContent: hasNoMainAxisAlignment ? 'flex-start' : 'center',
    }
  ),
) as MenuStyledContainer;

MenuStyled.List = styled.ul<ListProps>(
  ({ isVertical }): CssInJs => (
    {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: isVertical ? 'column' : 'row',
      li: {
        margin: isVertical ? '8px 0' : '0 20px',
      },
    }
  ),
);

MenuStyled.Item = styled.li<ItemProps>(
  ({ hasIcon, hoverColor, theme }): CssInJs => {
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
        borderLeftColor: selectedHoverColor,
      },
    };
  },
);

export default MenuStyled;
