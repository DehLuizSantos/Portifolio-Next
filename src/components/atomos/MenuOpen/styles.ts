import styled, { css } from 'styled-components';

type MenuOpenPropsContainer = {
  open: boolean;
};

export const MenuOpenContainer = styled.div<MenuOpenPropsContainer>`
  ${({ theme, open }) => css`
    ${theme.responsive.tablet(css`
      display: none;
    `)}
    position: absolute;
    width: 100%;
    top: 75px;
    height: 350px;
    right: ${open ? '0' : '-100%'};
    display: ${open ? 'block' : 'none'};
    background-color: red;
  `}
`;
