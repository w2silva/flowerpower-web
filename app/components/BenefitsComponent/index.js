/**
*
* BenefitsComponent
*
*/

import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import Header from 'components/Header'
import Footer from 'components/Footer'
import H2 from 'components/H2'
import SlideBenefits from './SlideBenefits'
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
  console.log(props.purchases);
  return (
    <div>
      <Helmet>
        <title>Plans</title>
        <meta name="description" content="Description of Plans" />
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
          hideLogin={props.hideLogin}
          submitLogin={props.submitLogin}
        />
      }
      {props.loginSuccess &&
        <div>
          <H2 align="center">Use seus benefícios</H2>
          <Intro>Resgate seus beneficios abaixo!</Intro>
          <SlideBenefits purchases={props.purchases} goToQuiz={props.goToQuiz}/>
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
