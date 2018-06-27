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

const Wrapper = styled.div`
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

  h2 {
    color: white;
  }
`;

function ClientProfile() {
  return (
    <Wrapper>
      <Grid>
        <H2 align="center">Terapia Floral Allevius</H2>
        <h4>Por favor, selecione para quem é esse floral:</h4>
        <Profiles/>
        <span>Após selecionar a opção, você será direcionado ao nosso questionário, a fim de criar sua terapia exclusiva e instantânea</span>
      </Grid>
    </Wrapper>
  );
}

ClientProfile.propTypes = {

};

export default ClientProfile;
