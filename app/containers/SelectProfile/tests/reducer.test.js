
import { fromJS } from 'immutable';
import selectProfileReducer from '../reducer';

describe('selectProfileReducer', () => {
  it('returns the initial state', () => {
    expect(selectProfileReducer(undefined, {})).toEqual(fromJS({}));
  });
});
