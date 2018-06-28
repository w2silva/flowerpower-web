/**
*
* SlideBenefits
*
*/

import React from 'react';
import styled from 'styled-components';
import Slide from './Slide'

import iconBenefit1 from "images/icone-beneficio1.png";
import iconBenefit2 from "images/icone-beneficio2.png";
import iconBenefit3 from "images/icone-beneficio3.png";
import iconBenefit4 from "images/icone-beneficio4.png";

const SlideBenefitsWrapper = styled.div`
  margin: 5em auto;
  width: 960px;
  text-align: center;
`;

function SlideBenefits() {
  return (
    <SlideBenefitsWrapper>
      <Slide icon={iconBenefit1} active={true} />
      <Slide icon={iconBenefit2} active={false} />
      <Slide icon={iconBenefit3} active={true} />
      <Slide icon={iconBenefit4} active={false} />
    </SlideBenefitsWrapper>
  );
}

SlideBenefits.propTypes = {

};

export default SlideBenefits;
