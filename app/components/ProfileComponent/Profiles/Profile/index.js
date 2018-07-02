/**
*
* Description
*
*/

import React from 'react';
import styled from 'styled-components';
import imageProfile from 'images/profile.jpg';

const ProfileWrapper = styled.div`
  text-align: center;
  max-width: 90px;
`;

const ProfileImg = styled.img`
  max-width: 80%;
  border-radius: 100%;
  border: solid 1px #ccc;
`;

const ProfilesTitle = styled.div`
  font-weight: bold;
`;

const ProfilesName = styled.a`

`;

function Profile() {
  return (
    <ProfileWrapper>
      <ProfileImg src={imageProfile} />
      <ProfilesTitle>Walace Silva</ProfilesTitle>
      <ProfilesName>Meu Perfil</ProfilesName>
    </ProfileWrapper>
  );
}

Profile.propTypes = {

};

export default Profile;
