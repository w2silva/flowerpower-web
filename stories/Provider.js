import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { Route } from 'react-router'
import { MemoryRouter } from 'react-router'

// import createHistory from 'history/createMemoryHistory';
import configureStore from '../app/configureStore';

export default function Provider({ story }) {
  // const history = createHistory();
  const store = configureStore({});
  return (
    <ReduxProvider store={store}>
      <MemoryRouter>
        {story}
      </MemoryRouter>
    </ReduxProvider>
  );
};
