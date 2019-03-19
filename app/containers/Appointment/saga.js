import { takeLatest, put, select, call } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import { makeSelectToken } from 'containers/Login/selectors';
import request from 'utils/request';

import {
  REQUEST_APPOINTMENT,
  REQUEST_SLOTS,
  REQUEST_APPOINT_SLOT
} from './constants';

import {
  requestAppointment,
  requestSlots,
  appointmentSuccess,
  appointmentFailure,
  slotsSuccess,
  slotsFailure,
  appointSlotSuccess,
  appointSlotFailure
} from './actions'

export function* requestAppointmentSaga(action) {
  try {
    const accessToken = yield select(makeSelectToken());
    const appointment = yield request(`/appointments/${action.id}`, { method: 'GET', accessToken });
    yield put(appointmentSuccess(appointment));
  } catch (err) {
    yield put(appointmentFailure(err.toString()));
  }
}

export function* requestSlotsSaga(action) {
  try {
    const accessToken = yield select(makeSelectToken());
    const slots = yield request('/slots', { method: 'GET', accessToken });
    yield put(slotsSuccess(slots));
  } catch (err) {
    yield put(slotsFailure(err.toString()));
  }
}

export function* requestAppointSlotSaga(action) {
  try {
    const accessToken = yield select(makeSelectToken());
    const profile = action.profile;
    const appointment = yield request(`/slots/${action.id}/appoint`, { method: 'POST', accessToken, body: { profile } });
    yield put(appointSlotSuccess(appointment));
    yield put(requestAppointment(appointment.id));
    yield put(requestSlots());
    yield put(push(`/appointment/${appointment.id}`));
  } catch (err) {
    yield put(appointSlotFailure(err.toString()));
  }
}

export default function* defaultSaga() {
  yield takeLatest(REQUEST_APPOINTMENT, requestAppointmentSaga);
  yield takeLatest(REQUEST_SLOTS, requestSlotsSaga);
  yield takeLatest(REQUEST_APPOINT_SLOT, requestAppointSlotSaga);
}
