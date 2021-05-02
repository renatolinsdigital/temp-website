const visualIdentityColors = {
  primary: '#ee2d30',
  secondary: '#0085cb',
  tertiary: '#f7ec29',
  quaternary: '#8d8d8d',
};

const neutralColors = {
  white: '#FFFFFF',
  snow: '#f0f6f6',
  neutralBlue: '#eaf1f4',
  dark: '#1d1f21',
  black: '#000000',
  transparent: 'transparent',
};

const defaultColors = {
  ...visualIdentityColors,
  ...neutralColors,
};

const defaultTheme = {
  colors: {
    ...defaultColors,
  },
  fontFamilies: {
    body: [
      '"TitilliumWeb Regular"',
      'sans-serif',
    ],
    bodyBold: [
      '"TitilliumWeb SemiBold"',
      'sans-serif',
    ],
    heading1: [
      '"TitilliumWeb Bold"',
      'sans-serif',
    ],
    heading2: [
      '"TitilliumWeb SemiBold"',
      'sans-serif',
    ],
    link: [
      '"TitilliumWeb SemiBold"',
      'sans-serif',
    ],
    uiElements: [
      '"TitilliumWeb SemiBold"',
      'sans-serif',
    ],
  },
  fontSizesPx: {
    smallest: 12,
    small: 14,
    default: 16,
    large: 18,
    extraLarge: 22,
    huge: 24,
    jumbo: 32,
    biggest: 40,
  },
  fontSizesRem: {
    smallest: 0.75,
    small: 0.875,
    default: 1,
    large: 1.125,
    extraLarge: 1.375,
    huge: 1.5,
    jumbo: 2,
    biggest: 2.5,
  },
  fontWeights: {
    regular: 400,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 2,
    subHeading: 1.8,
    code: 1.6,
  },
};

export default defaultTheme;
