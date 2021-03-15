
import { DefaultTheme } from 'styled-components';
import { VisualIdentityColorOptions } from '../models';

const getColorByOption = (
  theme: DefaultTheme,
  colorOption: VisualIdentityColorOptions
): string | null => {

  if (!theme || !theme.colors || !colorOption) {
    return theme.colors.transparent;
  }

  const {
    primary,
    secondary,
    tertiary,
    quaternary
  } = theme.colors;

  const colorOptions = {
    'primary': primary,
    'secondary': secondary,
    'tertiary': tertiary,
    'quaternary': quaternary
  };

  return colorOptions[colorOption];
};

export default getColorByOption;