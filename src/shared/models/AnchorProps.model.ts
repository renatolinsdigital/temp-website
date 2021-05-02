import ChildrenElement from './ChildrenElement.model';
import VisualIdentityColorOptions from './VisualIdentityColorOptions.model';

interface AnchorProps {
  isActive?: boolean;
  hoverColor?: VisualIdentityColorOptions;
  location?: string;
  label?: string;
  isOpeningInNewTab?: boolean;
  children?: ChildrenElement;
}

export default AnchorProps;
