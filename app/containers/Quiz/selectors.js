import { createSelector } from 'reselect';

/**
 * Direct selector to the quiz state domain
 */
const selectQuizDomain = (state) => state.get('quiz').toJS();

/**
 * Other specific selectors
 */

 const makeSelectEmotions = () => createSelector(
   selectQuizDomain,
   (substate) => substate.emotions
 );

 const makeSelectFlowers = () => createSelector(
   selectQuizDomain,
   (substate) => substate.flowers
 );

 const makeSelectDiagnosis = () => createSelector(
   selectQuizDomain,
   (substate) => substate.diagnosis
 );

/**
 * Default selector used by Quiz
 */

const makeSelectQuiz = () => createSelector(
  selectQuizDomain,
  (substate) => substate
);

export default makeSelectQuiz;
export {
  selectQuizDomain,
  makeSelectFlowers,
  makeSelectEmotions,
  makeSelectDiagnosis,
};
