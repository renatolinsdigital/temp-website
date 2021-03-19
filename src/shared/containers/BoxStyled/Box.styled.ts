import styled, { DefaultTheme, StyledComponent } from "styled-components";
import { CssInJs, WithTheme } from "../../models";

type BoxStyledProps =
  WithTheme & {
    flex?: number | string;
    isStretched?: boolean;
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
    verticalBreakPoint?: number;
    mainAxisAlignment?:
    | 'start'
    | 'end';
    crossAxisAlignment?:
    | 'start'
    | 'end'
    fixedBackgroundColor?:
    'primary'
    | 'secondary'
    | 'tertiary'
  }

const BoxStyled: StyledComponent<"div", DefaultTheme, BoxStyledProps> = styled.div((
  {
    theme,
    flex = 1,
    isStretched = true,
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
    fixedBackgroundColor,
    verticalBreakPoint,
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
    flex: isStretched ? flex : 'none',
    flexDirection: isVertical ? 'column' : 'row',
    width: isStretched ? '100%' : 'auto',
    height: isStretched ? '100%' : 'auto',
    maxWidth: maxWidth ? `${maxWidth}px` : '100%',
    backgroundColor: fixedBackgroundColor
      ? theme.colors[fixedBackgroundColor]
      : theme.variantColors.containerBackground,
    justifyContent,
    alignItems,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    [`@media(max-width: ${verticalBreakPoint}px)`]: {
      flexDirection: 'column',

    }
  };
});

export default BoxStyled;