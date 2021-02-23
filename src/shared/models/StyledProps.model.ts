import Theme from './../../theme/models/Theme.model';

type children = JSX.Element | Element;

type DynamicStyledProps = {
  [key: string]: string | number | boolean | children;
}

interface ThemeInjected {
  theme?: Theme;
}

type StyledProps = DynamicStyledProps & ThemeInjected;

export default StyledProps;