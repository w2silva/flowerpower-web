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
import Schedule from './Schedule'
import ClientProfile from './ClientProfile'
import OwnerProfile from './OwnerProfile'
import Footer from 'components/Footer'

function HomePageComponent() {
  return (
    <div>
      <Helmet>
        <title>Quiz</title>
        <meta name="description" content="Description of Quiz" />
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i" rel="stylesheet" />
      </Helmet>
      <Header button={true}/>
      <Description/>
      <Schedule/>
      <ClientProfile/>
      <OwnerProfile/>
      <Schedule/>
      <Footer/>
    </div>
  );
}

HomePageComponent.propTypes = {

};

export default HomePageComponent;
