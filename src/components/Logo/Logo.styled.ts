import styled, { StyledComponent } from 'styled-components';
import { CssInJs, StyledProps } from '../../shared/models';

const LogoStyled: StyledComponent<"svg", CssInJs>
  = styled.svg(({ theme }: StyledProps): CssInJs => {
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