/**
*
* PlansComponent
*
*/

import React from 'react';
import { Helmet } from 'react-helmet';
import Header from 'components/Header'
import Footer from 'components/Footer'

import scrollToComponent from 'react-scroll-to-component';
import MainContainer from './MainContainer'

export class PlansComponent extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render () {
    return (
      <div>
        <Helmet>
          <title>Plans</title>
          <meta name="description" content="Description of Plans" />
        </Helmet>
        <MainContainer
          currentDiagnosis={this.props.currentDiagnosis}
          bundles={this.props.bundles}
          bundleCheckout={this.props.bundleCheckout}/>
        <Footer/>
      </div>
    );
  }

}

PlansComponent.propTypes = {

};

export default PlansComponent;
