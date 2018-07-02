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
  font-size: .8em;
  font-weight: 600;
  margin: 0px 0px 5px 0px;
  text-transform: uppercase;
`;
  
const PackIntro = styled.div`
  font-size: .8em;
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
  background-color: #4274b1;
  border-radius: 30px;
  color: white !important;
  box-shadow: 3px 3px 15px 0px #aaa;
`;

function Pack(props) {
  return (
    <PackWrapper shadow={props.active}>
      <Row middle="xs" between="xs">
        <Col>
          <PackImage />
        </Col>
        <Col>
          <PackTitle>coach particular com patrícia (1o seções) + 4 florais online</PackTitle>
          <PackIntro>Pacote particular de coaching com patricia (10 seções) + 4 florais online + 4 ebooks</PackIntro>
        </Col>
        <Col>
          <PackCost><strong>R$ 2.100,00</strong> em 10x s/juros</PackCost>
          <PackLinkDetails>ver mais detalhes do plano</PackLinkDetails>
        </Col>
        <Col>
          <PackSubmit>Continuar</PackSubmit>
        </Col>
      </Row>
    </PackWrapper>
  );
}

Pack.propTypes = {

};

export default Pack;
