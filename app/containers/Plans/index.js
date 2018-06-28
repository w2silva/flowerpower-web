/**
 *
 * Plans
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectPlans from './selectors';
import reducer from './reducer';
import saga from './saga';
import PlansComponent from 'components/PlansComponent';

export class Plans extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  submitTherapy = (e) => {
    e.preventDefault();
    this.props.dispatch(push('/plans'));
  }
  
  render() {
    return (
      <PlansComponent submitTherapy={this.submitTherapy}/>
    );
  }
}

Plans.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  plans: makeSelectPlans(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'plans', reducer });
const withSaga = injectSaga({ key: 'plans', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Plans);
