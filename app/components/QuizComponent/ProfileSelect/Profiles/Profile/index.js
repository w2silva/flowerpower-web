/**
*
* Description
*
*/

import React from 'react';
import styled from 'styled-components';
import imageProfile from 'images/profile.jpg';
import { Link } from 'react-router-dom'
import { Grid, Row, Col } from 'react-styled-flexboxgrid'

import classNames from 'classnames';

const ProfileWrapper = styled.div`
  text-align: center;
  min-height: 200px;
`;

const ProfileImg = styled.img`
  max-width: 100px;
  border-radius: 100%;
  box-shadow: ${props => props.selected ? '0 3px 30px rgba(65,116,177,.6);' : ''}
`;

const Name = styled.div`
  font-size: 14;
  font-weight: 400
`

const Target = styled.div`
  font-size: 14
`

const ProfilesTitle = styled.div`
  font-weight: bold;
`;

const ProfilesName = styled.a`

`;

function Profile(props) {
  const { classes } = props;
  const target = props.profile && props.profile.main ? 'Meu Perfil' : '' + props.profile && props.profile.target === 'human' ? 'Amigo ou parente' : '' + props.profile && props.profile.target === 'pet' ? 'Meu Cão ou Gato' : ''
  return (
    <ProfileWrapper>
      <div className="container effect">
        <figure className="effect-steve">
          <a onClick={props.selectProfile(props.profile._id)}>
            <ProfileImg src={imageProfile} selected={props.profile._id === props.selectedProfile}/>
          </a>
        </figure>
      </div>
      <div className="title">
        <a
        >
          <Name>{props.profile.name}</Name>
          <Target>{target}</Target>
        </a>
      </div>
    </ProfileWrapper>
  );
}

Profile.propTypes = {

};

export default Profile;
