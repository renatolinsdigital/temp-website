import styled from 'styled-components';

const MenuStyled = styled.nav(() => (
  {
    display: 'flex',
    flex: 1
  }
));

MenuStyled.List = styled.ul(({ isVertical }) => (
  {
    display: 'flex',
    flexDirection: isVertical ? 'column' : 'row',
    flex: isVertical ? 1 : null,
    'li': {
      margin: isVertical ? '8px 0' : '0 20px'
    }
  }
));

MenuStyled.Item = styled.li(() => (
  {
    display: 'flex',
  }
));

export default MenuStyled;