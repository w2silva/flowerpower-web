/**
*
* ClientProfile
*
*/

import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-styled-flexboxgrid'
import NewProfiles from 'components/NewProfiles'
import H2 from 'components/H2';
import bgQuiz from 'images/bg-quiz.png';

const ClientProfileWrapper = styled.div`
  position: relative;
  width: 100%;
  background-image: url(${bgQuiz});
  height: 500px;
  background-size: 100% 100%;
  background-position: center center;
  background-repeat: no-repeat;
  color: white;
  padding: 70px 0px;
  margin: 0px 0px 5em 0px;
  text-align: center;
`;

const ClientProfileTitle = styled.h2`
  margin: 0px 0px 20px 0px;
  padding: 0px 0px;
  color: white;
  font-size: 2.8em;
  font-weight: 400;
`;

const ClientProfileIntro = styled.div`
  margin: 0px 0px 30px 0px;
  padding: 0px 0px;
  color: white;
  font-size: 1.4em;
  font-weight: 300;
`;

const ClientProfileSpan = styled.div`
  margin: 30px 0px 0px 0px;
  padding: 0px 0px;
  color: white;
  font-size: 1em;
  font-weight: 300;
`;

function ClientProfile() {
  return (
    <ClientProfileWrapper id="therapy">
      <Grid>
        <ClientProfileTitle>Terapia Floral Allevius</ClientProfileTitle>
        <ClientProfileIntro>Por favor, selecione para quem é esse floral:</ClientProfileIntro>
        <NewProfiles color={'white'} to={'/quiz'}/>
        <ClientProfileSpan>Após selecionar a opção, você será direcionado ao nosso questionário, a fim de criar sua terapia exclusiva e instantânea.</ClientProfileSpan>
      </Grid>
    </ClientProfileWrapper>
  );
}

ClientProfile.propTypes = {

};

export default ClientProfile;
