import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body, #__next {
    height: 100%;
    overflow-x: hidden;
  }
  body {
    font-family: 'Roboto', sans-serif;
  }
  button {
    background-color: transparent;
    border: none;
  }
  a {
    &:hover, &:focus, &:active {
      cursor: pointer;
      text-decoration: none;
    }
  }
`

export default GlobalStyles