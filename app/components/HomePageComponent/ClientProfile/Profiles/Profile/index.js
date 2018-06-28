/**
*
* Profile
*
*/

import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-styled-flexboxgrid'
import { Link } from 'react-router-dom';

const ProfileWrapper = styled.div`
  padding: 0 30px;
`;

const ProfileImage = styled.img`
  max-width: 160px;
  padding: 10px 0;
`;

const ProfileTitle = styled.div`
  color: white;
  font-size: 1.1em;
`;

function Profile(props) {
  return (
    <ProfileWrapper>
      <Row middle="xs" center="xs">
        <Col>
          <Link to='/quiz'>
            <ProfileImage src={props.src} />
            <ProfileTitle>{props.title}</ProfileTitle>
          </Link>
        </Col>
      </Row>      
    </ProfileWrapper>
  );
}

Profile.propTypes = {

};

export default Profile;
