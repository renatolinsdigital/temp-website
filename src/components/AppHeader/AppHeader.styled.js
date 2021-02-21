import styled from 'styled-components';
import { FlexContainer } from '../../shared/containers';

const AppHeaderStyled = styled.header(() => {
  return {
    ...FlexContainer,
    justifyContent: 'flex-end',
    width: '100%',
    maxWidth: '100%'
  }
});

AppHeaderStyled.Text = styled.span(({theme}) => (
  {
    padding: '5px 10px',
    color: theme.colors.text,
    fontSize: theme.fontSizes.small
  }
));

export default AppHeaderStyled;