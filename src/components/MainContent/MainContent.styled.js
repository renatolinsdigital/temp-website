import styled from 'styled-components';
import { FlexContainer } from '../../shared/containers/index.js';

const MainContentStyled = styled.main(() => ({
  ...FlexContainer,
  padding: '30px 0',
  justifyContent: 'center'
}));

MainContentStyled.Grid = styled.div(() => ({
  ...FlexContainer,
  flexDirection: 'column',
  alignItems: 'center',
  maxWidth: '220px',
  'svg': {
    width: '100%',
    marginBottom: '10px'
  }
}));

export default MainContentStyled;