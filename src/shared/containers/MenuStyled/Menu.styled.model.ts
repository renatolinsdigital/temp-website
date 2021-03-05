import { StyledComponent } from "styled-components";
import { VisualIdentityColorsOptions } from "../../../theme/models";
import { CssInJs } from "../../models";

interface NavStyledProps {
  hasNoMainAxisAlignment?: boolean;
}

interface ListStyledProps {
  isVertical?: boolean;
}

interface ItemStyledProps {
  hasIcon?: boolean;
  hoverColor?: VisualIdentityColorsOptions;
}

type MenuListStyled = StyledComponent<"ul", CssInJs, ListStyledProps>;
type MenuItemStyled = StyledComponent<"li", CssInJs, ItemStyledProps>;

type MenuContainerStyled = StyledComponent<'nav', CssInJs, NavStyledProps> & {
  List?: MenuListStyled;
  Item?: MenuItemStyled;
}

export type {
  MenuContainerStyled,
  NavStyledProps,
  ListStyledProps,
  ItemStyledProps
};