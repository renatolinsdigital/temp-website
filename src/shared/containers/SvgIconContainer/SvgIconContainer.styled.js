import styled from 'styled-components';

const SvgIconContainerStyled = styled.svg(({ rotate }) => (
  {
    transform: rotate ? `rotate(${props.rotate})` : 'rotate(0deg)'
  }
));

export default SvgIconContainerStyled;
