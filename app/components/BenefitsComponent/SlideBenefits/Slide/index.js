/**
*
* SlideBenefits
*
*/

import React from 'react';
import styled from 'styled-components';

const SlideWrapper = styled.div`
  width: 180px;
  height: 250px;
  padding: 10px;
  margin: 0px 15px 0px 15px;
  display: inline-block;
  box-shadow: ${props => props.shadow ? '0px 15px 30px 5px #eee' : 'none'};
`;

const SlideImage = styled.img`
  display: block;
  width: 100px;
  margin: 0px auto;
  padding: 0px 0px 10px 0px;
`;

const SlideTitle = styled.h4`
  font-size: 1.2em;
  margin: 10px 0px 10px 0px;
  text-align: left;
  `;

  const SlideIntro = styled.div`
  font-size: .9em;
  line-height: 2.5em;
  text-align: left;
`;

function Slide(props) {
  return (
    <SlideWrapper shadow={props.active}>
      <SlideImage src={props.icon} />
      <SlideTitle>Título do benefício</SlideTitle>
      <SlideIntro>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in justo ullamcorper.</SlideIntro>
    </SlideWrapper>
  );
}

Slide.propTypes = {

};

export default Slide;
