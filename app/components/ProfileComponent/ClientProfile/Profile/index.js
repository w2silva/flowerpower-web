/**
*
* Profile
*
*/

import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-styled-flexboxgrid'

const ProfileWrapper = styled.button`
  padding: 0 30px;
  cursor:pointer;
`;

const ProfileImage = styled.img`
  max-width: 160px;
  padding: 10px 0;
`;

const ProfileTitle = styled.div`
  font-size: 1.5em;
`;

function Profile(props) {
  return (
    <ProfileWrapper onClick={props.getQuizzes(props.profileType)}>
      <Row middle="xs" center="xs">
        <Col>
          <ProfileImage src={props.src} />
          <ProfileTitle>{props.title}</ProfileTitle>
        </Col>
      </Row>
    </ProfileWrapper>
  );
}

Profile.propTypes = {

};

export default Profile;
