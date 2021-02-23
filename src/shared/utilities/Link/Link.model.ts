import { ChildrenElement, VisualIdentityColorsOptions } from "../../models";

interface LinkProps {
  location: string;
  label?: string;
  isOpeningInNewTab?: boolean;
  children?: ChildrenElement;
  hoverColor?: VisualIdentityColorsOptions;
}

export default LinkProps;