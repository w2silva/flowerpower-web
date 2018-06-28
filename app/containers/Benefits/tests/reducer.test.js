
import { fromJS } from 'immutable';
import benefitsReducer from '../reducer';

describe('benefitsReducer', () => {
  it('returns the initial state', () => {
    expect(benefitsReducer(undefined, {})).toEqual(fromJS({}));
  });
});
