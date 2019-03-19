/**
*
* CheckoutComponent
*
*/

import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-styled-flexboxgrid'
import Form from 'components/Form';
import Cleave from 'cleave.js/react';

const CleaveLabel = styled.div`
  font-size: 1.3em;
  margin-bottom: 10px;
`

export class CheckoutPaymentBoleto extends React.PureComponent {

  updateBoleto = (name) => (event) => {
    const value = event.target.value;
    this.props.updateBoleto({
      [name]: value
    })
  };

  render () {
    const input = {
      height: '50px',
      width: '100%',
      borderRadius: '10px',
      fontSize: '1.3em',
      paddingLeft: '20px',
    }
    return (
      <Form>
        <Row>
          <Col xs={6} sm={6} md={6} lg={6}>
            <div className="group">
              <CleaveLabel>CPF:</CleaveLabel>
              <Cleave
                options={{ blocks: [3, 3, 3, 2], delimiters: ['.', '.', '-'], numericOnly: true }}
                value={this.props.boleto.cpf}
                onChange={this.updateBoleto('cpf')}
                key="CPF"
                style={input}
              />
            </div>
          </Col>
          <Col xs={6} sm={6} md={6} lg={6}>
            <div className="group">
              <CleaveLabel>Data de nascimento:</CleaveLabel>
              <Cleave
                options={{ blocks: [3, 3, 3, 2], delimiters: ['.', '.', '-'], numericOnly: true }}
                value={this.props.boleto.birthdate}
                onChange={this.updateBoleto('birthdate')}
                key="CPF"
                style={input}
              />
            </div>
          </Col>
        </Row>
      </Form>
    );
  }
}

CheckoutPaymentBoleto.propTypes = {

};

export default CheckoutPaymentBoleto;
