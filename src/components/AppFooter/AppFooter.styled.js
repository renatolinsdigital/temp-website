import styled from 'styled-components';
import { FlexContainer } from '../../shared/containers/index.js';

const AppFooterStyled = styled.footer(() => {
  return {
    ...FlexContainer,
    justifyContent: 'center',
    padding: '30px'
  }
});

export default AppFooterStyled;
