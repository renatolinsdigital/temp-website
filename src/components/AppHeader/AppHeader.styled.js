import styled from 'styled-components';
import { FlexContainer } from '../../shared/containers';

const AppHeaderStyled = styled.header(() => {
  return {
    ...FlexContainer,
    justifyContent: 'flex-end',
    width: '100%',
    maxWidth: '100%'
  };
});

AppHeaderStyled.Content = styled.span(({ theme }) => {
  const { themeColors, fontSizes } = theme;
  return {
    padding: '5px 10px',
    color: themeColors.text,
    textTransform: 'uppercase',
    fontSize: fontSizes.smallest
  };
});

export default AppHeaderStyled;