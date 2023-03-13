import styled, { css } from 'styled-components';

export const FontH1 = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font: bold ${theme.fonts.xxLarge} 'Roboto', sans-serif;

    ${theme.responsive.tablet(css`
      font: bold ${theme.fonts.xxxLarge} 'Roboto', sans-serif;
    `)}
  `}
`;

export const FontH2 = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font: bold ${theme.fonts.xLarge} 'Roboto', sans-serif;

    ${theme.responsive.tablet(css`
      font: bold ${theme.fonts.xxLarge} 'Roboto', sans-serif;
    `)}
  `}
`;

export const FontH3 = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font: bold ${theme.fonts.large} 'Roboto', sans-serif;

    ${theme.responsive.tablet(css`
      font: bold ${theme.fonts.xLarge} 'Roboto', sans-serif;
    `)}
  `}
`;

export const FontLI = styled.li`
  ${() => css``}
`;
