import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: "Roboto", sans-serif;
  }

  a {
    text-decoration: none;
    outline: 0;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }
`;

export default Global;
