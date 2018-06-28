import { createSelector } from 'reselect';

/**
 * Direct selector to the plans state domain
 */
const selectPlansDomain = (state) => state.get('plans');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Plans
 */

const makeSelectPlans = () => createSelector(
  selectPlansDomain,
  (substate) => substate.toJS()
);

export default makeSelectPlans;
export {
  selectPlansDomain,
};
