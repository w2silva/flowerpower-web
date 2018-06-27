/**
*
* Profiles
*
*/

import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-styled-flexboxgrid'
import Profile from './Profile'
import iconeHumanos from 'images/icone-humanos.png';
import iconeAnimals from 'images/icone-animais.png';

const Wrapper = styled.div`
  margin: 10px 0px;
`;

function Profiles() {
  return (
    <Wrapper>
      <Row>
        <Col xs={6}>
          <Profile src={iconeHumanos} title='Para mim ou parente'/>
        </Col>
        <Col xs={6}>
          <Profile src={iconeAnimals} title='Para meu cão ou gato'/>
        </Col>
      </Row>
    </Wrapper>
  );
}

Profiles.propTypes = {

};

export default Profiles;
