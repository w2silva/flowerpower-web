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

const Wrapper = styled.div`
  background-image: url(${boxAgendarConsult});
  background-origin: content-box;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 100% auto;
  margin: 0px -100px 100px 0px;
  height: 250px;
  
  .content {
    color: white;
    padding: 100px 120px 10px 30px;
    
    h2 {
      margin: 0px 0px 20px 0px;
      text-align: center;
    }
  }
`;

function Schedule() {
  return (
    <div>
      <Grid>
        <Wrapper>
          <div className="content">
            <h2>Agende uma Consulta</h2>
            <Row>
              <Col xs={8}>
                <span>Nosso sistema foi desenvolvido com extrema expertise da área de conhecimentos de casos práticos, mas se houver maiores dúvidas, pergunte a um terapeuta floral e <Link to='schedule'>agende sua consulta hoje mesmo, clicando no botão</Link></span>
              </Col>
              <Col xs={4}>
                <Button to='schedule'></Button>
              </Col>
            </Row>
          </div>
        </Wrapper>
      </Grid>
    </div>
  );
}

Schedule.propTypes = {

};

export default Schedule;
