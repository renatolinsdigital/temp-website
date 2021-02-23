import { Theme } from "../../theme/models";
import { VisualIdentityColorsOptions } from "../models";

const getColorByOption = (
  theme: Theme,
  colorOption: VisualIdentityColorsOptions
): string | null => {

  if (!theme || !theme.colors || !colorOption) return null;

  const { primary, secondary, tertiary, quaternary } = theme.colors;

  const colorOptions = {
    'primary': primary,
    'secondary': secondary,
    'tertiary': tertiary,
    'quaternary': quaternary
  };

  return colorOptions[colorOption];
};

export default getColorByOption;