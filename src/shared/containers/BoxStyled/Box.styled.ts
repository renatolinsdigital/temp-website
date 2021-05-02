import styled, { DefaultTheme, StyledComponent } from "styled-components";
import { CssInJs, JustifyContent, AlignItems, BoxProps } from "shared/models";

type BoxStyledProps = BoxProps & {
  theme: DefaultTheme;
  flex?: number | string;
  isStretched?: boolean;
  hasVariantBackgroundColor?: boolean;
  isVertical?: boolean;
  maxWidth?: number;
  verticalBreakPoint?: number;
  justifyContent?: JustifyContent;
  alignItems?: AlignItems;
  fixedBackgroundColor?:
  'primary'
  | 'secondary'
  | 'tertiary'
  | 'transparent';
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
    hasVariantBackgroundColor = false,
    fixedBackgroundColor = 'transparent',
    verticalBreakPoint,
    justifyContent = 'center',
    alignItems = 'center'
  }: BoxStyledProps): CssInJs => {

  return {
    display: 'flex',
    flex: isStretched ? flex : 'none',
    flexDirection: isVertical ? 'column' : 'row',
    width: isStretched ? '100%' : 'auto',
    height: isStretched ? '100%' : 'auto',
    maxWidth: maxWidth ? `${maxWidth}px` : '100%',
    backgroundColor: hasVariantBackgroundColor
      ? theme.variantColors.containerBackground
      : theme.colors[fixedBackgroundColor],
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