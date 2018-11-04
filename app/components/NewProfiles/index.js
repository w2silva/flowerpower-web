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

const ProfileLeft = styled.div`
  @media (min-width: 780px) {
    margin-left: 200px
  }
`;

const ProfileRight = styled.div`
  @media (min-width: 780px) {
    margin-right: 200px
  }
`;

function NewProfiles(props) {
  return (
    <Grid style={{paddingRight: 0, paddingLeft: 0}}>
    <NewProfilesWrapper>
      <Row middle="xs" around="xs">
        <Col xs={6} sm={6} md={6} lg={6} >
          <ProfileLeft>
            <Profile
              src={iconeHumanos}
              title='Humanos (incluindo amigo e parente)'
              target='human'
              to={props.to}
              color={props.color}
              selectProfile={props.selectProfile}
              selectedProfile={props.selectedProfile}
            />
          </ProfileLeft>
        </Col>
        <Col xs={6} sm={6} md={6} lg={6} >
          <ProfileRight>
            <Profile
              src={iconeAnimals}
              title='Animais (cães e gatos)'
              target='pet'
              to={props.to}
              color={props.color}
              selectProfile={props.selectProfile}
              selectedProfile={props.selectedProfile}
            />
          </ProfileRight>
        </Col>
      </Row>
    </NewProfilesWrapper>
    </Grid>
  );
}

NewProfiles.propTypes = {

};

export default NewProfiles;
