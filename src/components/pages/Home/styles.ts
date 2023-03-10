import styled, { css, keyframes } from 'styled-components';

const wave = keyframes`
  2% {
        transform: translateX(1);
    }

    25% {
        transform: translateX(-25%);
    }

    50% {
        transform: translateX(-50%);
    }

    75% {
        transform: translateX(-25%);
    }

    100% {
        transform: translateX(1);
    }
`;

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

export const Wrapper = styled.main``;

export const HomeContainer = styled.div`
  ${({ theme }) => css`
    margin: auto;
    overflow: auto;

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
    height: 100vh;

    .wave {
      background: rgb(255 255 255 / 25%);
      border-radius: 100% 100% 0 0;
      position: fixed;
      width: 100%;
      height: 10vh;
      animation: ${wave} 10s -3s linear infinite;
      transform: translate3d(0, 0, 0);
      opacity: 0.8;
      bottom: 0;
      left: 0;
      z-index: 0;
    }

    .wave:nth-of-type(2) {
      bottom: -1.25em;
      animation: ${wave} 18s linear reverse infinite;
      opacity: 0.8;
    }

    .wave:nth-of-type(3) {
      bottom: -2.5em;
      animation: ${wave} 20s -1s reverse infinite;
      opacity: 0.9;
    }
  `}
`;
