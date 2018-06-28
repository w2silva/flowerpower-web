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

const ProfilesWrapper = styled.div`
  margin: 10px 0 5em 0;
`;

function Profiles() {
  return (
    <ProfilesWrapper>
      <Row middle="xs" center="xs">
        <Col>
          <Profile src={iconeHumanos} title='Para mim ou parente'/>
        </Col>
        <Col>
          <Profile src={iconeAnimals} title='Para meu cão ou gato'/>
        </Col>
      </Row>
    </ProfilesWrapper>
  );
}

Profiles.propTypes = {

};

export default Profiles;
