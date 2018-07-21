/**
*
* Description
*
*/

import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-styled-flexboxgrid'
import Profile from './Profile';
import H2 from 'components/H2'

const ProfilesWrapper = styled.div`
  margin-bottom: 30px;
`;

const ProfilesIntro = styled.div`
  text-align: center;
  margin-bottom: 50px;
`;

function Profiles(props) {
  let width = 0
  const length = props.me.me && props.me.me.client.profiles.length
  if (length === 0) {
    width = 12
  } else if (length <= 4){
    width = 12/(props.me.me.client.profiles.length)
  } else if (length > 4) {
    width = 2
  }
  return (
    <ProfilesWrapper>
      <Grid>
        <ProfilesIntro>Selecione o perfil da pessoa ou animal que realizará a terapia</ProfilesIntro>
      </Grid>
      <Grid>
        <Row middle="xs" between="xs">
          {props.me.me.client.profiles.map((p) => (
            <Col xs={6} sm={6} md={width} lg={width} key={p._id}>
              <Profile
                selectedProfile={props.selectedProfile}
                selectProfile={props.selectProfile}
                profile={p}
              />
            </Col>
          ))}
        </Row>
      </Grid>
    </ProfilesWrapper>
  );
}

Profiles.propTypes = {

};

export default Profiles;
