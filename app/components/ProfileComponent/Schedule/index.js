/**
*
* ClientProfile
*
*/

import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-styled-flexboxgrid'
import Form from 'components/Form';

const ScheduleWrapper = styled.div`
  position: relative;
  max-width: 900px;
  margin: 0px auto 5em auto;
  background-color: #efefef;
  border-radius: 3px;
  padding: 40px 20px;
`;

const ScheduleIntro = styled.div`
  font-size: 1.2em;
  font-weight: 500;
`;

const ScheduleButton = styled.a`
  width: 160px;
  display: block;
  margin: 0px auto;
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
    <Grid fluid={true}>
      <ScheduleWrapper>
        <Row middle="xs" around="xs">
          <Col xs={12} sm={12} md={4} lg={4}>
            <ScheduleIntro>Agende sua consultoria online ao vivo, selecione a melhor data e horário</ScheduleIntro>
          </Col>
          <Col xs={12} sm={12} md={4} lg={4}>
            <Form>
              <Row>
                <Col xs={6}>
                  <div className="group">
                    <label>Selecione a data</label>
                    <input type="text" />
                  </div>
                </Col>
                <Col xs={6}>
                  <div className="group">
                    <label>Escolha uma horário</label>
                    <input type="text" />
                  </div>
                </Col>
              </Row>
            </Form>
          </Col>
          <Col xs={12} sm={12} md lg>
            <ScheduleButton>agendar</ScheduleButton>
          </Col>
        </Row>
      </ScheduleWrapper>
    </Grid>
  );
}

Schedule.propTypes = {

};

export default Schedule;
