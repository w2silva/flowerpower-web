import { createSelector } from 'reselect';

/**
 * Direct selector to the login state domain
 */
const selectLoginDomain = (state) => state.get('login').toJS();

/**
 * Other specific selectors
 */
const makeSelectLoginSuccess = () => createSelector(
  selectLoginDomain,
  (substate) => substate.loginSuccess
);

const makeSelectLoginFailure = () => createSelector(
  selectLoginDomain,
  (substate) => substate.loginFailure
);
/**
 * Default selector used by Login
 */

const makeSelectLogin = () => createSelector(
  selectLoginDomain,
  (substate) => substate
);

const makeSelectToken = () => createSelector(
  selectLoginDomain,
  (substate) => substate.token
);

export default makeSelectLogin;
export {
  selectLoginDomain,
  makeSelectToken,
  makeSelectLoginSuccess,
};
