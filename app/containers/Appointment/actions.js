/*
 *
 * Appointment actions
 *
 */

import {
  REQUEST_APPOINTMENT,
  REQUEST_SLOTS,
  REQUEST_APPOINT_SLOT,
  APPOINTMENT_SUCCESS,
  SLOTS_SUCCESS,
  APPOINT_SLOT_SUCCESS,
  APPOINTMENT_FAILURE,
  SLOTS_FAILURE,
  APPOINT_SLOT_FAILURE,
} from './constants';

export function requestAppointment(id) {
  return {
    type: REQUEST_APPOINTMENT,
    id
  };
}

export function requestSlots() {
  return {
    type: REQUEST_SLOTS
  }
}

export function appointmentSuccess(appointment) {
  return {
    type: APPOINTMENT_SUCCESS,
    appointment
  }
}

export function appointmentFailure(error) {
  return {
    type: APPOINTMENT_FAILURE,
    error
  }
}

export function slotsSuccess(slots) {
  return {
    type: SLOTS_SUCCESS,
    slots
  }
}

export function slotsFailure(error) {
  return {
    type: SLOTS_FAILURE,
    error
  }
}

export function requestAppointSlot(id, profile) {
  return {
    type: REQUEST_APPOINT_SLOT,
    id,
    profile
  }
}

export function appointSlotSuccess(appointment) {
  return {
    type: APPOINT_SLOT_SUCCESS,
    appointment
  }
}

export function appointSlotFailure(error) {
  return {
    type: APPOINT_SLOT_FAILURE,
    error
  }
}
