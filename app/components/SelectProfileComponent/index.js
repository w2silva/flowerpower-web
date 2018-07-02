/**
*
* SelectProfileComponent
*
*/

import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import Header from 'components/Header'
import Footer from 'components/Footer'
import H2 from 'components/H2'
import Profiles from './Profiles'
import ClientProfile from './ClientProfile'
import Books from './Books'
import Schedule from './Schedule'

function SelectProfileComponent() {
  return (
    <div>
      <Helmet>
        <title>Selecione o Plano</title>
        <meta name="description" content="Description of Plans" />
      </Helmet>
      <Header/>
      <H2 align="center">Selecione um perfil</H2>
      <Profiles />
      <ClientProfile />
      <Books />
      <Schedule />
      <Footer/>
    </div>
  );
}

SelectProfileComponent.propTypes = {

};

export default SelectProfileComponent;
