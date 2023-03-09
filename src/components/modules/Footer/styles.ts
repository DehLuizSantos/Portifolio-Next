import styled, { css } from 'styled-components';

export const ContainerFooter = styled.footer`
  ${({ theme }) => css`
    align-items: center;
    background-color: ${theme.colors.white};
    display: flex;
    height: 75px;
    justify-content: space-around;

    p {
      font-size: 8px;
      font-weight: bold;

      ${theme.responsive.tablet(css`
        font-size: 18px;
        font-weight: bold;
      `)}
    }
  `}
`;
