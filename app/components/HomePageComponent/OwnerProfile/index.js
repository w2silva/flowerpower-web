/**
*
* OwnerProfile
*
*/

import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-styled-flexboxgrid'
import H2 from 'components/H2';
import Button from 'components/Button';

const Img = styled.img.attrs({
  src: 'src'
})`
  background-color: #779ccb;
  border-radius: 100%;
  padding: 13em;
`;

function OwnerProfile() {
  return (
    <div>
      <Grid>
        <Row middle="xs">
          <Col xs={6}>
            <H2>Quem é Patrícia ?</H2>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in justo ullamcorper, sollicitudin turpis dapibus, hendrerit tortor. Morbi tincidunt non sapien nec pretium. Donec elementum tristique consequat. Cras ut orci at felis accumsan ullamcorper non quis risus. Ut at ex mi. Aenean ac varius elit, eu congue dolor. Praesent elit purus, elementum nec molestie nec, molestie ut sapien. Nulla consequat justo in volutpat tincidunt. Vestibulum vitae consequat tortor.</span>
            <br />
            <br />
            <span>Mauris aliquam justo dolor, ut pulvinar nulla pellentesque nec. Praesent dapibus lorem eros, ut bibendum elit sagittis vel.</span>
            <br />
            <br />
            <strong>Duis justo odio, blandit quis augue ac, faucibus faucibus enim. Nulla facilisi.</strong>
            <Button to='/about'></Button>
          </Col>
          <Col xs={6}>
            <Img />
          </Col>
        </Row>
      </Grid>
    </div>
  );
}

OwnerProfile.propTypes = {

};

export default OwnerProfile;
