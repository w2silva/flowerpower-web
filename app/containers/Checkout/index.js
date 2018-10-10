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

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeSelectCheckoutBundle } from './selectors';
import { makePayment } from './actions';
import reducer from './reducer';
import saga from './saga';

export class Checkout extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  makePayment = (bundleId, payment) => {
    console.log(`[Checkout] bundle id: ${bundleId}`)
    console.log(`[Checkout] payment: ${JSON.stringify(payment)}`)
    this.props.dispatch(makePayment(bundleId, payment));
  }

  render() {
    return (
      <CheckoutComponent
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
