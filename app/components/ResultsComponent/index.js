/**
*
* ResultsComponent
*
*/

import React from 'react';
// import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import Footer from 'components/Footer'
// import Profile from 'components/Profile'
import Download from './Download'
import Mailing from './Mailing'

function ResultsComponent(props) {
  return (
    <div>
      <Helmet>
        <title>Results</title>
        <meta name="description" content="Description of Results" />
      </Helmet>
      {/* <Profile/> */}
      <Download diagnosis={props.diagnosis}/>
      <Mailing suppliers={props.suppliers} sendPrescription={props.sendPrescription}/>
      <Footer/>
    </div>
  );
}

ResultsComponent.propTypes = {

};

export default ResultsComponent;
