import styled from "styled-components";
import { CssInJs, StyledProps } from "../../models";
import { BoxStyledProps, BoxContainerStyled } from './Box.styled.model';

const BoxStyled: BoxContainerStyled = styled.div((
  {
    paddingTop = 0,
    paddingBottom = 0,
    paddingLeft = 0,
    paddingRight = 0
  }: StyledProps & BoxStyledProps): CssInJs => {

  console.log(paddingTop);
  return {
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight
  };
});

export default BoxStyled;