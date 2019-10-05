import { createGlobalStyle } from 'styled-components';
import reset from './reset';
import arcade from '../../assets/arcade.jpg';

const GlobalStyle = createGlobalStyle`
  /* ${reset} */
  body {
    background-color: #000000;
    margin: 0px;
    background: url(${arcade}) no-repeat center center fixed;
    background-size: cover;
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
