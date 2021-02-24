import { Theme } from './../../theme/models';
import ChildrenElement from './ChildrenElement.model';

type DynamicStyledProps = {
  [key: string]: string | number | boolean | ChildrenElement;
}

interface ThemeInjected {
  theme?: Theme;
}

type StyledProps = DynamicStyledProps & ThemeInjected;

export default StyledProps;