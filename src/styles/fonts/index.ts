import styled, { css } from 'styled-components';

export const FontH1 = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.gray['400']};
    font: bold ${theme.fonts.xxLarge} 'Roboto', sans-serif;

    ${theme.responsive.tablet(css`
      font: bold ${theme.fonts.xxxLarge} 'Roboto', sans-serif;
    `)}
  `}
`;

export const FontLI = styled.li`
  ${() => css``}
`;
