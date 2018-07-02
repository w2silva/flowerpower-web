/**
 *
 * SelectProfile
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectSelectProfile from './selectors';
import reducer from './reducer';
import saga from './saga';
import ProfileComponent from 'components/ProfileComponent';

export class SelectProfile extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  submitTherapy = (e) => {
    e.preventDefault();
    this.props.dispatch(push('/profile'));
  }
  
  render() {
    return (
      <ProfileComponent submitTherapy={this.submitTherapy}/>
    );
  }
}

SelectProfile.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  selectprofile: makeSelectSelectProfile(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'selectProfile', reducer });
const withSaga = injectSaga({ key: 'selectProfile', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(SelectProfile);
