/**
*
* ResultsComponent
*
*/

import React from 'react';
// import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import Header from 'components/Header'
import Footer from 'components/Footer'
import Profile from 'components/Profile'
import Download from './Download'
import Mailing from './Mailing'

function ResultsComponent() {
  return (
    <div>
      <Helmet>
        <title>Results</title>
        <meta name="description" content="Description of Results" />
      </Helmet>
      <Header/>
      <Profile/>
      <Download/>
      <Mailing/>
      <Footer/>
    </div>
  );
}

ResultsComponent.propTypes = {

};

export default ResultsComponent;
