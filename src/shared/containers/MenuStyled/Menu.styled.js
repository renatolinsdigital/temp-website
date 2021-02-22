import styled from 'styled-components';
import { getColorByNumber } from './../../HelperMethods';

const MenuStyled = styled.nav(() => (
  {
    display: 'flex',
    width: '100%'
  }
));

MenuStyled.List = styled.ul(({ isVertical }) => (
  {
    display: 'flex',
    width: '100%',
    flexDirection: isVertical ? 'column' : 'row',
    'li': {
      margin: isVertical ? '8px 0' : '0 20px'
    }
  }
));

MenuStyled.Item = styled.li(({ theme, hoverColor }) => {
  const selectedHoverColor = getColorByNumber(theme, hoverColor);

  return {
    display: 'flex',
    textDecoration: 'none',
    listStyleType: 'none',
    borderLeft: `5px solid ${theme.colors.transparent}`,
    transition: 'all .2s ease',
    ':hover': {
      borderLeftColor: selectedHoverColor
    }
  }
});

export default MenuStyled;