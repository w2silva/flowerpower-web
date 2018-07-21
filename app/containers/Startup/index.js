/**
 *
 * Startup
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import registerSaga from 'containers/Register/saga';
import loginSaga from 'containers/Login/saga';
import meSaga from 'containers/Me/saga';
import { tokenSuccess, requestLoginToken } from 'containers/Login/actions';

export class Startup extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    // 1. Retrieve token from localStorage
    const token = window.localStorage.getItem('token');
    if (token) {
      // 2. Store token
      this.props.dispatch(tokenSuccess(token));
      // 3. Login with token
      this.props.dispatch(requestLoginToken(token));
    }

    if (typeof (window) !== 'undefined' && typeof (window.emailjs) !== 'undefined') {
      window.emailjs.init('user_SMoRzct5txq0nkLmYRcDr');
    }
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}

Startup.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(null, mapDispatchToProps);
const withRegisterSaga = injectSaga({ key: 'register', saga: registerSaga });
const withLoginSaga = injectSaga({ key: 'login', saga: loginSaga });
const withMeSaga = injectSaga({ key: 'me', saga: meSaga });

export default compose(
  withConnect,
  withRegisterSaga,
  withLoginSaga,
  withMeSaga,
)(Startup);
