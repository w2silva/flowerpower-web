/**
*
* QuizComponent
*
*/

import React from 'react';
// import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import Header from 'components/Header'
import Footer from 'components/Footer'
import RegisterMe from 'components/RegisterMe'
import LoginMe from 'components/LoginMe'
import styled from 'styled-components';
import Therapy from './Therapy';
import ProfileSelect from './ProfileSelect';
import PrePurchaseResults from './PrePurchaseResults';
import RedirectToResults from './RedirectToResults';

const StartButton = styled.a`
  cursor: pointer;
  display: inline-block;
  background-image: linear-gradient(to right, #76558e, #b0336b);
  color: white !important;
  border-radius: 50px;
  padding: 10px 35px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 600;
  font-size: .8em;
  box-shadow: 4px 4px 20px 0px #0006;

  &:active,
  &:focus,
  &:hover {
    color: white;
    text-decoration: underline;
  }
`;

function QuizComponent(props) {
  const active = props.active
  return (
    <div>
      <Helmet>
        <title>Quiz</title>
        <meta name="description" content="Description of Quiz" />
      </Helmet>
      <Header/>
      {!props.loginSuccess && !props.activeLogin &&
        <RegisterMe
          updateRegister={props.updateRegister}
          submitRegister={props.submitRegister}
          register={props.register}
          showLogin={props.showLogin}
        />
      }
      {!props.loginSuccess && props.activeLogin &&
        <LoginMe
          updateLogin={props.updateLogin}
          login={props.login}
          submitLogin={props.submitLogin}
        />
      }
      {props.loginSuccess && !props.diagnosis &&
        <ProfileSelect
          me={props.me}
          selectProfile={props.selectProfile}
          selectedProfile={props.selectedProfile}
          selectedProfileMessage={props.selectedProfileMessage}
          startTherapy={props.startTherapy}
        />
      }
      { props.diagnosis && ['started', 'answering', 'ready'].indexOf(props.diagnosis.state) >= 0 &&
        <Therapy
          me={props.me}
          emotions={props.emotions}
          submitEmotion={props.submitEmotion}
          finishEmotionPreselection={props.finishEmotionPreselection}
          submitQuizAnswer={props.submitQuizAnswer}
          finishQuiz={props.finishQuiz}
          submitFlower={props.submitFlower}
          finishFlowers={props.finishFlowers}
          flowers={props.flowers}
          diagnosis={props.diagnosis}
        />}
      { props.diagnosis && props.diagnosis.state === 'waiting' &&
        <PrePurchaseResults
          goToPlanSelection={props.goToPlanSelection}
        />
      }
      { props.diagnosis && props.diagnosis.state === 'finished' &&
        <RedirectToResults
          goToResults={props.goToResults}
        />
      }
      <Footer/>
    </div>
  );
}

QuizComponent.propTypes = {

};

export default QuizComponent;
