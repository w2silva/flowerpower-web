/**
*
* NewProfiles
*
*/

import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-styled-flexboxgrid'
import Profile from './Profile'
import iconeHumanos from 'images/icone-humanos.png';
import iconeAnimals from 'images/icone-animais.png';

const NewProfilesWrapper = styled.div`
  margin: 10px 0 5em 0;
`;

function NewProfiles(props) {
  return (
    <Grid>
    <NewProfilesWrapper>
      <Row middle="xs" around="xs">
        <Col xs={3} sm={3} md={3} lg={3} />
        <Col xs={3} sm={3} md={3} lg={3} >
          <Profile
            src={iconeHumanos}
            title='Para amigo ou parente'
            target='human'
            to={props.to}
            color={props.color}
            selectProfile={props.selectProfile}
            selectedProfile={props.selectedProfile}
          />
        </Col>
        <Col xs={3} sm={3} md={3} lg={3} >
          <Profile
            src={iconeAnimals}
            title='Para meu cão ou gato'
            target='pet'
            to={props.to}
            color={props.color}
            selectProfile={props.selectProfile}
            selectedProfile={props.selectedProfile}
          />
        </Col>
        <Col xs={3} sm={3} md={3} lg={3} />
      </Row>
    </NewProfilesWrapper>
    </Grid>
  );
}

NewProfiles.propTypes = {

};

export default NewProfiles;
