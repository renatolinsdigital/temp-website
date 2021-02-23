/* eslint-disable @typescript-eslint/no-explicit-any */
import { StyledComponent } from "styled-components";
import { VisualIdentityColorsOptions } from "../../models";


type MenuListStyled = StyledComponent<"ul", any> & any;
type MenuItemStyled = StyledComponent<"li", any> & any;

type MenuStyledType = StyledComponent<'nav', any> & {
  List?: MenuListStyled;
  Item?: MenuItemStyled;
}

interface ListStyledProps {
  isVertical: boolean;
}

interface ItemStyledProps {
  hasIcon: boolean;
  hoverColor: VisualIdentityColorsOptions;
}

export type {
  MenuStyledType,
  MenuListStyled,
  MenuItemStyled,
  ListStyledProps,
  ItemStyledProps
};