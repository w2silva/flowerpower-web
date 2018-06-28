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
import OwnerProfile from './OwnerProfile'
import Footer from 'components/Footer'

function HomePageComponent() {
  return (
    <div>
      <Helmet>
        <title>Quiz</title>
        <meta name="description" content="Description of Quiz" />
      </Helmet>
      <Header button={true} />
      <Description />
      <Schedule />
      <ClientProfile />
      <OwnerProfile />
      <Schedule />
      <Footer />
    </div>
  );
}

HomePageComponent.propTypes = {

};

export default HomePageComponent;
