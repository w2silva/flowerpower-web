/**
*
* CheckoutComponent
*
*/

import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-styled-flexboxgrid'

const CheckoutPaymentWrapper = styled.div`
  padding: 30px 0px;
  margin: 0 0 30px 0;
  border-bottom: solid 1px #eee;
`;

const CheckoutPaymentTitle = styled.div`
  text-transform: uppercase;
  margin-bottom: 10px;
`;

const CheckoutPaymentRadio = styled.input`
  position: relative;

  &:checked,
  &:not(:checked) {
    position: absolute;
    left: -9999px;
  }
  &:checked + label,
  &:not(:checked) + label {
    position: relative;
    display: inline-block;
    padding-left: 23px;
    cursor: pointer;
    line-height: 20px;
  }
  &:checked + label:before,
  &:not(:checked) + label:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 18px;
    height: 18px;
    border: 1px solid #ddd;
    border-radius: 100%;
    background: #fff;
  }
  &:checked + label:after,
  &:not(:checked) + label:after {
    position: absolute;
    content: '';
    width: 12px;
    height: 12px;
    background-color: #779ccb;
    top: 3px;
    left: 3px;
    border-radius: 100%;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
  }
  &:not(:checked) + label:after {
    opacity: 0;
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  &:checked + label:after {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
`;

function CheckoutPayment() {
  return (
    <Grid>
      <CheckoutPaymentWrapper>
        <CheckoutPaymentTitle>pagamento</CheckoutPaymentTitle>
        <Row middle="xs" between="xs">
          <Col xs={12} sm={12} md={4} lg={4}>
            <Row middle="xs">
              <Col xs={2}>
                <CheckoutPaymentRadio type="radio" />
                <label>&nbsp;</label>
              </Col>
              <Col xs={10}>
                <div>Cartão de Crédito</div>
                <div>&nbsp;</div>
              </Col>
            </Row>
          </Col>
          <Col xs={12} sm={12} md={4} lg={4}>
            <Row middle="xs">
              <Col xs={2}>
                <CheckoutPaymentRadio type="radio" />
                <label>&nbsp;</label>
              </Col>
              <Col xs={10}>
                <div>Transferencia Online</div>
                <div>&nbsp;</div>
              </Col>
            </Row>
          </Col>
          <Col xs={12} sm={12} md={4} lg={4}>
            <Row middle="xs">
              <Col xs={2}>
                <CheckoutPaymentRadio type="radio" />
                <label>&nbsp;</label>
              </Col>
              <Col xs={10}>
                <div>Boleto Bancário</div>
                <div>&nbsp;</div>
              </Col>
            </Row>
          </Col>
        </Row>
      </CheckoutPaymentWrapper>
    </Grid>
  );
}

CheckoutPayment.propTypes = {

};

export default CheckoutPayment;
