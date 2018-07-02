/**
*
* Description
*
*/

import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-styled-flexboxgrid'
import Profile from './Profile';

const ProfilesWrapper = styled.div`
  margin-bottom: 30px;
`;

const ProfilesIntro = styled.div`
  text-align: center;
  margin-bottom: 50px;
`;

function Profiles() {
  var profiles = [];
  for (var i = 0; i < 6; i++) {
    profiles.push(<Col><Profile /></Col>);
  }

  return (
    <ProfilesWrapper>
      <Grid>
        <ProfilesIntro>This is an incomplete list of awesome things built with styled-components. If you have something to share, please add it to the awesome-styled-components repo on GitHub and it will automatically show up here!</ProfilesIntro>
      </Grid>
      <Grid fluid={true}>
        <Row middle="xs" center="xs">{profiles}</Row>
      </Grid>
    </ProfilesWrapper>
  );
}

Profiles.propTypes = {

};

export default Profiles;
