import styled, { css } from 'styled-components';

export const HamburguerContainer = styled.div`
  ${({ theme }) => css`
    ${theme.responsive.tablet(css`
      display: none;
    `)}

    .label-check {
      display: none;
    }

    .hamburger-label {
      display: block;
      cursor: pointer;

      &:hover {
        div {
          background-color: ${theme.colors.blue['500']};
        }
      }
    }

    .hamburger-label div {
      width: 60px;
      height: 6px;
      background-color: ${theme.colors.blue['700']};
    }

    .line1 {
      transition: all 0.3s;
    }

    .line2 {
      margin: 10px 0 0 0;
      transition: 0.3s;
    }

    .line3 {
      margin: 10px 0 0 0;
      transition: 0.3s;
    }

    #label-check:checked + .hamburger-label .line1 {
      transform: rotate(35deg) scaleX(0.55) translate(39px, -4.5px);
      border-radius: 50px 50px 50px 0;
    }

    #label-check:checked + .hamburger-label .line3 {
      transform: rotate(-35deg) scaleX(0.55) translate(39px, 4.5px);
      border-radius: 0 50px 50px 50px;
    }

    #label-check:checked + .hamburger-label .line2 {
      border-top-right-radius: 50px;
      border-bottom-right-radius: 50px;
      width: 56px;
    }
  `}
`;
