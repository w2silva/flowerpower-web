/**
*
* CheckoutComponent
*
*/

import React from 'react';
// import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

import Header from 'components/Header'
import Footer from 'components/Footer'
import H2 from 'components/H2'
import CheckoutItems from './CheckoutItems'
import CheckoutPayment from './CheckoutPayment'
import CheckoutSignup from './CheckoutSignup'

const MarginFooter = styled.div`
  margin: 1em 0px 5em 0;
  text-align: center;
`;

const FormSubmit = styled.button`
  display: inline-block;
  border: none;
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


export class CheckoutComponent extends React.PureComponent {

  constructor() {
    super()
    this.state = {
      payment: {

      },
      signup: {

      }
    }
  }

  updatePayment = (payment) => {
    console.log('payment', payment)
    this.setState({ payment })
  }

  updateSignup = () => {
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Quiz</title>
          <meta name="description" content="Description of Quiz" />
        </Helmet>
        <Header />
        <H2 align="center">Checkout</H2>
        <CheckoutItems bundle={this.props.bundle}/>
        <CheckoutPayment
          updatePayment={this.updatePayment}
          payment={this.state.payment}/>
        <CheckoutSignup
          updateSignup={this.updateSignup}
          />
        <MarginFooter>
          <FormSubmit>concluir compra e prosseguir com terapia</FormSubmit>
        </MarginFooter>
        <Footer />
      </div>
    );
  }
}

CheckoutComponent.propTypes = {

};

export default CheckoutComponent;
