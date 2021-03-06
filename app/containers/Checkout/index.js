/**
 *
 * Checkout
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import CheckoutComponent from 'components/CheckoutComponent';
import makeSelectMe from 'containers/Me/selectors';

import { makeSelectCheckoutBundle } from './selectors';
import { makePayment } from './actions';

export class Checkout extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  makePayment = (bundle, payment, client) => {
    this.props.dispatch(makePayment(bundle, payment, client));
  }

  render() {
    return (
      <CheckoutComponent
        me={this.props.me}
        makePayment={this.makePayment}
        bundle={this.props.bundle}
      />
    );
  }
}

Checkout.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  bundle: makeSelectCheckoutBundle(),
  me: makeSelectMe()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withConnect,
)(Checkout);
