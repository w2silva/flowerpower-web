/**
*
* CheckoutComponent
*
*/

import React from 'react';
// import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import Header from 'components/Header'
import Footer from 'components/Footer'
import H2 from 'components/H2'
import CheckoutItems from './CheckoutItems'
import CheckoutPayment from './CheckoutPayment'
import CheckoutSignin from './CheckoutSignin'

function CheckoutComponent() {
  return (
    <div>
      <Helmet>
        <title>Quiz</title>
        <meta name="description" content="Description of Quiz" />
      </Helmet>
      <Header />
      <H2 align="center">Checkout</H2>
      <CheckoutItems />
      <CheckoutPayment />
      <CheckoutSignin />
      <Footer />
    </div>
  );
}

CheckoutComponent.propTypes = {

};

export default CheckoutComponent;
