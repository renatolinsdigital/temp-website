import { VisualIdentityColors, NeutralColors, Theme } from './models';

const visualIdentityColors: VisualIdentityColors = {
  primary: '#ee2d30',
  secondary: '#0085cb',
  tertiary: '#f7ec29',
  quaternary: '#8d8d8d'
};

const neutralColors: NeutralColors = {
  transparent: 'transparent',
  white: '#FFFFFF',
  neutralBlue: '#eaf1f4',
  dark: '#1d1f21',
  black: '#000000'
};

const defaultColors:
  VisualIdentityColors
  & NeutralColors = {
  ...visualIdentityColors,
  ...neutralColors
};

const defaultTheme: Theme = {
  colors: {
    ...defaultColors
  },
  fontFamilies: {
    body: [
      '"TitilliumWeb Regular"',
      'sans-serif'
    ],
    heading1: [
      '"TitilliumWeb Bold"',
      'sans-serif'
    ],
    heading2: [
      '"TitilliumWeb SemiBold"',
      'sans-serif'
    ],
    link: [
      '"TitilliumWeb SemiBold"',
      'sans-serif'
    ],
    uiElements: [
      '"TitilliumWeb SemiBold"',
      'sans-serif'
    ]
  },
  fontSizes: {
    smallest: 12,
    small: 14,
    default: 16,
    large: 18,
    extraLarge: 22,
    huge: 24,
    jumbo: 32,
    biggest: 40
  },
  fontWeights: {
    regular: 400,
    medium: 500,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    headings: 1.3,
    code: 1.6,
  },
};

export default defaultTheme;