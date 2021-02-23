import React from 'react';
import styled from 'styled-components';

const LogoStyled = styled.svg(({ theme }) => {
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

function Logo(): JSX.Element {
  return (
    <LogoStyled width="271" height="391" viewBox="0 0 271 391" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path id="border" d="M0.270996 0L0 390.102L270.689 390.223V0.0950012L0.270996 0ZM10.003 380.104L10.267 10.004L260.689 10.104V380.219L10.003 380.104Z" fill="#8D8D8D" />
      <path id="secondary" d="M30 30.406V100.932C55.598 105.637 75 128.049 75 155.008C75 181.967 55.599 204.379 30 209.084V279.609C94.359 274.513 145 220.675 145 155.008C144.999 89.339 94.359 35.501 30 30.406Z" fill="#0085CB" />
      <path id="primary" d="M93.86 30.018C94.855 30.604 95.841 31.202 96.821 31.811C96.828 31.815 96.835 31.819 96.842 31.824C97.821 32.433 98.792 33.053 99.755 33.685C99.762 33.689 99.768 33.694 99.775 33.698C100.74 34.332 101.697 34.976 102.647 35.632C102.649 35.633 102.65 35.634 102.652 35.635C103.609 36.297 104.558 36.969 105.499 37.653C105.5 37.653 105.5 37.653 105.501 37.654H105.502C106.434 38.331 107.356 39.019 108.27 39.717C108.276 39.721 108.282 39.726 108.288 39.731C109.199 40.427 110.101 41.133 110.995 41.851C111.001 41.855 111.007 41.86 111.013 41.865C111.907 42.582 112.792 43.31 113.668 44.048C113.673 44.052 113.679 44.057 113.685 44.062C114.558 44.797 115.422 45.543 116.278 46.299C116.283 46.303 116.289 46.308 116.294 46.312C116.311 46.327 116.327 46.342 116.344 46.356C118.067 47.879 119.752 49.442 121.401 51.045L121.402 51.046C122.219 51.841 123.028 52.646 123.827 53.46C123.831 53.463 123.835 53.467 123.838 53.471C124.665 54.313 125.481 55.165 126.286 56.028C126.314 56.059 126.344 56.09 126.372 56.12C126.376 56.125 126.381 56.129 126.385 56.134C130.516 60.562 134.372 65.248 137.928 70.167C137.982 70.241 138.035 70.314 138.089 70.388C138.09 70.389 138.091 70.391 138.093 70.393C140.76 74.098 143.255 77.935 145.57 81.89C145.622 81.976 145.673 82.063 145.723 82.149C145.724 82.151 145.725 82.153 145.726 82.155C152.054 93.022 157.005 104.785 160.351 117.209C160.353 117.215 160.354 117.222 160.356 117.228V117.229C161.121 120.07 161.811 122.942 162.405 125.85C162.408 125.862 162.41 125.873 162.412 125.885C162.697 127.284 162.956 128.693 163.201 130.106C163.201 130.11 163.202 130.114 163.203 130.118C163.238 130.322 163.27 130.527 163.305 130.731C163.519 132.002 163.716 133.278 163.897 134.561C163.899 134.573 163.901 134.584 163.903 134.596C163.946 134.905 163.99 135.213 164.032 135.523C164.241 137.078 164.434 138.637 164.594 140.207C164.594 140.208 164.594 140.21 164.594 140.21C164.595 140.218 164.595 140.226 164.596 140.233C164.926 143.493 165.138 146.786 165.248 150.106C165.254 150.247 165.261 150.387 165.265 150.528C165.265 150.532 165.265 150.534 165.265 150.538C165.31 152.023 165.34 153.513 165.34 155.009C165.34 156.198 165.323 157.384 165.295 158.566C165.283 159.066 165.26 159.563 165.243 160.062C165.22 160.711 165.2 161.362 165.169 162.009C165.129 162.839 165.076 163.665 165.023 164.49C165.006 164.74 164.993 164.991 164.975 165.241C162.732 197.404 149.995 226.668 130.171 249.651L240.693 360.174V250.104H210.693V30.104L93.847 30.008C93.849 30.009 93.851 30.01 93.853 30.011C93.853 30.014 93.857 30.016 93.86 30.018Z" fill="#EE2D30" />
      <path id="tertiary" d="M116.1 263.869C115.459 264.433 114.815 264.994 114.163 265.549C114.157 265.553 114.152 265.557 114.146 265.563C110.444 268.706 106.583 271.668 102.575 274.434C102.569 274.438 102.563 274.442 102.556 274.446C101.763 274.993 100.965 275.532 100.16 276.063C100.141 276.077 100.122 276.088 100.103 276.1C95.235 279.315 90.162 282.241 84.907 284.86C84.884 284.872 84.861 284.883 84.837 284.895C79.576 287.512 74.134 289.819 68.534 291.793C68.523 291.797 68.512 291.801 68.501 291.803C56.329 296.09 43.414 298.797 29.999 299.68H29.997V360.104L170.671 360.167L170.687 360.2H212.43L116.1 263.869Z" fill="#F7EC29" />
    </LogoStyled>
  );
}

export default Logo;
