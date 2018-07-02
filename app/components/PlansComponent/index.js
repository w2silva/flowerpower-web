/**
*
* PlansComponent
*
*/

import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import Header from 'components/Header'
import Footer from 'components/Footer'
import H2 from 'components/H2'
import Packages from 'components/Packages'
import sideLeftImage from 'images/img-lateral-esquerda-planos.jpg';
import sideRightImage from 'images/img-lateral-direita-planos.jpg';

const Intro = styled.div`
  width: 60em;
  max-width: 100%;
  margin: 10px auto;
  text-align: center;
`;

const SideLeftImage = styled.div`
  position: absolute;
  top: 100%;
  -webit-transform: translateY(-50%);
         transform: translateY(-50%);
  left: 0;
  width: 160px;

  @media (max-width: 780px) {
    display: none;
  }
`;

const SideRightImage = styled.div`
  position: absolute;
  top: 120%;
  -webit-transform: translateY(-50%);
         transform: translateY(-50%);
  right: 0;
  width: 200px;

  @media (max-width: 780px) {
    display: none;
  }
`;

const Img = styled.img`
  max-width: 100%;
`;

function PlansComponent() {
  return (
    <div>
      <Helmet>
        <title>Plans</title>
        <meta name="description" content="Description of Plans" />
      </Helmet>
      <Header/>
      <SideLeftImage>
        <Img src={sideLeftImage} />
      </SideLeftImage>
      <SideRightImage>
        <Img src={sideRightImage} />
      </SideRightImage>
      <H2 align="center">Escolha seu plano</H2>
      <Intro>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in justo ullamcorper, sollicitudin turpis dapibus, hendrerit tortor. Morbi tincidunt non sapien nec pretium. Donec elementum tristique consequat.</Intro>
      <Packages/>
      <Footer/>
    </div>
  );
}

PlansComponent.propTypes = {

};

export default PlansComponent;
