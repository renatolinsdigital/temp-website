import { DefaultTheme } from 'styled-components';
import { ChildrenElement, VisualIdentityColorOptions } from '.';

interface AnchorProps {
  theme?: DefaultTheme;
  isActive?: boolean;
  hoverColor?: VisualIdentityColorOptions;
  location?: string;
  label?: string;
  isOpeningInNewTab?: boolean;
  children?: ChildrenElement;
}

export default AnchorProps;