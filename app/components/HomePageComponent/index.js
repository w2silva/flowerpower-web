/**
*
* HomePageComponent
*
*/

import React from 'react';
// import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import Header from 'components/Header'
import Description from './Description'
import Schedule from 'components/Schedule'
import ClientProfile from './ClientProfile'
import OwnerProfile from 'components/OwnerProfile'
import Footer from 'components/Footer'
import scrollToComponent from 'react-scroll-to-component';



export class HomePageComponent extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render () {
    return (
      <div>
        <Helmet>
          <title>Quiz</title>
          <meta name="description" content="Description of Quiz" />
        </Helmet>
        <Description/>
        <Schedule />
        <ClientProfile />
        <OwnerProfile button/>
        <Schedule />
        <Footer />
      </div>
    );
  }
}

HomePageComponent.propTypes = {

};

export default HomePageComponent;
