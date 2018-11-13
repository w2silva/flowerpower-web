import { createSelector } from 'reselect';

/**
 * Direct selector to the appointment state domain
 */
const selectAppointmentDomain = (state) => state.get('appointment').toJS();

/**
 * Other specific selectors
 */


/**
 * Default selector used by Appointment
 */

const makeSelectAppointment = () => createSelector(
  selectAppointmentDomain,
  (substate) => substate.appointment
);

const makeSelectSlots = () => createSelector(
  selectAppointmentDomain,
  (substate) => substate.slots
);

export default makeSelectAppointment;
export {
  selectAppointmentDomain,
  makeSelectAppointment,
  makeSelectSlots
};
