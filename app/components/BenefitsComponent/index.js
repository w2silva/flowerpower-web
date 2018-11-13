/**
*
* BenefitsComponent
*
*/

import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import Footer from 'components/Footer'
import H2 from 'components/H2'
import H3 from 'components/H3'
import ToBeRedeemed from './ToBeRedeemed'
import Redeemed from './Redeemed'
import Packages from 'components/Packages'
import LogOut from 'components/LogOut'
import RegisterMe from 'components/RegisterMe'
import LoginMe from 'components/LoginMe'

const Intro = styled.div`
  width: 70em;
  margin: 10px auto;
  text-align: center;
`;

const IntroCredits = styled.div`
  margin: 20px auto;
  text-align: center;
  font-weight: 500;
  font-size: 1.6em;
  color: black;
`;

function BenefitsComponent(props) {
  return (
    <div>
      <Helmet>
        <title>Plans</title>
        <meta name="description" content="Description of Plans" />
      </Helmet>
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
          hideLogin={props.hideLogin}
          submitLogin={props.submitLogin}
        />
      }
      {props.loginSuccess &&
        <div>
          <H2 align="center">Minha conta</H2>
          <H3 align="center">Benefícios a serem resgatados</H3>
          <ToBeRedeemed
            purchases={props.purchases}
            goToQuiz={props.goToQuiz}
            goToResults={props.goToResults}
            goToNewAppointment={props.goToNewAppointment}
            goToAppointment={props.goToAppointment}
            client={props.client}/>
          <H3 align="center">Benefícios já resgatados</H3>
          <Redeemed
            purchases={props.purchases}
            goToQuiz={props.goToQuiz}
            goToResults={props.goToResults}
            goToNewAppointment={props.goToNewAppointment}
            goToAppointment={props.goToAppointment}
            client={props.client}/>
          {/* <IntroCredits>
            Você não possui créditos para realizar terapias.<br />
            Selecione um novo pacote ou clique aqui para ver os perfis salvos.
          </IntroCredits>
          <Packages/> */}
          <LogOut logOut={props.logOut}/>
        </div>
      }
      <Footer/>
    </div>
  );
}

BenefitsComponent.propTypes = {

};

export default BenefitsComponent;
