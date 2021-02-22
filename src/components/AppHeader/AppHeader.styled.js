import styled from 'styled-components';
import { FlexContainer } from '../../shared/containers/index.js';

const AppHeaderStyled = styled.header(() => {
  return {
    ...FlexContainer,
    justifyContent: 'flex-end',
    width: '100%',
    maxWidth: '100%'
  }
});

AppHeaderStyled.Content = styled.span(({theme}) => (
  {
    padding: '5px 10px',
    color: theme.colors.text,
    fontSize: theme.fontSizes.small,
    textTransform: 'uppercase',
    fontSize: theme.fontSizes.smallest
  }
));

export default AppHeaderStyled;