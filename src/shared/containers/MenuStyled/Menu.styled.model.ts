import { StyledComponent } from "styled-components";
import { CssInJs, VisualIdentityColorsOptions } from "../../models";

interface ListStyledProps {
  isVertical?: boolean;
}

interface ItemStyledProps {
  hasIcon?: boolean;
  hoverColor?: VisualIdentityColorsOptions;
}

type MenuListStyled = StyledComponent<"ul", CssInJs, ListStyledProps>;
type MenuItemStyled = StyledComponent<"li", CssInJs, ItemStyledProps>;

type MenuContainerStyled = StyledComponent<'nav', CssInJs> & {
  List?: MenuListStyled;
  Item?: MenuItemStyled;
}

export type {
  MenuContainerStyled,
  ListStyledProps,
  ItemStyledProps
};