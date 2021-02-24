import { StyledComponent } from "styled-components";
import { CssInJs } from "../../models";

interface BoxStyledProps {
  paddingTop?: number;
  paddingBottom?: number;
  paddingLeft?: number;
  paddingRight?: number;
}

type BoxContainerStyled = StyledComponent<"div", CssInJs, BoxStyledProps>;

export type { BoxStyledProps, BoxContainerStyled };