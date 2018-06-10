/**
 *
 * Quiz
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectQuiz from './selectors';
import reducer from './reducer';
import saga from './saga';
import { push } from 'react-router-redux';

import QuizComponent from 'components/QuizComponent'

export class Quiz extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  submitTherapy = (e) => {
    e.preventDefault();
    this.props.dispatch(push('/results'));
  }

  render() {
    return (
      <QuizComponent submitTherapy={this.submitTherapy}/>
    );
  }
}

Quiz.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  quiz: makeSelectQuiz(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'quiz', reducer });
const withSaga = injectSaga({ key: 'quiz', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Quiz);
