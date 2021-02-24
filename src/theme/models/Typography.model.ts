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

interface LineHeights {
  body: number;
  heading: number;
  code?: number;
}

export type { FontWeights, FontFamilies, FontSizes, LineHeights };
