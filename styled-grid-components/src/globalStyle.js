import { createGlobalStyle } from 'styled-components';
import topography from './images/topography.svg';

export const yellow = '#ffc600';
export const black = '#272727';

export const GlobalStyle = createGlobalStyle`
  html {
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: 900;
  font-size: 10px;
  color: ${black};
  text-shadow: 0 2px 0 rgba(0, 0, 0, 0.07);
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    background-image: url(${topography}),
      linear-gradient(110deg, #f93d66, #6d47d9);
    background-size: 340px, auto;
    min-height: calc(100vh - 100px);
    margin: 50px;
    background-attachment: fixed;
    letter-spacing: -1px;
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
