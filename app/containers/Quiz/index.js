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
import { push } from 'react-router-redux';

import makeSelectQuiz from './selectors';
import makeSelectMe from '../Me/selectors'
import makeSelectLogin from '../Login/selectors'
import { makeSelectRegisterSuccess, makeSelectRegisterFailure } from '../Register/selectors'
import { makeSelectLoginSuccess, makeSelectLoginFailure } from '../Login/selectors'
import reducer from './reducer';
import saga from './saga';
import {
  requestAll,
  updateEmotion,
  runDiagnosis,
  requestDiagnosis,
  finishEmotionPreselection,
  updateQuizAnswer,
  finishQuiz,
  updateFlower,
  finishFlowers
} from './actions'
import { registerMe } from '../Register/actions'
import { requestLogin } from '../Login/actions'

import QuizComponent from 'components/QuizComponent'
import { makeSelectEmotions, makeSelectFlowers, makeSelectDiagnosis } from './selectors';

export class Quiz extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
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
      activeLogin: false,
      selectedProfile: ''
    }
    this.getAll(props);
  }

  getAll = (props) => {
    props.dispatch(requestAll());
    const diagnosisId = props.match.params.id
    if (diagnosisId) {
      props.dispatch(requestDiagnosis(diagnosisId))
    }
  }

  startTherapy = () => {
    this.setState({
      selectedProfileMessage: ''
    })
    if (!this.state.selectedProfile) {
      this.setState({
        selectedProfileMessage: 'Por favor, selecione um perfil antes de continuar'
      })
      return false
    }

    let target;
    let profileId;

    if (this.state.selectedProfile === 'human' || this.state.selectedProfile === 'pet') {
      target = this.state.selectedProfile
    } else {
      const profile = this.props.me.me.client.profiles.filter((p) => p._id === this.state.selectedProfile)[0]
      target = profile.target
      profileId = profile._id
    }


    this.props.dispatch(runDiagnosis(profileId, target));
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

  submitTherapy = (e) => {
    e.preventDefault();
    this.props.dispatch(push('/results'));
  }

  updateRegister = (attrName) => (e) => {
    this.setState({ register: { ...this.state.register, [attrName]: e.target.value } });
  };

  updateLogin = (attrName) => (e) => {
    this.setState({ login: { ...this.state.login, [attrName]: e.target.value } });
  };

  submitEmotion = (emotionId, phaseIdx) => {
    const diagnosisId = this.props.match.params.id
    this.props.dispatch(updateEmotion(diagnosisId, emotionId, phaseIdx));
  }

  finishEmotionPreselection = (emotionPreselectionId) => () => {
    this.props.dispatch(finishEmotionPreselection(this.props.diagnosis.id, emotionPreselectionId))
  }

  submitQuizAnswer = (quizId, questionId, rating) => {
    const diagnosisId = this.props.match.params.id
    this.props.dispatch(updateQuizAnswer(diagnosisId, quizId, questionId, rating));
  }

  finishQuiz = (quizId) => () => {
    const diagnosisId = this.props.match.params.id
    this.props.dispatch(finishQuiz(diagnosisId, quizId))
  }

  submitFlower = (flowerPostselectionId, flowerId, selection) => {
    const diagnosisId = this.props.match.params.id
    this.props.dispatch(updateFlower(diagnosisId, flowerPostselectionId, flowerId, selection));
  }

  finishFlowers = (flowerPostselectionId) => () => {
    const diagnosisId = this.props.match.params.id
    this.props.dispatch(finishFlowers(diagnosisId, flowerPostselectionId))
  }

  showLogin = () => {
    this.setState({
      activeLogin: true
    })
  }

  selectProfile = (profile) => (e) => {
    e.preventDefault();
    this.setState({
      selectedProfile: profile
    })
  }

  newProfile = (target) => (e) => {
    e.preventDefault();
    console.log(target);
  }

  render() {
    return (
      <QuizComponent
        diagnosis={this.props.diagnosis}
        selectedProfileMessage={this.state.selectedProfileMessage}
        selectedProfile={this.state.selectedProfile}
        selectProfile={this.selectProfile}
        updateProfile={this.updateProfile}
        submitTherapy={this.submitTherapy}
        submitRegister={this.submitRegister}
        submitLogin={this.submitLogin}
        updateRegister={this.updateRegister}
        updateLogin={this.updateLogin}
        activeLogin={this.state.activeLogin}
        showLogin={this.showLogin}
        loginSuccess={this.props.loginSuccess}
        login={this.state.login}
        register={this.state.register}
        emotions={this.props.emotions}
        flowers={this.props.flowers}
        submitEmotion={this.submitEmotion}
        finishEmotionPreselection={this.finishEmotionPreselection}
        submitQuizAnswer={this.submitQuizAnswer}
        finishQuiz={this.finishQuiz}
        submitFlower={this.submitFlower}
        finishFlowers={this.finishFlowers}
        me={this.props.me}
        startTherapy={this.startTherapy}
      />
    );
  }
}

Quiz.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  quiz: makeSelectQuiz(),
  emotions: makeSelectEmotions(),
  diagnosis: makeSelectDiagnosis(),
  flowers: makeSelectFlowers(),
  me: makeSelectMe(),
  loginSuccess: makeSelectLoginSuccess(),
  login: makeSelectLogin(),
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
