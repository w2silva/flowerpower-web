import { createSelector } from 'reselect';

/**
 * Direct selector to the register state domain
 */
const selectRegisterDomain = (state) => state.get('register').toJS();

/**
 * Other specific selectors
 */

const makeSelectRegisterSuccess = () => createSelector(
 selectRegisterDomain,
 (substate) => substate.registerSuccess
);

const makeSelectRegisterFailure = () => createSelector(
 selectRegisterDomain,
 (substate) => substate.registerFailure
);
/**
 * Default selector used by Register
 */

const makeSelectRegister = () => createSelector(
  selectRegisterDomain,
  (substate) => substate.toJS()
);

export default makeSelectRegister;
export {
  selectRegisterDomain,
  makeSelectRegisterSuccess,
  makeSelectRegisterFailure
};
