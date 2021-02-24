import { StyledComponent } from "styled-components";
import { FontSizesOptions } from "../../../theme/models";
import { CssInJs } from "../../models";

interface TextStyledProps {
  isInUpperCase?: boolean;
  fontSize?: FontSizesOptions;
  isBold?: boolean;
}

type TextStyledContainer = StyledComponent<"span", CssInJs, TextStyledProps>;

export type { TextStyledProps, TextStyledContainer };