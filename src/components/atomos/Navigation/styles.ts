import styled, { css } from 'styled-components';
import { NavigationProps } from '.';

export const NavigationContainer = styled.div<NavigationProps>`
  ${({ theme, open }) => css`
    ${theme.responsive.tablet(css`
      display: none;
    `)}

    ul {
      position: absolute;
      top: 75px;
      right: 0;
      bottom: 0;
      width: 100%;
      height: ${open ? '250px' : '0'};
      visibility: ${open ? 'visible' : 'hidden'};
      background-color: ${theme.colors.purple['600']};
      border-radius: 0 10px;
      padding: 20px;
      box-shadow: 0 0 1em 0.25em ${theme.colors.purple['400']},
        0 0 4em 1em ${theme.colors.purple['600']},
        inset 0 0 0.75em 0.25em ${theme.colors.purple['400']};

      &:hover {
        box-shadow: 0 0 1em 0.25em ${theme.colors.purple['500']},
          0 0 4em 2em ${theme.colors.purple['400']},
          inset 0 0 0.75em 0.25em ${theme.colors.purple['400']};
      }
    }
  `}
`;
