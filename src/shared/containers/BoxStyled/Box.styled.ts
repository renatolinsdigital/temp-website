import styled from "styled-components";
import { CssInJs, FlexContainerProps, WithTheme } from "../../models";

type BoxStyledProps =
  WithTheme
  & FlexContainerProps
  & {
    paddingTop?: number;
    paddingBottom?: number;
    paddingLeft?: number;
    paddingRight?: number;
    marginTop?: number;
    marginBottom?: number;
    marginLeft?: number;
    marginRight?: number;
    isVertical?: boolean;
    maxWidth?: number;
  }

const BoxStyled = styled.div((
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
  }: BoxStyledProps): CssInJs => {
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