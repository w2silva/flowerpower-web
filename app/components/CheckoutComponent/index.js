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
import { AwesomeButton } from 'react-awesome-button';

const MarginFooter = styled.div`
  margin: 1em 0px 5em 0;
  text-align: center;
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
          <AwesomeButton type="secondary">concluir compra e prosseguir com terapia</AwesomeButton>
        </MarginFooter>
        <Footer />
      </div>
    );
  }
}

CheckoutComponent.propTypes = {

};

export default CheckoutComponent;
