import { StyledComponent } from "styled-components";
import {
  CssInJs,
  PaddingBoxStyledProps,
  MarginBoxStyledProps
} from "../../models";

interface FlexBoxStyledProps {
  isVertical?: boolean;
  hasNotMainAxisAlignment?: boolean;
  hasNotCrossAxisAlignment?: boolean;
  maxWidth?: number;
  mainAxisAlignment?: "start" | "center" | "end";
  crossAxisAlignment?: "start" | "center" | "end";
}

type BoxContainerStyled
  = StyledComponent<"div",
    CssInJs,
    FlexBoxStyledProps
    & PaddingBoxStyledProps
    & MarginBoxStyledProps>;

type BoxPropsStyled
  = FlexBoxStyledProps
  & PaddingBoxStyledProps
  & MarginBoxStyledProps;

export type { BoxContainerStyled, BoxPropsStyled };