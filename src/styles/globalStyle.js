import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}

#root {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

body {
  margin: 0;
  font-family: 'Roboto', sans-serif;
  overflow-y: ${p => p.$isVisibility};
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Roboto', sans-serif;
}

`;
