/**
*
* CheckoutComponent
*
*/

import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-styled-flexboxgrid'
import Form from 'components/Form';

function CheckoutPaymentCreditCard(props) {

  return (
    <Form>
      <Row>
        <Col xs={12} sm={12} md={4} lg={4}>
          <div className="group">
            <label>Número do Cartão</label>
            <input type="text" />
          </div>
        </Col>
        <Col xs={12} sm={12} md={2} lg={2}>
          <div className="group">
            <label>CVV</label>
            <input type="text" />
          </div>
        </Col>
        <Col xs={12} sm={12} md={3} lg={3}>
          <div className="group">
            <label>CEP</label>
            <input type="text" />
          </div>
        </Col>
      </Row>
    </Form>
  );
}

CheckoutPaymentCreditCard.propTypes = {

};

export default CheckoutPaymentCreditCard;
