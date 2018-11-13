/**
*
* SlideBenefits
*
*/

import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-styled-flexboxgrid'

const SlideWrapper = styled.a`
  transition: 1s;
  width: 180px;
  height: auto;
  min-height: 250px;
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
  font-weight: bold;
  margin: 10px 0px 10px 0px;
  text-align: left;
`;

const SlideSubtitle = styled.h4`
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
    <Col xs={12} sm={12} md={3} lg={3} onClick={props.onClick}>
      <SlideWrapper shadow={props.active} onMouseEnter={props.makeActive(props.index)} onMouseLeave={props.makeActive(null)}>
        <SlideImage src={props.icon} />
        <SlideTitle>{props.title}</SlideTitle>
        <SlideSubtitle>{props.subtitle}</SlideSubtitle>
        <SlideIntro>{props.description}</SlideIntro>
      </SlideWrapper>
    </Col>
  );
}

Slide.propTypes = {

};

export default Slide;
