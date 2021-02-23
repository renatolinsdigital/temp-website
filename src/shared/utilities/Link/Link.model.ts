import { VisualIdentityColors } from "../../../theme/models";
import { ChildrenElement } from "../../models";

interface LinkProps {
  location: string;
  label?: string;
  isOpeningInNewTab?: boolean;
  children?: ChildrenElement;
  hoverColor?: VisualIdentityColors;
}

export default LinkProps;