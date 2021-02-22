import { VisualIdentityColor } from './../../models';

interface LinkProps {
  location: string;
  label: string;
  isOpeningInNewTab: boolean;
  children: any;
  hoverColor: VisualIdentityColor
};

export default LinkProps;