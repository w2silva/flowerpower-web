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

  handleClick = (title) => () => {
    let to;
    if (title === 'Description') {
      to = this.Description
    } else if (title === 'Top') {
      to = this.Top
    } else if (title === 'Therapy') {
      to = this.Therapy
    } else if (title === 'Biography') {
      to = this.Biography
    }

    this.props.goTo('/');
    scrollToComponent(to, { offset: 0, align: 'top', duration: 800, ease:'inExpo'})
  }

  render () {
    return (
      <div>
        <Helmet>
          <title>Plans</title>
          <meta name="description" content="Description of Plans" />
        </Helmet>
        <Header button={false} handleClick={this.handleClick}/>
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
