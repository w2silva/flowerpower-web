import { createSelector } from 'reselect';

/**
 * Direct selector to the plans state domain
 */
const selectPlansDomain = (state) => state.get('plans').toJS();

/**
 * Other specific selectors
 */


/**
 * Default selector used by Plans
 */

const makeSelectBundles = () => createSelector(
  selectPlansDomain,
  (substate) => substate.bundles
);

export {
  selectPlansDomain,
  makeSelectBundles
};
