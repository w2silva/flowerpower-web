import { createSelector } from 'reselect';

/**
 * Direct selector to the selectProfile state domain
 */
const selectSelectProfileDomain = (state) => state.get('selectProfile').toJS();

/**
 * Other specific selectors
 */
 const makeSelectTherapy = () => createSelector(
   selectSelectProfileDomain,
   (substate) => substate.therapy
 );

/**
 * Default selector used by SelectProfile
 */

const makeSelectSelectProfile = () => createSelector(
  selectSelectProfileDomain,
  (substate) => substate
);

export default makeSelectSelectProfile;
export {
  selectSelectProfileDomain,
  makeSelectTherapy,
};
