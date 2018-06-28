import { createSelector } from 'reselect';

/**
 * Direct selector to the biography state domain
 */
const selectBiographyDomain = (state) => state.get('biography');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Biography
 */

const makeSelectBiography = () => createSelector(
  selectBiographyDomain,
  (substate) => substate.toJS()
);

export default makeSelectBiography;
export {
  selectBiographyDomain,
};
