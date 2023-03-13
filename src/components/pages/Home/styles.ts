import styled, { css, keyframes } from 'styled-components';

const gradient = keyframes`
    0% {
        background-position: 0% 0%;
    }
    50% {
        background-position: 100% 100%;
    }
    100% {
        background-position: 0% 0%;
    }
`;

export const Wrapper = styled.main`
  overflow: hidden;
`;

export const HomeContainer = styled.div`
  ${({ theme }) => css`
    /* height: 89vh; */
    margin: auto;

    ${theme.responsive.tablet(css`
      height: 100%;
    `)}

    background: linear-gradient(
      315deg,
      ${theme.colors.purple['400']} 3%,
      ${theme.colors.blue['500']} 38%,
      ${theme.colors.blue['700']} 68%,
      ${theme.colors.purple['600']} 98%
    );
    animation: ${gradient} 15s ease infinite;
    background-attachment: fixed;
    background-size: 400% 400%;

    .presentation {
      padding: 100px 0 137px 0;
      ${theme.responsive.tablet(css`
        padding: 227px 0 270px 0;
        display: flex;
        justify-content: center;
        align-items: center;
      `)}
    }
  `}
`;
