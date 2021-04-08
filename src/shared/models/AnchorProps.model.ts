import { ChildrenElement, VisualIdentityColorOptions } from '.';

interface AnchorProps {
  isActive?: boolean;
  hoverColor?: VisualIdentityColorOptions;
  location?: string;
  label?: string;
  isOpeningInNewTab?: boolean;
  children?: ChildrenElement;
}

export default AnchorProps;