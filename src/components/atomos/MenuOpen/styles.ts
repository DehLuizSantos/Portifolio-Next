import styled, { css } from 'styled-components';
import { MenuOpenProps } from '.';

export const MenuOpenContainer = styled.div<MenuOpenProps>`
  ${({ theme, open }) => css`
    position: absolute;
    width: 100%;
    top: 75px;
    height: 350px;
    right: ${open ? '0' : '-350px'};
    background-color: red;
  `}
`;
