/**
*
* CheckoutComponent
*
*/

import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-styled-flexboxgrid'
import Form from 'components/Form';

function CheckoutPaymentBoleto(props) {

  return (
    <Form>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
          <div className="group">
            <label>CPF</label>
            <input type="text" />
          </div>
        </Col>
      </Row>
    </Form>
  );
}

CheckoutPaymentBoleto.propTypes = {

};

export default CheckoutPaymentBoleto;
