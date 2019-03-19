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
  padding: 0px;
  text-align: center;
`;

const Button = styled.a`
  cursor: pointer;
`

const ProfileImage = styled.img`
  @media (max-width: 780px) {
    max-width: 100px;
  }
  @media (min-width: 780px) {
    max-width: 140px;
  }
  box-shadow: ${props => props.selected ? '0 3px 30px rgba(65,116,177,.6);' : ''}
  padding: 0px 0;
  border-radius: 50%;
`;

const ProfileTitle = styled.div`
  color: ${props => props.color};
  font-size: 1.1em;
`;

const Figure = styled.figure`
  background-color: transparent !important
`;

function Profile(props) {
  return (
    <ProfileWrapper>
      <Row middle="xs" center="xs">
        <Col style={{width: '100%'}}>
          <div className="container effect">
            <Figure className="effect-steve">
                {props.to ?
                  <Link to={props.to}>
                    <ProfileImage src={props.src} />
                  </Link>
                  :
                  <Button onClick={props.selectProfile(props.target)}>
                    <ProfileImage selected={props.selectedProfile === props.target} src={props.src} />
                  </Button>
                }
            </Figure>
          </div>
          <div style={{height: '100%'}} className="title">
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
