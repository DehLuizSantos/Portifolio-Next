import styled, { css } from 'styled-components';

export const PresentationSocialMediaContainer = styled.div`
  ${({ theme }) => css`
    display: block;
    position: absolute;
    width: 100%;
    bottom: 0;
  `}
`;

export const SocialMediaButton = styled.div`
  ${({ theme }) => css`
    padding: 20px;
    display: flex;
    gap: 20px;
  `}
`;

export const TitlePresentation = styled.div`
  ${({ theme }) => css`
    padding: 20px;
  `}
`;
