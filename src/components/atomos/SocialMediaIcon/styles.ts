import styled, { css } from 'styled-components';

export const SocialMediaIconContainer = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.blue['700']};
    padding: 10px;
    height: 45px;
    width: 45px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    :hover {
      opacity: 0.5;
    }

    a {
      width: 20px;
      height: 20px;
    }
  `}
`;
