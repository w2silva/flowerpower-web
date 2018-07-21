/**
*
* ProfileSelect
*
*/

import React from 'react';
// import styled from 'styled-components';
import NewProfiles from 'components/NewProfiles';
import Profiles from './Profiles';
import H2 from 'components/H2'
import H5 from 'components/H5'
import { AwesomeButton } from 'react-awesome-button';
import styled from 'styled-components';

const ProfileMessage = styled.div`
  text-align: center;
  padding-bottom: 20px;
`

function ProfileSelect(props) {
  return (
    <div>
      <H2 align="center">Para quem é essa terapia?</H2>
      <Profiles
        selectProfile={props.selectProfile}
        me={props.me}
        selectedProfile={props.selectedProfile}
      />
      <H2 align="center">Crie um novo perfil</H2>
      <NewProfiles
        color={'black'}
        selectProfile={props.selectProfile}
        selectedProfile={props.selectedProfile}
      />
      {props.selectedProfileMessage ?
        <ProfileMessage>
          <H5>{props.selectedProfileMessage}</H5>
        </ProfileMessage>

        :
        ''
      }
      <div className="text-center">
        <AwesomeButton bubbles action={props.startTherapy}>Começar Terapia</AwesomeButton>
      </div>
    </div>
  );
}

ProfileSelect.propTypes = {

};

export default ProfileSelect;
