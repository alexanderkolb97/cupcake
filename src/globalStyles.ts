import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
  }

  html, body {
    height: 100%;
  }

  body {
    font: normal 18px Verdana, Arial, sans-serif;
  }

  .lowest {
    background-color: lightblue;
  }
`;
