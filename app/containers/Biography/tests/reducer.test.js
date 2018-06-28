
import { fromJS } from 'immutable';
import biographyReducer from '../reducer';

describe('biographyReducer', () => {
  it('returns the initial state', () => {
    expect(biographyReducer(undefined, {})).toEqual(fromJS({}));
  });
});
