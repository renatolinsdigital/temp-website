import { VisualIdentityColors } from '../../models';

interface LinkProps {
  location: string;
  label?: string;
  isOpeningInNewTab?: boolean;
  children?: JSX.Element | HTMLElement;
  hoverColor?: VisualIdentityColors
}

export default LinkProps;