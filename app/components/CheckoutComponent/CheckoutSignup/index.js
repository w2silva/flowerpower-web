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

const Title = styled.div`
  text-transform: uppercase;
  margin-bottom: 10px;
  margin-top: 10px;
  font-size: 1.3em;

`;

const CleaveLabel = styled.div`
  font-size: 1.3em;
  margin-bottom: 10px;
`

export class CheckoutSignup extends React.PureComponent {
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
      <Grid>
        <Title>dados pessoais</Title>
        <Form>
          <Row>
            <Col xs={12} sm={12} md={6} lg={6}>
              <div className="group">
                <CleaveLabel>Nome Completo:</CleaveLabel>
                <Cleave
                  value={this.state.name}
                  onChange={this.handleChange('name')}
                  key="name"
                  options={{ blocks:[99999], delimiter: '', uppercase: true }}
                  style={input}
                  uppercase={true}
                />
              </div>
            </Col>
            <Col xs={12} sm={12} md={3} lg={3}>
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
            <Col xs={12} sm={12} md={3} lg={3}>
              <CleaveLabel>Telefone:</CleaveLabel>
              <Cleave
                placeholder="XX XXXXX XXXX"
                value={this.state.telephone}
                onChange={this.handleChange('telephone')}
                style={input}
                key="telephone"
              />
            </Col>

            <Col xs={12} sm={12} md={6} lg={6}>
              <div className="group">
                <CleaveLabel>Endereço:</CleaveLabel>
                <Cleave
                  value={this.state.streetName}
                  onChange={this.handleChange('streetName')}
                  key="streetName"
                  options={{ blocks:[99999], delimiter: '', uppercase: true }}
                  style={input}
                  uppercase={true}
                />
              </div>
            </Col>
            <Col xs={12} sm={12} md={2} lg={2}>
              <div className="group">
                <CleaveLabel>Número:</CleaveLabel>
                <Cleave
                  options={{ numericOnly: true }}
                  value={this.state.streetNumber}
                  onChange={this.handleChange('streetNumber')}
                  key="streetNumber"
                  style={input}
                />
              </div>
            </Col>
            <Col xs={12} sm={12} md={4} lg={4}>
              <div className="group">
                <CleaveLabel>Complemento:</CleaveLabel>
                <Cleave
                  value={this.state.complement}
                  onChange={this.handleChange('complement')}
                  key="complement"
                  options={{ blocks:[99999], delimiter: '', uppercase: true }}
                  style={input}
                  uppercase={true}
                />
              </div>
            </Col>
            <Col xs={12} sm={12} md={2} lg={2}>
              <CleaveLabel>CEP de Envio:</CleaveLabel>
              <Cleave
                placeholder="XXXXX-XXX"
                value={this.state.postalCode}
                options={{ delimiter: '·', blocks: [5, 3] }}
                onChange={this.handleChange('postalCode')}
                style={input}
                key="postalCode"
              />
            </Col>
            <Col xs={12} sm={12} md={6} lg={6}>
              <div className="group">
                <CleaveLabel>Cidade:</CleaveLabel>
                <Cleave
                  value={this.state.city}
                  onChange={this.handleChange('city')}
                  key="city"
                  options={{ blocks:[99999], delimiter: '', uppercase: true }}
                  style={input}
                  uppercase={true}
                />
              </div>
            </Col>
            <Col xs={12} sm={12} md={4} lg={4}>
              <div className="group">
                <CleaveLabel>UF:</CleaveLabel>
                <Cleave
                  value={this.state.state}
                  onChange={this.handleChange('state')}
                  key="state"
                  options={{ blocks:[99999], delimiter: '', uppercase: true }}
                  style={input}
                  uppercase={true}
                />
              </div>
            </Col>
          </Row>
        </Form>
        <Title>login e senha</Title>
        <Form>
          <Row>
            <Col xs={12} sm={12} md={4} lg={4}>
              <div className="group">
                <CleaveLabel>Login:</CleaveLabel>
                <Cleave
                  value={this.state.login}
                  onChange={this.handleChange('login')}
                  key="login"
                  options={{ blocks:[99999], delimiter: '', uppercase: true }}
                  style={input}
                  uppercase={true}
                />
              </div>
            </Col>
            <Col xs={12} sm={12} md={4} lg={4}>
              <div className="group">
                <CleaveLabel>Senha:</CleaveLabel>
                <input
                  value={this.state.password}
                  onChange={this.handleChange('password')}
                  type="password"
                  style={input}
                />
              </div>
            </Col>
            <Col xs={12} sm={12} md={4} lg={4}>
              <div className="group">
                <CleaveLabel>Confirmar Senha:</CleaveLabel>
                <input
                  value={this.state.confirmPassword}
                  onChange={this.handleChange('confirmPassword')}
                  type="password"
                  style={input}
                />
              </div>
            </Col>
          </Row>
        </Form>
      </Grid>
    );
  }
}

CheckoutSignup.propTypes = {

};

export default CheckoutSignup;
