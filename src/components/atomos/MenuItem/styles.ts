import styled, { css } from 'styled-components';

export const MenuItemContainer = styled.div`
  ${({ theme }) => css`
    ${theme.responsive.tablet(css`
      display: none;
    `)}

    li {
      list-style: none;
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      cursor: pointer;
      text-align: center;

      a {
        color: ${theme.colors.black};
        font-weight: bold;

        &:hover {
          color: ${theme.colors.blue['500']};
        }
      }
    }
  `}
`;
