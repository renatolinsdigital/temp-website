import styled from "styled-components";
import { CssInJs, StyledProps } from "../../models";
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
    marginRight = 0,
    isVertical = false,
    maxWidth,
    mainAxisAlignment,
    crossAxisAlignment,
  }: StyledProps & BoxPropsStyled): CssInJs => {
  const justifyContent
    = mainAxisAlignment === 'start'
      ? 'flex-start'
      : mainAxisAlignment === 'end'
        ? 'flex-end' : 'center';

  const alignItems
    = crossAxisAlignment === 'start'
      ? 'flex-start'
      : crossAxisAlignment === 'end'
        ? 'flex-end' : 'center';

  return {
    display: 'flex',
    flexDirection: isVertical ? 'column' : 'row',
    width: '100%',
    maxWidth: maxWidth ? `${maxWidth}px` : '100%',
    justifyContent,
    alignItems,
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