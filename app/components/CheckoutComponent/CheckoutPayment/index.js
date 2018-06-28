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

function CheckoutPayment() {
  return (
    <Grid>
      <CheckoutPaymentWrapper>
        <CheckoutPaymentTitle>pagamento</CheckoutPaymentTitle>
        <Row middle="xs">
          <Col xs={3}>
            <Row middle="xs">
              <Col xs={2}>
                <input type="radio" />
              </Col>
              <Col xs={10}>
                <div>Cartão de Crédito</div>
                <strong>Juros de 1,99 A.M.</strong>
              </Col>
            </Row>
          </Col>
          <Col xs={3}>
            <Row middle="xs">
              <Col xs={2}>
                <input type="radio" />
              </Col>
              <Col xs={10}>
                <div>Transferencia Online</div>
                <div>&nbsp;</div>
              </Col>
            </Row>
          </Col>
          <Col xs={6}>
            <Row middle="xs">
              <Col xs={2}>
                <input type="radio" />
              </Col>
              <Col xs={10}>
                <div>Boleto Bancário</div>
                <span>Siga o passo a passo. No final do processo de compra o Boleto estará disponível para impressão.</span>
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
