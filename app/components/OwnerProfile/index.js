/**
*
* OwnerProfile
*
*/

import React from 'react';
import styled, {ThemeProvider} from 'styled-components';
import { Grid, Row, Col } from 'react-styled-flexboxgrid'
import H2 from 'components/H2';
import Arrow from 'react-icons/lib/io/android-arrow-forward';
import { Link } from 'react-router-dom'
import { AwesomeButton } from 'react-awesome-button';

const Img = styled.img`
  background-color: #779ccb;
  border-radius: 100%;
  padding: 12em;
  width: 412px;
  height: 412px;
  opacity: 0.5;
`;

const OwnerProfileWrapper = styled.div`
  margin-bottom: 30px;
  line-height: 2.0;
`;

const ImgWrapper = styled.div`
  text-align: center
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

function OwnerProfile(props) {
  return (
    <Grid id="biography">
      <Row middle="xs" between="xs">
        <Col xs={12} sm={12} md={6} lg={6}>
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
          {props.button?
            <Link to="/about">
              <AwesomeButton type="secondary">CONHEÇA MAIS SOBRE MIM <Arrow/></AwesomeButton>
              {/*<OwnerProfileButton href="/about">conheça mais sobre mim <Arrow/></OwnerProfileButton>*/}
            </Link>
            :
            ''
          }
        </Col>
        <Col xs={12} sm={12} md={6} lg={6}>
          <Row center="xs">
            <Col xs={12}>
              <ImgWrapper>
                <Img />
              </ImgWrapper>
            </Col>
          </Row>
        </Col>
      </Row>
    </Grid>
  );
}

OwnerProfile.propTypes = {

};

export default OwnerProfile;
