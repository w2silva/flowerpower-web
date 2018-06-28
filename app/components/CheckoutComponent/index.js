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

function CheckoutComponent() {
  return (
    <div>
      <Helmet>
        <title>Quiz</title>
        <meta name="description" content="Description of Quiz" />
      </Helmet>
      <Header />
      <Footer />
    </div>
  );
}

CheckoutComponent.propTypes = {

};

export default CheckoutComponent;
