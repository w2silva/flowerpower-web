/**
*
* BiographyComponent
*
*/

import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { Grid, Row, Col } from 'react-styled-flexboxgrid'
import Header from 'components/Header'
import Footer from 'components/Footer'
import Schedule from 'components/Schedule'
import imgLavandaHome from 'images/img-lavanda-home.jpg';
import H2 from 'components/H2';
import OwnerProfile from 'components/OwnerProfile'

const Img = styled.img.attrs({
  src: 'src'
})`
  max-width: 100%;
`;

function BiographyComponent() {
  return (
    <div>
      <Helmet>
        <title>Biografia</title>
        <meta name="description" content="Description of Plans" />
      </Helmet>
      <Header/>
      <OwnerProfile button={false}/>
      <Schedule/>
      <Footer/>
    </div>
  );
}

BiographyComponent.propTypes = {

};

export default BiographyComponent;
