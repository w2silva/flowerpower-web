import { createSelector } from 'reselect';

/**
 * Direct selector to the selectProfile state domain
 */
const selectSelectProfileDomain = (state) => state.get('selectProfile');

/**
 * Other specific selectors
 */


/**
 * Default selector used by SelectProfile
 */

const makeSelectSelectProfile = () => createSelector(
  selectSelectProfileDomain,
  (substate) => substate.toJS()
);

export default makeSelectSelectProfile;
export {
  selectSelectProfileDomain,
};
