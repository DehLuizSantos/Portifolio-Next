import styled, { css } from 'styled-components';

export const PresentationSocialMediaContainer = styled.div`
  ${({ theme }) => css`
    display: block;

    ${theme.responsive.laptop(css`
      display: flex;
      align-items: center;
    `)}
  `}
`;

export const SocialMediaButton = styled.div`
  ${({ theme }) => css`
    padding: 20px;
    display: flex;
    justify-content: center;
    gap: 20px;
  `}
`;

export const TitlePresentation = styled.div`
  ${({ theme }) => css`
    padding: 20px;
    text-align: center;

    h3 {
      margin-bottom: 20px;
    }

    button {
      margin: 0 auto;
    }
  `}
`;
