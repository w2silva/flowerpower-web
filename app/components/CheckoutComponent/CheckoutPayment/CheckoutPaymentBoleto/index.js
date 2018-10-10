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
  constructor (props) {
    super(props);
    this.state = { }
  }

  handleChange = (name) => (event) => {
    this.setState({
      [name]: event.target.value,
    });
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
          <Col xs={12} sm={12} md={12} lg={12}>
            <div className="group">
              <CleaveLabel>CPF:</CleaveLabel>
              <Cleave
                options={{ blocks: [3, 3, 3, 2], delimiters: ['.', '.', '-'], numericOnly: true }}
                value={this.state.CPF}
                onChange={this.handleChange('CPF')}
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
