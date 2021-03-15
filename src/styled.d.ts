import 'react';
import 'styled-components';
import { ChildrenElement } from './shared/models';

interface VisualIdentityColors {
  primary: string;
  secondary: string;
  tertiary: string;
  quaternary: string;
}

type Colors = VisualIdentityColors & {
  white: string
  black: string;
  dark: string;
  transparent: string;
  neutralBlue: string;
}

interface VariantColors {
  text: string;
  textBold: string;
  heading: string;
  appBackground: string;
  containerBackground: string;
}

interface FontWeights {
  regular: number;
  bold: number;
}

interface FontFamilies {
  body: string[];
  bodyBold: string[];
  heading1: string[];
  heading2: string[];
  link: string[];
  uiElements?: string[];
}

interface LineHeights {
  body: number;
  heading: number;
  subHeading: number;
  code?: number;
}

interface FontSizes {
  smallest: number;
  small: number;
  default: number;
  large: number;
  extraLarge: number;
  huge: number;
  jumbo: number;
  biggest: number;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    isInDarkMode: boolean;
    colors: Colors;
    variantColors: VariantColors;
    fontWeights: FontWeights;
    lineHeights: LineHeights;
    fontSizesRem: FontSizes;
    fontSizesPx: FontSizes;
    fontFamilies: FontFamilies;
  }
}

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    [key: string]: string | number | boolean | ChildrenElement;
  }
}