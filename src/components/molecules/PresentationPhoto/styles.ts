import styled, { css } from 'styled-components';

export const PresentationPhotoContainer = styled.div`
  ${() => css`
    width: 100%;
    padding: 40px 5vw;
  `}
`;

export const ContainerTitle = styled.div`
  ${({ theme }) => css`
    width: 300px;
    height: 390px;
    border: 2px solid ${theme.colors.black};
    padding: 20px;
    background-color: ${theme.colors.purple['600']};
    position: absolute;
    border-radius: 5px;
  `}
`;

export const ContainerPhoto = styled.div`
  ${({ theme }) => css`
    position: absolute;
    padding: 10px 5vw;
    left: 60px;
    top: 200px;
    border-radius: 10px;
    display: flex;
    img {
      border-radius: 10px;
    }
  `}
`;
