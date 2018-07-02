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
      <Grid>
        <Row middle="xs">
          <Col xs={12} sm={12} md={6} lg={6}>
            <H2>Patrícia Lorem</H2>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in justo ullamcorper, sollicitudin turpis dapibus, hendrerit tortor. Mauris aliquam justo dolor, ut pulvinar nulla pellentesque nec. Praesent dapibus lorem eros, ut bibendum elit sagittis vel.</span>
            <br />
            <br />
            <strong>Duis justo odio, blandit quis augue ac, faucibus faucibus enim. Nulla facilisi.</strong>
            <br />
            <br />
            <span>Morbi tincidunt non sapien nec pretium. Donec elementum tristique consequat. Cras ut orci at felis accumsan ullamcorper non quis risus.</span>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <Img src={imgLavandaHome} />
          </Col>
        </Row>
      </Grid>
      <Schedule/>
      <Footer/>
    </div>
  );
}

BiographyComponent.propTypes = {

};

export default BiographyComponent;
