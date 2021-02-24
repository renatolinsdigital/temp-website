import styled from "styled-components";
import { CssInJs } from "../../models";
import { BoxContainerStyled, BoxPropsStyled } from './Box.styled.model';

const BoxStyled: BoxContainerStyled = styled.div((
  {
    paddingTop = 0,
    paddingBottom = 0,
    paddingLeft = 0,
    paddingRight = 0,
    marginTop = 0,
    marginBottom = 0,
    marginLeft = 0,
    marginRight = 0
  }: BoxPropsStyled): CssInJs => {

  return {
    display: 'flex',
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight
  };
});

export default BoxStyled;