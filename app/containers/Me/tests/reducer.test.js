
import { fromJS } from 'immutable';
import meReducer from '../reducer';

describe('meReducer', () => {
  it('returns the initial state', () => {
    expect(meReducer(undefined, {})).toEqual(fromJS({}));
  });
});
