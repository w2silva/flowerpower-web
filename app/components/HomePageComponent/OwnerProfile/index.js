/**
*
* OwnerProfile
*
*/

import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-styled-flexboxgrid'
import H2 from 'components/H2';

const Img = styled.img`
  background-color: #779ccb;
  border-radius: 100%;
  padding: 12em;
`;

const OwnerProfileWrapper = styled.div`
  margin-bottom: 30px;
`;

const OwnerProfileButton = styled.a`
  display: inline-block;
  background-color: #779ccb;
  color: white;
  border-radius: 50px;
  padding: 10px 25px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 600;
  font-size: .8em;
  box-shadow: 4px 4px 20px 0px #3336;
`;

function OwnerProfile() {
  return (
    <div>
      <Grid>
        <Row middle="xs" between="xs">
          <Col xs={6}>
            <H2>Quem é Patrícia ?</H2>
            <OwnerProfileWrapper>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in justo ullamcorper, sollicitudin turpis dapibus, hendrerit tortor. Morbi tincidunt non sapien nec pretium. Donec elementum tristique consequat. Cras ut orci at felis accumsan ullamcorper non quis risus. Ut at ex mi. Aenean ac varius elit, eu congue dolor.</span>
              <br />
              <br />
              <span>Mauris aliquam justo dolor, ut pulvinar nulla pellentesque nec. Praesent dapibus lorem eros, ut bibendum elit sagittis vel.</span>
              <br />
              <br />
              <strong>Duis justo odio, blandit quis augue ac, faucibus faucibus enim. Nulla facilisi.</strong>
            </OwnerProfileWrapper>
            <OwnerProfileButton href="/about">conheça mais sobre min</OwnerProfileButton>
          </Col>
          <Col>
            <Row center="xs">
              <Col xs={12}>
                <Img />
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    </div>
  );
}

OwnerProfile.propTypes = {

};

export default OwnerProfile;
