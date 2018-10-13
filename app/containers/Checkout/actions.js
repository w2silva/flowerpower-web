/*
 *
 * Checkout actions
 *
 */

import {
  BUNDLE_CHECKOUT,
  REQUEST_PAYMENT,
  PAYMENT_SUCCESS,
  PAYMENT_FAILURE,
} from './constants';

export function bundleCheckout(bundle) {
  return {
    type: BUNDLE_CHECKOUT,
    bundle
  };
}

export function makePayment(bundleId, payment, client) {
  return {
    type: REQUEST_PAYMENT,
    bundle: bundleId,
    payment,
    client
  }
}

export function paymentSuccess() {
  return {
    type: PAYMENT_SUCCESS
  }
}

export function paymentFailure(error) {
  return {
    type: PAYMENT_FAILURE,
    error
  }
}
