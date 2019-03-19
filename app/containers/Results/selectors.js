import { createSelector } from 'reselect';

/**
 * Direct selector to the results state domain
 */
const selectResultsDomain = (state) => state.get('results').toJS();

/**
 * Other specific selectors
 */

const makeSelectSuppliers = () => createSelector(
 selectResultsDomain,
 (substate) => substate.suppliers
);

/**
 * Default selector used by Results
 */

const makeSelectResults = () => createSelector(
  selectResultsDomain,
  (substate) => substate
);

export default makeSelectResults;
export {
  selectResultsDomain,
  makeSelectSuppliers
};
