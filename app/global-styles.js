import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    position: relative;
    margin: 0px;
    padding: 0px;
    border: 0px;
    width: 100%;
    height: 100%;
    
    font-size: 13px;
    font-family: 'Open Sans', sans-serif;
    font-weight: 300;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }
`;
