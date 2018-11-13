/*
 *
 * Appointment reducer
 *
 */

import { fromJS } from 'immutable';
import {
  REQUEST_APPOINTMENT,
  APPOINTMENT_SUCCESS,
  APPOINTMENT_FAILURE,
  REQUEST_SLOTS,
  SLOTS_SUCCESS,
  SLOTS_FAILURE,
  REQUEST_APPOINT_SLOT,
  APPOINT_SLOT_SUCCESS,
  APPOINT_SLOT_FAILURE,
} from './constants';

const initialState = fromJS({});

function appointmentReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_APPOINTMENT:
      return state.set('requestingAppointment', fromJS(true))
        .delete('appointment')
        .delete('appointmentFailure')
    case APPOINTMENT_SUCCESS:
      return state.set('appointment', action.appointment)
        .delete('requestingAppointment')
        .delete('appointmentFailure')
    case APPOINTMENT_FAILURE:
      return state.set('appointmentFailure', fromJS(true))
        .delete('requestingAppointment')
        .delete('appointment')
    case REQUEST_SLOTS:
      return state.set('requestingSlots', fromJS(true))
        .delete('slots')
        .delete('slotFailure')
    case SLOTS_SUCCESS:
      return state.set('slots', action.slots)
        .delete('requestingSlots')
        .delete('slotFailure')
    case SLOTS_FAILURE:
      return state.set('slotFailure', fromJS(true))
        .delete('requestingSlots')
        .delete('slots')
    case REQUEST_APPOINT_SLOT:
      return state.set('appointingSlot', fromJS(true))
        .delete('appointment')
        .delete('appointingFailure')
    case APPOINT_SLOT_SUCCESS:
      return state.set('appointment', action.appointment)
        .delete('appointingSlot')
        .delete('appointingFailure')
    case APPOINT_SLOT_FAILURE:
      return state.set('appointingFailure', fromJS(true))
        .delete('appointingSlot')
        .delete('appointment')

    default:
      return state;
  }
}

export default appointmentReducer;
