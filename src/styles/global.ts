import { createGlobalStyle, css } from 'styled-components'

export default createGlobalStyle`
${({ theme }) => css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    &::before,
    &::after {
      box-sizing: inherit;
    }
    &:disabled {
      text-decoration: none;
      pointer-events: none;
      cursor: default;
      user-select: none;
    }
  }
  strong {
    font-weight: ${theme.fonts.weight.bold};
  }
  /*  CUSTOM SCROLLBAR */
  body::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: ${theme.colors.white};
  }

  body::-webkit-scrollbar {
    width: 7px;
    background-color: #f5f5f5;
  }
  body::-webkit-scrollbar-thumb {
    border-radius: 2px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: ${theme.colors.primary};
  }
  /*  CUSTOM SCROLLBAR FINISH */
  a {
    color: ${theme.colors.primary};
    text-decoration: none;

    &:hover {
      color: ${theme.colors.secondary};
    }
  }
  html {
    font-family: ${theme.fonts.family};
    font-size: 62.5%;
  }
  html,
  body,
  #__next {
    height: 100%;
  }
  body {
    ::-webkit-scrollbar {
      width: 5px;
    }
    .x {
      display: flex;
    }
    ::-webkit-scrollbar-track {
      background: ${theme.colors.primary}30;
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${theme.colors.primary};
      border-radius: 20px; /* roundness of the scroll thumb */
    }
  }
`}
   `
