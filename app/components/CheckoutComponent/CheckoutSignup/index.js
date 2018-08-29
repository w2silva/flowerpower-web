/**
*
* CheckoutComponent
*
*/

import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-styled-flexboxgrid'
import Form from 'components/Form';

const Title = styled.div`
  text-transform: uppercase;
  margin-bottom: 10px;
`;

function CheckoutSignup() {
  return (
    <Grid>
      <Title>dados pessoais</Title>
      <Form>
        <Row>
          <Col xs={12} sm={12} md={4} lg={4}>
            <div className="group">
              <label>Nome</label>
              <input type="text" />
            </div>
          </Col>
          <Col xs={12} sm={12} md={2} lg={2}>
            <div className="group">
              <label>CPF</label>
              <input type="text" />
            </div>
          </Col>
          <Col xs={12} sm={12} md={3} lg={3}>
            <div className="group">
              <label>Telefone</label>
              <input type="text" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={2} lg={2}>
            <div className="group">
              <label>CEP</label>
              <input type="text" />
            </div>
          </Col>
          <Col xs={12} sm={12} md={4} lg={4}>
            <div className="group">
              <label>Endereço</label>
              <input type="text" />
            </div>
          </Col>
          <Col xs={12} sm={12} md={1} lg={1}>
            <div className="group">
              <label>Numero</label>
              <input type="text" />
            </div>
          </Col>
          <Col xs={12} sm={12} md={2} lg={2}>
            <div className="group">
              <label>Complemento</label>
              <input type="text" />
            </div>
          </Col>
          <Col xs={12} sm={12} md={2} lg={2}>
            <div className="group">
              <label>Cidade</label>
              <input type="text" />
            </div>
          </Col>
          <Col xs={12} sm={12} md={1} lg={1}>
            <div className="group">
              <label>UF</label>
              <input type="text" />
            </div>
          </Col>
        </Row>
      </Form>
      <Title>login e senha</Title>
      <Form>
        <Row>
          <Col xs={12} sm={12} md={3} lg={3}>
            <div className="group">
              <label>Login</label>
              <input type="text" />
            </div>
          </Col>
          <Col xs={12} sm={12} md={3} lg={3}>
            <div className="group">
              <label>Senha</label>
              <input type="text" />
            </div>
          </Col>
          <Col xs={12} sm={12} md={3} lg={3}>
            <div className="group">
              <label>Confirmar Senha</label>
              <input type="text" />
            </div>
          </Col>
        </Row>
      </Form>
    </Grid>
  );
}

CheckoutSignup.propTypes = {

};

export default CheckoutSignup;
