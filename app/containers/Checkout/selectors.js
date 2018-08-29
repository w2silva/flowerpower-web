import { createSelector } from 'reselect';

/**
 * Direct selector to the checkout state domain
 */
const selectCheckoutDomain = (state) => state.get('checkout').toJS();

/**
 * Other specific selectors
 */


/**
 * Default selector used by Checkout
 */

const makeSelectCheckoutBundle = () => createSelector(
  selectCheckoutDomain,
  (substate) => substate.bundle
);

export {
  selectCheckoutDomain,
  makeSelectCheckoutBundle
};
