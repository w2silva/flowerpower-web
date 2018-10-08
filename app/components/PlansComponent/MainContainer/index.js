/**
*
* MainContainer
*
*/

import React from 'react';
import styled from 'styled-components';
// import styled from 'styled-components';
import H2 from 'components/H2'
import Packages from 'components/Packages'
import sideLeftImage from 'images/img-lateral-esquerda-planos.png';
import sideRightImage from 'images/img-lateral-direita-planos.png';


const Intro = styled.div`
  width: 60em;
  max-width: 100%;
  margin: 10px auto;
  text-align: center;
  z-index: -1
`;

const SideLeftImage = styled.div`
  position: absolute;
  top: 70%;
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
  top: 110%;
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

function MainContainer(props) {
  return (
    <div>
      <SideLeftImage>
        <Img src={sideLeftImage} />
      </SideLeftImage>
      <SideRightImage>
        <Img src={sideRightImage} />
      </SideRightImage>
      <H2 align="center">Escolha seu plano</H2>
      <Intro>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in justo ullamcorper, sollicitudin turpis dapibus, hendrerit tortor. Morbi tincidunt non sapien nec pretium. Donec elementum tristique consequat.</Intro>
      <Packages
        bundles={props.bundles}
        bundleCheckout={props.bundleCheckout}/>
    </div>
  );
}

MainContainer.propTypes = {

};

export default MainContainer;
