import { StyledComponent } from "styled-components";
import { CssInJs, StyledProps } from "../../models";
import { PaddingBoxStyledProps, MarginBoxStyledProps } from "../../models";

type BoxContainerStyled
  = StyledComponent<"div", CssInJs, PaddingBoxStyledProps & MarginBoxStyledProps>;

type BoxPropsStyled = StyledProps & PaddingBoxStyledProps & MarginBoxStyledProps;

export type { BoxContainerStyled, BoxPropsStyled };