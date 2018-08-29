/**
*
* PackBenefits
*
*/

import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';

const PackWrapper = styled.div`
  display: block;
  padding: 0px;
  margin: 0 0 4em 0;
`;

const PackImage = styled.img`
  display: block;
  padding: 25px;
  background-color: #ddd;
  border-radius: 100%;
`;

const PackTitle = styled.h4`
  font-size: 1.0em;
  font-weight: 600;
  margin: 0px 0px 5px 0px;
  padding: 0px 0px 0px 10px;
  text-transform: uppercase;
`;

const PackIntro = styled.div`
  font-size: .8em;
  padding: 0px 0px 0px 10px;
`;

const PackCost = styled.div`
  font-size: .8em;
  margin: 0px 0px 5px 0px;
`;

const PackLinkDetails = styled.a`
  font-size: .7em;
  text-decoration: underline;
`;

const PackSubmit = styled.a`
  cursor: pointer;
  display: block;
  padding: 5px 10px;
  font-size: .9em;
  fon-weight: 700;
  text-decoration: none;
  text-align: center;
  background-color: #4274b1;
  border-radius: 30px;
  color: white !important;
  box-shadow: 3px 3px 15px 0px #aaa;
`;

function Pack(props) {
  function bundleCheckout() {
    props.bundleCheckout(props.bundle)
  }

  return (
    <PackWrapper shadow={props.active}>
      <Row middle="xs" between="xs">
        <Col xs={2} sm={2} md={1} lg={1}>
          <PackImage />
        </Col>
        <Col xs={10} sm={6} md={6} lg={6}>
          <PackTitle>{props.bundle.name}</PackTitle>
          <PackIntro>{props.bundle.statement}</PackIntro>
        </Col>
        <Col xs={6} sm={2} md={3} lg={3}>
          <PackCost><strong>R$ {props.bundle.price.amount.toFixed(2).replace('.', ',')}</strong> em 10x s/juros</PackCost>
          {/* <PackLinkDetails>ver mais detalhes do plano</PackLinkDetails> */}
        </Col>
        <Col xs={6} sm={2} md={2} lg={2}>
          <PackSubmit onClick={bundleCheckout}>Continuar</PackSubmit>
        </Col>
      </Row>
    </PackWrapper>
  );
}

Pack.propTypes = {

};

export default Pack;
