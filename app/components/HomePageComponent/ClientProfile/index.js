/**
*
* ClientProfile
*
*/

import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-styled-flexboxgrid'
import Profiles from './Profiles'
import H2 from 'components/H2';
import bgQuiz from 'images/bg-quiz.png';

const ClientProfileWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  background-image: url(${bgQuiz});
  background-size: 100% 100%;
  background-position: center center;
  background-repeat: no-repeat;
  color: white;
  padding: 50px 0px;
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
    <ClientProfileWrapper>
      <Grid>
        <ClientProfileTitle>Terapia Floral Allevius</ClientProfileTitle>
        <ClientProfileIntro>Por favor, selecione para quem é esse floral:</ClientProfileIntro>
        <Profiles/>
        <ClientProfileSpan>Após selecionar a opção, você será direcionado ao nosso questionário, a fim de criar sua terapia exclusiva e instantânea<br />terapia exclusiva, lorem ipsum dollor amet sit lorem ipsum.</ClientProfileSpan>
      </Grid>
    </ClientProfileWrapper>
  );
}

ClientProfile.propTypes = {

};

export default ClientProfile;
