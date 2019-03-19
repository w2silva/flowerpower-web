/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import HomePageComponent from 'components/HomePageComponent';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { push } from 'react-router-redux';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  goTo = (location) => {
    this.props.dispatch(push(location))
  }

  render() {
    return (
      <HomePageComponent goTo={this.goTo}/>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(null, mapDispatchToProps);

export default compose(
  withConnect,
)(HomePage);
