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

  updateClient = (name) => (event) => {
    this.props.updateClient({
      ...this.props.client,
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

    const isRegistered = this.props.client.user;

    return (
      <Grid>
        <Title>dados pessoais</Title>
        <Form>
          <Row>
            <Col xs={12} sm={12} md={6} lg={6}>
              <div className="group">
                <CleaveLabel>Nome Completo:</CleaveLabel>
                <Cleave
                  value={this.props.client.name}
                  onChange={this.updateClient('name')}
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
                  value={this.props.client.taxDocumentValue}
                  onChange={this.updateClient('taxDocumentValue')}
                  key="CPF"
                  style={input}
                />
              </div>
            </Col>
            <Col xs={12} sm={12} md={3} lg={3}>
              <CleaveLabel>Telefone:</CleaveLabel>
              <Cleave
                placeholder="XX XXXXX XXXX"
                value={this.props.client.phone}
                onChange={this.updateClient('phone')}
                style={input}
                key="telephone"
              />
            </Col>

            <Col xs={12} sm={12} md={6} lg={6}>
              <div className="group">
                <CleaveLabel>Endereço:</CleaveLabel>
                <Cleave
                  value={this.props.client.street}
                  onChange={this.updateClient('street')}
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
                  value={this.props.client.streetNumber}
                  onChange={this.updateClient('streetNumber')}
                  key="streetNumber"
                  style={input}
                />
              </div>
            </Col>
            <Col xs={12} sm={12} md={4} lg={4}>
              <div className="group">
                <CleaveLabel>Complemento:</CleaveLabel>
                <Cleave
                  value={this.props.client.complement}
                  onChange={this.updateClient('complement')}
                  key="complement"
                  options={{ blocks:[99999], delimiter: '', uppercase: true }}
                  style={input}
                  uppercase={true}
                />
              </div>
            </Col>
            <Col xs={12} sm={12} md={2} lg={2}>
              <CleaveLabel>Bairro:</CleaveLabel>
              <Cleave
                value={this.props.client.district}
                options={{ blocks:[99999], delimiter: '', uppercase: true }}
                onChange={this.updateClient('district')}
                style={input}
                key="postalCode"
              />
            </Col>
            <Col xs={12} sm={12} md={2} lg={2}>
              <CleaveLabel>CEP de Envio:</CleaveLabel>
              <Cleave
                placeholder="XXXXX-XXX"
                value={this.props.client.postalCode}
                options={{ delimiter: '·', blocks: [5, 3] }}
                onChange={this.updateClient('postalCode')}
                style={input}
                key="postalCode"
              />
            </Col>
            <Col xs={12} sm={12} md={4} lg={4}>
              <div className="group">
                <CleaveLabel>Cidade:</CleaveLabel>
                <Cleave
                  value={this.props.client.city}
                  onChange={this.updateClient('city')}
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
                  value={this.props.client.state}
                  onChange={this.updateClient('state')}
                  key="state"
                  options={{ blocks:[99999], delimiter: '', uppercase: true }}
                  style={input}
                  uppercase={true}
                />
              </div>
            </Col>
          </Row>
        </Form>
        <Title>login</Title>
        <Form>
          { isRegistered &&
            <Row>
              <Col xs={12} sm={12} md={12} lg={12}>
                <div className="group">
                  <CleaveLabel>Email:</CleaveLabel>
                  <Cleave
                    disabled={true}
                    value={this.props.client.email}
                    onChange={this.updateClient('email')}
                    key="email"
                    options={{ blocks:[99999], delimiter: '', uppercase: true }}
                    style={input}
                    uppercase={true}
                  />
                </div>
              </Col>
            </Row>
          }
          { !isRegistered &&
            <Row>
              <Col xs={12} sm={12} md={4} lg={4}>
                <div className="group">
                  <CleaveLabel>Login:</CleaveLabel>
                  <Cleave
                    value={this.props.client.email}
                    onChange={this.updateClient('email')}
                    key="email"
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
                    value={this.props.client.password}
                    onChange={this.updateClient('password')}
                    type="password"
                    style={input}
                  />
                </div>
              </Col>
              <Col xs={12} sm={12} md={4} lg={4}>
                <div className="group">
                  <CleaveLabel>Confirmar Senha:</CleaveLabel>
                  <input
                    value={this.props.client.confirmPassword}
                    onChange={this.updateClient('confirmPassword')}
                    type="password"
                    style={input}
                  />
                </div>
              </Col>
            </Row>
          }
        </Form>
      </Grid>
    );
  }
}

CheckoutSignup.propTypes = {

};

export default CheckoutSignup;
