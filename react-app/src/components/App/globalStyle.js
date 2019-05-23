import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    color: #222;
    background: #f4f4f4;
    font: 400 14px CoreSans, Arial,sans-serif;
    text-align: center;
    margin: 0;
    padding: 0;
  }

  a {
    color: #222;
  }

  a:hover {
    text-decoration: underline;
  }

  ul, li {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  input {
    padding: 10px;
    border-radius: 5px;
    outline: none;
    margin-right: 10px;
    border: 1px solid #ddd;
  }

  *:focus {
    outline: none;
  }
`;

export default GlobalStyle;
