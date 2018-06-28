
import { fromJS } from 'immutable';
import plansReducer from '../reducer';

describe('plansReducer', () => {
  it('returns the initial state', () => {
    expect(plansReducer(undefined, {})).toEqual(fromJS({}));
  });
});
