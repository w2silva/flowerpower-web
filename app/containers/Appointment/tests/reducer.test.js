
import { fromJS } from 'immutable';
import appointmentReducer from '../reducer';

describe('appointmentReducer', () => {
  it('returns the initial state', () => {
    expect(appointmentReducer(undefined, {})).toEqual(fromJS({}));
  });
});
