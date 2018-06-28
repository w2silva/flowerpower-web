/**
*
* Description
*
*/

import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-styled-flexboxgrid'
import imgLavandaHome from 'images/img-lavanda-home.jpg';
import H2 from 'components/H2';

const DescriptionImg = styled.img`
  max-width: 600px;
  margin-left: -260px;
`;

const DescriptionWrapper = styled.div`
  margin-bottom: 30px;
`;

const DescriptionButton = styled.a`
  display: inline-block;
  background-color: #779ccb;
  color: white;
  border-radius: 50px;
  padding: 10px 25px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 600;
  font-size: .8em;
  box-shadow: 4px 4px 20px 0px #3336;
`;

function Description() {
  return (
    <Grid>
      <Row middle="xs">
        <Col xs={6}>
          <DescriptionImg src={imgLavandaHome} />
        </Col>
        <Col xs={6}>
          <H2>O que são florais?</H2>
          <DescriptionWrapper>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in justo ullamcorper, sollicitudin turpis dapibus, hendrerit tortor. Morbi tincidunt non sapien nec pretium. Donec elementum tristique consequat. Cras ut orci at felis accumsan ullamcorper non quis risus. Ut at ex mi. Aenean ac varius elit, eu congue dolor. Praesent elit purus, elementum nec molestie nec, molestie ut sapien. Nulla consequat justo in volutpat tincidunt. Vestibulum vitae consequat tortor.</span>
            <br />
            <br />
            <span>Mauris aliquam justo dolor, ut pulvinar nulla pellentesque nec. Praesent dapibus lorem eros, ut bibendum elit sagittis vel.</span>
            <br />
            <br />
            <strong>Duis justo odio, blandit quis augue ac, faucibus faucibus enim. Nulla facilisi.</strong>
          </DescriptionWrapper>
          <DescriptionButton href='/about'>saiba mais sobre florais</DescriptionButton>
        </Col>
      </Row>
    </Grid>
  );
}

Description.propTypes = {

};

export default Description;
