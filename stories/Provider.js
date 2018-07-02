import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { Route } from 'react-router'
import { MemoryRouter } from 'react-router'
import { ThemeProvider } from 'styled-components'
import FontFaceObserver from 'fontfaceobserver';

// import createHistory from 'history/createMemoryHistory';
import configureStore from '../app/configureStore';

// Import CSS reset and Global Styles
import '../app/global-styles';

// Observer loading of Open Sans
var openSansObserver = new FontFaceObserver('Open Sans');

// When open sans is loaded, add font-family to the body
openSansObserver.load().then(() => {
  console.log('Open Sans has loaded.');
  document.body.classList.add('fontLoaded');
}, (error) => {
  console.log('Open Sans not available', error);
});

const theme = {
  flexboxgrid: {
    // Defaults
    gridSize: 12, // columns
    gutterWidth: 1, // rem
    outerMargin: 2, // rem
    mediaQuery: 'only screen',
    container: {
      sm: 46, // rem
      md: 61, // rem
      lg: 60  // rem
    },
    breakpoints: {
      xs: 0,  // em
      sm: 48, // em
      md: 64, // em
      lg: 75  // em
    }
  }
};

export default function Provider({ story }) {
  // const history = createHistory();
  const store = configureStore({});
  return (
    <ThemeProvider theme={theme}>
      <ReduxProvider store={store}>
        <MemoryRouter>
          {story}
        </MemoryRouter>
      </ReduxProvider>
    </ThemeProvider>
  );
};
