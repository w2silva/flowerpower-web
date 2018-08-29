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
import qs from 'query-string'
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';

import HomePage from 'containers/HomePage/Loadable';
import Quiz from 'containers/Quiz';
import Results from 'containers/Results';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import injectSaga from 'utils/injectSaga';

import { addAffiliate } from './actions'
import saga from './saga'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.onRouteChanged(this.props.location);
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged(this.props.location);
    }
  }

  onRouteChanged(location) {
    const parsed = qs.parse(location.search);
    if (parsed.a) {
      this.props.dispatch(addAffiliate(parsed.a));
    }
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/results" component={Results} />
          <Route exact path="/quiz" component={Quiz} />
          <Route exact path="/" component={HomePage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

const withConnect = connect();
const withSaga = injectSaga({ key: 'quiz', saga });

export default compose(
  withRouter,
  withSaga,
  withConnect,
)(App);
