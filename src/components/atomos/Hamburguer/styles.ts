import styled, { css } from 'styled-components';
import { HamburguerProps } from '.';

export const HamburguerContainer = styled.button<HamburguerProps>`
  ${({ theme, open }) => css`
    display: block;
    cursor: pointer;

    ${theme.responsive.tablet(css`
      display: none;
    `)}

    div {
      background-color: ${theme.colors.blue['700']};
      width: 30px;
      height: 5px;
      margin: 5px;
    }

    &:hover {
      div {
        background-color: ${theme.colors.blue['500']};
      }
    }

    .line1 {
      transition: all 0.3s;
      width: ${open && '37px'};
      margin: ${open && '0px 0px 10px -10px'};
    }

    .line2 {
      transition: 0.3s;
      width: ${open && '35px'};
    }

    .line3 {
      transition: 0.3s;
      width: ${open && '37px'};
      margin: ${open && '10px 0px 0px -10px'};
    }

    .line1 {
      transform: ${open &&
      'rotate(35deg) scaleX(0.55) translate(39px, -4.5px)'};
      /* border-radius: 50px 50px 50px 0; */
    }

    .line3 {
      transform: ${open &&
      'rotate(-35deg) scaleX(0.55) translate(39px, 4.5px)'};
      /* border-radius: 0 50px 50px 50px; */
    }

    .line2 {
      border-top-right-radius: 50px;
      border-bottom-right-radius: 50px;
      /* width: 56px; */
    }
  `}
`;
