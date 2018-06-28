/**
*
* Schedule
*
*/

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import { Grid, Row, Col } from 'react-styled-flexboxgrid'
import Button from 'components/Button';
import boxAgendarConsult from 'images/box-agendar-consulta.png';

const ScheduleWrapper = styled.div`
  background-image: url(${boxAgendarConsult});
  background-origin: content-box;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 100% auto;
  margin: 0px -100px 100px 0px;
  height: 250px;
  font-weight: 300;
`;
  
const ScheduleContent = styled.div`
  color: white;
  padding: 100px 120px 10px 30px;
`;

const ScheduleTitle = styled.h2`
  margin: 0px 0px 20px 0px;
  text-align: center;
  font-weight: 500;
`;

const ScheduleLink = styled.a`
  color: white;
  font-weight: 700;

  &:hover {
    color: white;
  }
`;

const ScheduleButton = styled.a`
  width: 100%;
  display: block;
  background-color: #779ccb;
  color: white !important;
  border-radius: 50px;
  padding: 10px 15px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 600;
  font-size: .8em;
  box-shadow: 4px 4px 20px 0px #3336;
`;

function Schedule() {
  return (
    <Grid>
      <ScheduleWrapper>
        <ScheduleContent>
          <ScheduleTitle>Agende uma Consulta</ScheduleTitle>
          <Row middle="xs">
            <Col xs={8}>
              Nosso sistema foi desenvolvido com extrema expertise da área de conhecimentos de casos práticos, mas se houver maiores dúvidas, pergunte a um terapeuta floral e <ScheduleLink href="/quiz">agende sua consulta hoje mesmo, clicando no botão</ScheduleLink>
            </Col>
            <Col xs={4}>
              <ScheduleButton href="/quiz">agendar uma consulta</ScheduleButton>
            </Col>
          </Row>
        </ScheduleContent>
      </ScheduleWrapper>
    </Grid>
  );
}

Schedule.propTypes = {

};

export default Schedule;
