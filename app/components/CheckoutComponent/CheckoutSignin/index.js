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

const FormSubmit = styled.button`
  display: inline-block;
  background-color: #779ccb;
  color: white;
  border-radius: 50px;
  padding: 10px 25px;
  margin: 0px 10px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 600;
  font-size: .8em;
  box-shadow: 4px 4px 20px 0px #3336;
`;

const MarginFooter = styled.div`
  margin: 1em 0px 5em 0;
  text-align: center;
`;

function CheckoutSignin() {
  return (
    <Grid>
      <Title>dados pessoais</Title>
      <Form>
        <Row>
          <Col xs={4}>
            <div className="group">
              <label>Nome</label>
              <input type="text" />
            </div>
          </Col>
          <Col xs={2}>
            <div className="group">
              <label>CPF</label>
              <input type="text" />
            </div>
          </Col>
          <Col xs={3}>
            <div className="group">
              <label>Telefone</label>
              <input type="text" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={2}>
            <div className="group">
              <label>CEP</label>
              <input type="text" />
            </div>
          </Col>
          <Col xs={4}>
            <div className="group">
              <label>Endereço</label>
              <input type="text" />
            </div>
          </Col>
          <Col xs={1}>
            <div className="group">
              <label>Numero</label>
              <input type="text" />
            </div>
          </Col>
          <Col xs={2}>
            <div className="group">
              <label>Complemento</label>
              <input type="text" />
            </div>
          </Col>
          <Col xs={2}>
            <div className="group">
              <label>Cidade</label>
              <input type="text" />
            </div>
          </Col>
          <Col xs={1}>
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
          <Col xs={3}>
            <div className="group">
              <label>Login</label>
              <input type="text" />
            </div>
          </Col>
          <Col xs={3}>
            <div className="group">
              <label>Senha</label>
              <input type="text" />
            </div>
          </Col>
          <Col xs={3}>
            <div className="group">
              <label>Confirmar Senha</label>
              <input type="text" />
            </div>
          </Col>
        </Row>
        <MarginFooter>
          <FormSubmit>concluir compra e prosseguir com terapia</FormSubmit>
        </MarginFooter>
      </Form>
    </Grid>
  );
}

CheckoutSignin.propTypes = {

};

export default CheckoutSignin;
