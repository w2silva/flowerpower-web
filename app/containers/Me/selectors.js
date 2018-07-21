import { createSelector } from 'reselect';

/**
 * Direct selector to the me state domain
 */
const selectMeDomain = (state) => state.get('me').toJS();

/**
 * Other specific selectors
 */


/**
 * Default selector used by Me
 */

const makeSelectMe = () => createSelector(
  selectMeDomain,
  (substate) => substate
);

export default makeSelectMe;
export {
  selectMeDomain,
};
