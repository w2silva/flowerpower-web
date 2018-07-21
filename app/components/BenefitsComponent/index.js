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
      <Header/>
      <H2 align="center">Faça sua terapia</H2>
      <Intro>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in justo ullamcorper, sollicitudin turpis dapibus, hendrerit tortor. Morbi tincidunt non sapien nec pretium. Donec elementum tristique consequat.</Intro>
      <SlideBenefits />
      <IntroCredits>Vocẽ não possue mais créditos para realizar X terapias<br />selecione um novo pacote ou clique aqui para ver os perfis salvos.</IntroCredits>
      <Packages/>
      <LogOut logOut={props.logOut}/>
      <Footer/>
    </div>
  );
}

BenefitsComponent.propTypes = {

};

export default BenefitsComponent;
