import styled, { css } from 'styled-components';

export const ContainerHeader = styled.header`
  ${({ theme }) => css`
    align-items: center;
    background-color: ${theme.colors.purple['400']};
    box-shadow: 0 0 1em .25em ${theme.colors.purple['400']},
        0 0 4em 1em ${theme.colors.purple['600']};,
        inset 0 0 .75em .25em ${theme.colors.purple['400']};
    display: flex;
    height: 75px;
    justify-content: space-between;
    padding: 0 5vw;
    text-shadow: 0 0 .5em ${theme.colors.purple['400']};
    position: relative;
    transition: all 0.3s;   
    
    &:hover{
      box-shadow: 0 0 1em .25em ${theme.colors.purple['500']},
        0 0 4em 2em ${theme.colors.purple['400']},
       inset 0 0 .75em .25em ${theme.colors.purple['400']};          
      } 
  `}
`;

export const ListItems = styled.ul`
  ${({ theme }) => css`
    display: none;

    ${theme.responsive.tablet(css`
      display: flex;
      gap: 25px;

      li {
        color: ${theme.colors.blue['700']};
        font-weight: bold;
        transition: all 0.3s;

        &:hover {
          color: ${theme.colors.blue['500']};
        }
      }
    `)}
  `}
`;
