/**
*
* PackBenefits
*
*/

import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import { AwesomeButton } from 'react-awesome-button';
import Arrow from 'react-icons/lib/io/android-arrow-forward';



const PackWrapper = styled.div`
  display: block;
  padding: 0px;
  margin: 0 0 4em 0;
`;

const PackImage = styled.img`
  display: block;
  padding: 25px;
  width: 100px;
`;

const PackTitle = styled.h4`
  font-size: 1.3em;
  font-weight: 600;
  margin: 0px 0px 5px 0px;
  padding: 0px 0px 0px 10px;
  text-transform: uppercase;
`;

const PackIntro = styled.div`
  font-size: 1.0em;
  padding: 0px 0px 0px 10px;
`;

const PackCost = styled.div`
  font-size: 1.3em;
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
  border-radius: 30px;
  color: white !important;
`;

const Img = styled.img`
  max-width: 100%;
`;

const pictures = [
  require('images/Icon2.png'),
  require('images/Icon3.png'),
  require('images/Icon4.png'),
  require('images/Icon5.png'),
  require('images/Icon6.png'),
  require('images/Icon7.png'),
  require('images/Icon8.png'),
  require('images/Icon9.png'),
  require('images/Icon10.png'),
  require('images/Icon11.png'),
  require('images/Icon12.png'),
  require('images/Icon13.png'),
  require('images/Icon14.png'),
  require('images/Icon15.png'),
  require('images/Icon16.png'),
  require('images/Icon17.png'),
  require('images/Icon18.png'),
  require('images/Icon19.png'),
  require('images/Icon20.png'),
  require('images/Icon21.png'),
  require('images/Icon22.png'),
  require('images/Icon23.png'),
  require('images/Icon24.png'),
  require('images/Icon25.png'),
  require('images/Icon28.png'),
  require('images/Icon29.png'),
  require('images/Icon30.png'),
  require('images/Icon31.png'),
]
function Pack(props) {
  function bundleCheckout() {
    props.bundleCheckout(props.bundle)
  }

  const picture = pictures[Math.floor(Math.random()*pictures.length)]

  return (
    <PackWrapper shadow={props.active}>
      <Row middle="xs" between="xs">
        <Col xs={2} sm={2} md={1} lg={1}>
          <PackImage src={picture}/>
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
          <PackSubmit onClick={bundleCheckout}>
            <AwesomeButton type="secondary">Continuar</AwesomeButton>
          </PackSubmit>
        </Col>
      </Row>
    </PackWrapper>
  );
}

Pack.propTypes = {

};

export default Pack;
