import { StyledComponent } from "styled-components";
import { CssInJs, PaddingBoxStyledProps } from "../../models";
import {
  FontSizesOptions,
  FontWeightsOptions,
  LineHeightsOptions
} from "../../../theme/models";


type TextStyledProps = PaddingBoxStyledProps & {
  isRemFontSized?: boolean;
  isInUpperCase?: boolean;
  lineHeight?: LineHeightsOptions;
  fontWeight?: FontWeightsOptions;
  fontSize?: FontSizesOptions;
  isBold?: boolean;
}

type TextStyledContainer = StyledComponent<"span", CssInJs, TextStyledProps>;

export type { TextStyledProps, TextStyledContainer };