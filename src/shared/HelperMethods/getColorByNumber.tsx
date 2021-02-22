import { VisualIdentityColor } from "../models";

const getColorByNumber = (
  theme: any,
  colorOption: VisualIdentityColor) => {

  if (!theme || !theme.colors || !colorOption) return null;

  const { primary, secondary, tertiary, quaternary } = theme.colors;

  const colorOptions = {
    'primary': primary,
    'secondary': secondary,
    'tertiary': tertiary,
    'quaternary': quaternary
  };

  const selectedColor = colorOption && colorOptions[colorOption];

  return selectedColor;
}

export default getColorByNumber;