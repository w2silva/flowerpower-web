/**
*
* ClientProfile
*
*/

import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-styled-flexboxgrid'
import Profile from './Profile'
import iconeHumanos from 'images/icone-humanos.png';
import iconeAnimals from 'images/icone-animais.png';
import NewProfiles from 'components/NewProfiles'

const ClientProfileWrapper = styled.div`
  position: relative;
  width: 100%;
  color: #333;
  padding: 50px 0px;
  text-align: center;
`;

const ClientProfileIntro = styled.div`
  margin: 0px 0px 30px 0px;
  padding: 0px 0px;
  font-size: 1.4em;
  font-weight: 500;
`;

const ProfilesWrapper = styled.div`
  margin: 10px 0 0 0;
`;

function ClientProfile(props) {
  return (
    <ClientProfileWrapper>
      <Grid>
        {/* <ClientProfileIntro>Você ainda possui créditos para realizar <strong style={{ color: `purple` }}>X terapias</strong><br />selecione o novo perfil</ClientProfileIntro> */}
        <ClientProfileIntro>Selecione o tipo de perfil que você deseja tratar nessa nova terapia</ClientProfileIntro>
        <NewProfiles color={'black'} to={'/quiz'}/>
        {/*<ProfilesWrapper>
          <Row middle="xs" center="xs">
            <Col>
              <Profile src={iconeHumanos} getQuizzes={props.getQuizzes} title='Para mim ou parente' profileType='human'/>
            </Col>
            <Col>
              <Profile src={iconeAnimals} getQuizzes={props.getQuizzes} title='Para meu cão ou gato' profileType='pet'/>
            </Col>
          </Row>
        </ProfilesWrapper>*/}
      </Grid>
    </ClientProfileWrapper>
  );
}

ClientProfile.propTypes = {

};

export default ClientProfile;
