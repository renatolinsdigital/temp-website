import { VisualIdentityColorsOptions } from "../../../theme/models";
import { ChildrenElement } from "../../models";

interface AnchorProps {
  location?: string;
  label?: string;
  isOpeningInNewTab?: boolean;
  isActive?: boolean;
  children?: ChildrenElement;
  hoverColor?: VisualIdentityColorsOptions;
}

export default AnchorProps;