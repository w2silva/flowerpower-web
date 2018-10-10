import { createSelector } from 'reselect';

/**
 * Direct selector to the benefits state domain
 */
const selectBenefitsDomain = (state) => state.get('benefits').toJS();

/**
 * Other specific selectors
 */

const makeSelectPurchases = () => createSelector(
 selectBenefitsDomain,
 (substate) => substate.purchases
);

const makeSelectTherapies = () => createSelector(
 selectBenefitsDomain,
 (substate) => substate.therapies
);

const makeSelectBundles = () => createSelector(
 selectBenefitsDomain,
 (substate) => substate.bundles
);

const makeSelectAssets = () => createSelector(
 selectBenefitsDomain,
 (substate) => substate.assets
);
/**
 * Default selector used by Benefits
 */

const makeSelectBenefits = () => createSelector(
  selectBenefitsDomain,
  (substate) => substate
);

export default makeSelectBenefits;
export {
  selectBenefitsDomain,
  makeSelectPurchases,
  makeSelectBundles,
  makeSelectAssets,
  makeSelectTherapies
};
