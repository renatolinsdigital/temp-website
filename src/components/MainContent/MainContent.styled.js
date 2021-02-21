import styled from 'styled-components';
import { FlexContainer } from '../../shared/containers/index.js';

const MainContentStyled = styled.main(() => ({
  ...FlexContainer,
  margin: '0 auto',
  justifyContent: 'center',
  alignItems: 'flex-start',
  paddingTop: '40px'
}));

export default MainContentStyled;