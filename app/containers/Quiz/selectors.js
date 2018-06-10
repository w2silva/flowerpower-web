import { createSelector } from 'reselect';

/**
 * Direct selector to the quiz state domain
 */
const selectQuizDomain = (state) => state.get('quiz');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Quiz
 */

const makeSelectQuiz = () => createSelector(
  selectQuizDomain,
  (substate) => substate.toJS()
);

export default makeSelectQuiz;
export {
  selectQuizDomain,
};
