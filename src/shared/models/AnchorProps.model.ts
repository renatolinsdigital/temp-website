import { DefaultTheme } from 'styled-components';
import ChildrenElement from './ChildrenElement.model';
import VisualIdentityColorOptions from './VisualIdentityColorOptions.model';

interface AnchorProps {
  isActive?: boolean;
  hoverColor?: VisualIdentityColorOptions;
  location?: string;
  label?: string;
  isOpeningInNewTab?: boolean;
  children?: ChildrenElement;
  theme?: DefaultTheme;
}

export default AnchorProps;
