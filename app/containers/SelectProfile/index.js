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
import { getActiveTherapy } from './actions'
import makeSelectSelectProfile, { makeSelectTherapy } from './selectors';
import reducer from './reducer';
import saga from './saga';
import ProfileComponent from 'components/ProfileComponent';
import { push } from 'react-router-redux';

export class SelectProfile extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentWillReceiveProps(nextProps) {
    const dispatch = this.props.dispatch;
    if (!this.props.therapy && nextProps.therapy) {
      setTimeout(() => { this.props.dispatch(push('/quiz')); });
    }
  }

  // submitTherapy = (e) => {
  //   e.preventDefault();
  //   this.props.dispatch(push('/profile'));
  // }

  getQuizzes = (profileType) => () => {
    console.log('1');
    this.props.dispatch(getActiveTherapy(profileType));
  }

  render() {
    return (
      <ProfileComponent
        getQuizzes={this.getQuizzes}
      />
    );
  }
}

SelectProfile.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  selectprofile: makeSelectSelectProfile(),
  therapy: makeSelectTherapy()
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
