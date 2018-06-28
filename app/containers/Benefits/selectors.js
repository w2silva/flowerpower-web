import { createSelector } from 'reselect';

/**
 * Direct selector to the benefits state domain
 */
const selectBenefitsDomain = (state) => state.get('benefits');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Benefits
 */

const makeSelectBenefits = () => createSelector(
  selectBenefitsDomain,
  (substate) => substate.toJS()
);

export default makeSelectBenefits;
export {
  selectBenefitsDomain,
};
