import styled from 'styled-components';
import { CssInJs } from '../../shared/models';

const LogoStyled = styled.svg(({ theme }): CssInJs => {
  const { primary, secondary, tertiary, quaternary } = theme.colors;

  if (theme.isInDarkMode) {
    return {
      '#primary': {
        fill: primary
      },
      '#secondary': {
        fill: secondary
      },
      '#tertiary': {
        fill: tertiary
      },
      '#border': {
        fill: quaternary
      }
    };
  }

  return {
    'path': {
      fill: theme.colors.dark
    }
  };
});

export default LogoStyled;