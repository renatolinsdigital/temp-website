import {
  VisualIdentityColors,
  NeutralColors,
  VariantColors,
  FontFamilies,
  FontSizes,
  FontWeights,
  LineHeights
} from ".";

interface Theme {
  colors: VisualIdentityColors & NeutralColors;
  isInDarkMode?: boolean;
  variantColors?: VariantColors;
  fontFamilies: FontFamilies;
  fontSizes: FontSizes;
  fontWeights: FontWeights;
  lineHeights: LineHeights;
}


export default Theme;