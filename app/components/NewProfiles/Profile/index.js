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
  text-align: center;
`;

const Button = styled.a`
  cursor: pointer;
`

const ProfileImage = styled.img`
  max-width: 140px;
  box-shadow: ${props => props.selected ? '0 3px 30px rgba(0,0,0,.8);' : ''}
  padding: 0px 0;
  border-radius: 50%;
`;

const ProfileTitle = styled.div`
  color: ${props => props.color};
  font-size: 1.1em;
`;

function Profile(props) {
  return (
    <ProfileWrapper>
      <Row middle="xs" center="xs">
        <Col>
          <div className="container effect">
            <figure className="effect-steve">
                {props.to ?
                  <Link to={props.to}>
                    <ProfileImage src={props.src} />
                  </Link>
                  :
                  <Button onClick={props.selectProfile(props.target)}>
                    <ProfileImage selected={props.selectedProfile === props.target} src={props.src} />
                  </Button>
                }
            </figure>
          </div>
          <div className="title">
            <a
            >
              <ProfileTitle color={props.color}>{props.title}</ProfileTitle>
            </a>
          </div>
        </Col>
      </Row>
    </ProfileWrapper>
  );
}

Profile.propTypes = {

};

export default Profile;
