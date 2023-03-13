import styled, { css, keyframes } from 'styled-components';

const typing = keyframes`
  from { width: 0 }
  to { width: 100% }
`;

const blinkCaret = keyframes`
   from, to { border-color: transparent }
  50% { border-color: orange }
`;

export const PresentationPhotoContainer = styled.div`
  ${({ theme }) => css`
    padding-top: 40px;

    ${theme.responsive.tablet(css`
      padding-top: 0;
    `)}
  `}
`;

export const ContainerTitle = styled.div`
  ${({ theme }) => css`
    margin: 10px auto;
    text-align: center;

    h3 {
      overflow: hidden;
      border-right: 0.15em solid orange;
      white-space: nowrap;
      margin: 0 auto;
      letter-spacing: 0.15em;
      animation: ${typing} 3.5s steps(30, end),
        ${blinkCaret} 0.5s step-end infinite;
    }
  `}
`;

export const ContainerPhoto = styled.div`
  ${() => css`
    display: flex;
    justify-content: center;

    img {
      border-radius: 10px;
    }
  `}
`;
