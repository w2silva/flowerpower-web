/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components'

import Startup from 'containers/Startup';

import HomePage from 'containers/HomePage/Loadable';
import Quiz from 'containers/Quiz';
import Results from 'containers/Results';
import Plans from 'containers/Plans';
import Benefits from 'containers/Benefits';
import SelectProfile from 'containers/SelectProfile';
import Biography from 'containers/Biography';
import Checkout from 'containers/Checkout';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

const AppWrapper = styled.div`
  background-color: white;
`;

const theme = {
  flexboxgrid: {
    // Defaults
    gridSize: 12, // columns
    gutterWidth: 1, // rem
    outerMargin: 2, // rem
    mediaQuery: 'only screen',
    container: {
      sm: 46, // rem
      md: 71, // rem
      lg: 86  // rem
    },
    breakpoints: {
      xs: 0,  // em
      sm: 48, // em
      md: 74, // em
      lg: 85  // em
    }
  }
};

export default function App() {
  return (
    <AppWrapper>
      <Startup></Startup>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route exact path="/results" component={Results} />
          <Route exact path="/quiz" component={Quiz} />
          <Route exact path="/quiz/:id" component={Quiz} />
          <Route exact path="/plans" component={Plans} />
          <Route exact path="/(benefits|me)" component={Benefits} />
          <Route exact path="/therapy" component={SelectProfile} />
          <Route exact path="/(biography|contact)" component={Biography} />
          <Route exact path="/register" component={Checkout} />
          <Route exact path="/" component={HomePage} />
          <Route component={NotFoundPage} />
        </Switch>
      </ThemeProvider>
    </AppWrapper>
  );
}
