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
import { push } from 'react-router-redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { requestLogout } from 'containers/Login/actions';
import makeSelectBenefits, { makeSelectPurchases, makeSelectBundles, makeSelectAssets, makeSelectTherapies } from './selectors';
import reducer from './reducer';
import saga from './saga';
import BenefitsComponent from 'components/BenefitsComponent';
import { getAll } from './actions'
import { registerMe } from '../Register/actions'
import { requestLogin } from '../Login/actions'
import { setTherapy, cleanDiagnosis } from '../Quiz/actions'
import makeSelectLogin from '../Login/selectors'
import { makeSelectRegisterSuccess, makeSelectRegisterFailure } from '../Register/selectors'
import { makeSelectLoginSuccess, makeSelectLoginFailure } from '../Login/selectors'

export class Benefits extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      activeLogin: false,
      register: {
        name: '',
        target: '',
        birthday: '',
        gender: '',
        email: '',
      },
      login: {
        email: '',
        password: '',
      },
    }
    props.dispatch(getAll());
  }

  logOut = () => {
    this.props.dispatch(requestLogout());
  }

  showLogin = () => {
    this.setState({
      activeLogin: true
    })
  }

  hideLogin = () => {
    this.setState({
      activeLogin: false
    })
  }

  submitRegister = () => {
    const emailFilter = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let nameMessage = '';
    let emailMessage = '';
    let passwordMessage = '';
    let birthdayMessage = '';
    let genderMessage = '';
    let confirmPasswordMessage = '';
    let conflitMessage = '';
    this.setState({
      register: { ...this.state.register,
        nameMessage,
        emailMessage,
        passwordMessage,
        birthdayMessage,
        genderMessage,
        confirmPasswordMessage,
        conflitMessage,
      }
    }, function cb() {
      let check = true;
      if (!this.state.register.name) {
        nameMessage = 'Campo Obrigatório';
        check = false;
      }
      if (!this.state.register.email) {
        emailMessage = 'Campo Obrigatório';
        check = false;
      }
      if (!emailFilter.test(this.state.register.email)) {
        emailMessage = 'E-mail inválido';
        check = false;
      }
      if (!this.state.register.birthday) {
        birthdayMessage = 'Campo Obrigatório';
        check = false;
      }
      if (!this.state.register.gender) {
        genderMessage = 'Campo Obrigatório';
        check = false;
      }
      if (!this.state.register.password) {
        passwordMessage = 'Campo Obrigatório';
        check = false;
      }
      if (!this.state.register.confirmPassword) {
        confirmPasswordMessage = 'Campo Obrigatório';
        check = false;
      }
      if (this.state.register.password !== this.state.register.confirmPassword) {
        confirmPasswordMessage = 'Certifique-se de que as senhas informadas são idênticas';
        check = false;
      }
      if (this.state.register.password && this.state.register.password.length < 8) {
        passwordMessage = 'A senha deve ter no mínimo 8 caracteres';
        check = false;
      }

      if(!check) {
        this.setState({
          register: { ...this.state.register,
            nameMessage,
            emailMessage,
            passwordMessage,
            birthdayMessage,
            genderMessage,
            confirmPasswordMessage,
            conflitMessage,
          }
        })
        return false
      }
      this.props.dispatch(registerMe(this.state.register.name, this.state.register.email, this.state.register.password, this.state.register.birthday, this.state.register.gender));
      return true;
    });
  }

  submitLogin = () => {
    const emailFilter = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let emailMessage = '';
    let passwordMessage = '';
    this.setState({
      login: { ...this.state.login,
        emailMessage,
        passwordMessage,
      }
    }, function cb() {
      let check = true;
      if (!this.state.login.email) {
        emailMessage = 'Campo Obrigatório';
        check = false;
      }
      if (!emailFilter.test(this.state.login.email)) {
        emailMessage = 'E-mail inválido';
        check = false;
      }
      if (!this.state.login.password) {
        passwordMessage = 'Campo Obrigatório';
        check = false;
      }
      if (this.state.login.password && this.state.login.password.length < 8) {
        passwordMessage = 'A senha deve ter no mínimo 8 caracteres';
        check = false;
      }

      if(!check) {
        this.setState({
          login: { ...this.state.login,
            emailMessage,
            passwordMessage,
          }
        })
        return false
      }
      this.props.dispatch(requestLogin(this.state.login.email, this.state.login.password));
      return true;
    });
  }


  updateRegister = (attrName) => (e) => {
    this.setState({ register: { ...this.state.register, [attrName]: e.target.value } });
  };

  updateLogin = (attrName) => (e) => {
    this.setState({ login: { ...this.state.login, [attrName]: e.target.value } });
  };

  goToQuiz = (therapy) => (e) => {
    this.props.dispatch(cleanDiagnosis())
    this.props.dispatch(setTherapy(therapy.id))
    this.props.dispatch(push('/quiz'));
  }

  render() {
    return (
      <BenefitsComponent
        purchases={this.props.purchases}
        // bundles={this.props.bundles}
        // assets={this.props.assets}
        // therapies={this.props.therapies}
        loginSuccess={this.props.loginSuccess}
        logoutSuccess={this.props.logoutSuccess}
        activeLogin={this.state.activeLogin}
        logOut={this.logOut}
        showLogin={this.showLogin}
        hideLogin={this.hideLogin}
        updateRegister={this.updateRegister}
        updateLogin={this.updateLogin}
        submitRegister={this.submitRegister}
        submitLogin={this.submitLogin}
        goToQuiz={this.goToQuiz}
        login={this.state.login}
        register={this.state.register}
      />
    );
  }
}

Benefits.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  // benefits: makeSelectBenefits(),
  loginSuccess: makeSelectLoginSuccess(),
  purchases: makeSelectPurchases(),
  // bundles: makeSelectBundles(),
  // assets: makeSelectAssets(),
  // therapies: makeSelectTherapies(),
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
