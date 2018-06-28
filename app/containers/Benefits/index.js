/**
 *
 * Benefits
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectBenefits from './selectors';
import reducer from './reducer';
import saga from './saga';
import BenefitsComponent from 'components/BenefitsComponent';

export class Benefits extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  submitTherapy = (e) => {
    e.preventDefault();
    this.props.dispatch(push('/benefits'));
  }
  
  render() {
    return (
      <BenefitsComponent submitTherapy={this.submitTherapy}/>
    );
  }
}

Benefits.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  benefits: makeSelectBenefits(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'benefits', reducer });
const withSaga = injectSaga({ key: 'benefits', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Benefits);
