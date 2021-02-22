import styled from 'styled-components';
import { FlexContainer } from '../../shared/containers';

const AppFooterStyled = styled.footer(({ theme }) => {
  return {
    ...FlexContainer,
    justifyContent: 'center',
    padding: '30px'
  }
});

export default AppFooterStyled;
