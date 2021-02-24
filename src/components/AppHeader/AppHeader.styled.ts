import styled, { StyledComponent } from 'styled-components';
import { FlexContainer } from '../../shared/containers';
import { CssInJs } from '../../shared/models';

const AppHeaderStyled: StyledComponent<"header", CssInJs>
  = styled.header((): CssInJs => {
    return {
      ...FlexContainer,
      justifyContent: 'flex-end',
      width: '100%',
      maxWidth: '100%',
      padding: '5px 15px'
    };
  });

export default AppHeaderStyled;