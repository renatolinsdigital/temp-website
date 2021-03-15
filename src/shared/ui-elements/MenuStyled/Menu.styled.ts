import styled from 'styled-components';
import { getColorByOption } from '../../helper-methods';
import { CssInJs } from '../../models';
import { StyledComponent } from 'styled-components';
import { DefaultTheme } from 'styled-components';

type MenuListStyled = StyledComponent<"ul", DefaultTheme>;
type MenuItemStyled = StyledComponent<"li", DefaultTheme>;

type MenuContainerStyled = StyledComponent<'nav', DefaultTheme> & {
  List?: MenuListStyled;
  Item?: MenuItemStyled;
}

const MenuStyled: MenuContainerStyled = styled.nav(
  ({ hasNoMainAxisAlignment }): CssInJs => (
    {
      display: 'flex',
      width: '100%',
      justifyContent: hasNoMainAxisAlignment ? 'flex-start' : 'center'
    }
  ));

MenuStyled.List = styled.ul(
  ({ isVertical }): CssInJs => (
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
  ({ hasIcon, hoverColor, theme }): CssInJs => {
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