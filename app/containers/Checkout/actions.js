/*
 *
 * Checkout actions
 *
 */

import {
  BUNDLE_CHECKOUT,
} from './constants';

export function bundleCheckout(bundle) {
  return {
    type: BUNDLE_CHECKOUT,
    bundle
  };
}
