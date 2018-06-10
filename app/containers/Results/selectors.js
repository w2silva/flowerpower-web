import { createSelector } from 'reselect';

/**
 * Direct selector to the results state domain
 */
const selectResultsDomain = (state) => state.get('results');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Results
 */

const makeSelectResults = () => createSelector(
  selectResultsDomain,
  (substate) => substate.toJS()
);

export default makeSelectResults;
export {
  selectResultsDomain,
};
