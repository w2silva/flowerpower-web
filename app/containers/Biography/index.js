/**
 *
 * Biography
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectBiography from './selectors';
import reducer from './reducer';
import saga from './saga';
import BiographyComponent from 'components/BiographyComponent';

export class Biography extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  submitTherapy = (e) => {
    e.preventDefault();
    this.props.dispatch(push('/biography'));
  }
  
  render() {
    return (
      <BiographyComponent submitTherapy={this.submitTherapy}/>
    );
  }
}

Biography.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  biography: makeSelectBiography(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'biography', reducer });
const withSaga = injectSaga({ key: 'biography', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Biography);
