import { createGlobalStyle } from 'styled-components';

export const yellow = '#ffc600';
export const black = '#272727';

export const GlobalStyle = createGlobalStyle`
  html {
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 12px;
  font-weight: 600;
  color: ${black};
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    min-height: calc(100vh - 100px);
    margin: 50px;
    background-attachment: fixed;
    background-color: ${black};
  }

  #root {
    min-height: calc(100vh - 100px);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0 0 5px 0;
  }

`;
