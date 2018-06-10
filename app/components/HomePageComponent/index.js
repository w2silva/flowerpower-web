/**
*
* HomePageComponent
*
*/

import React from 'react';
// import styled from 'styled-components';
import Header from 'components/Header'
import Description from './Description'
import Schedule from './Schedule'
import ClientProfile from './ClientProfile'
import OwnerProfile from './OwnerProfile'
import Footer from 'components/Footer'

function HomePageComponent() {
  return (
    <div>
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
