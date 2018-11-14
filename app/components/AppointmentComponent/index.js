/**
*
* AppointmentComponent
*
*/

import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-styled-flexboxgrid'
import moment from 'moment'
import H2 from 'components/H2';

const AppointmentWrapper = styled.div`
  margin-bottom: 5em;
`;

const AppointmentIntro = styled.div`
  text-align: center;
  font-size: 20px
`;

const AppointmentNotes = styled.div`
  margin-bottom: 6em;
  text-align: center;
`;


class AppointmentComponent extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const profile = this.props.profiles.filter((p) => p._id === this.props.appointment.profile)[0]
    const date = this.props.appointment.slot.start_time ? moment(this.props.appointment.slot.start_time).format('LLL') : 'n/d'
    return (
      <Grid>
        <H2 align="center">Consulta agendada!</H2>
        <AppointmentWrapper>
          <AppointmentIntro>Visualize os dados da sua consulta abaixo</AppointmentIntro>
        </AppointmentWrapper>
        <Row style={{marginLeft: '20%', marginRight: '20%', marginBottom: '2em'}}>
          <Col xs={3} style={{textAlign: 'left', fontSize: '2em', fontWeight: 'bold'}}>
            Terapeuta:
          </Col>
          <Col xs={9} style={{textAlign: 'left', fontSize: '2em'}}>
            Patricia
          </Col>
        </Row>
        <Row style={{marginLeft: '20%', marginRight: '20%', marginBottom: '2em'}}>
          <Col xs={3} style={{textAlign: 'left', fontSize: '2em', fontWeight: 'bold'}}>
            Paciente:
          </Col>
          <Col xs={9} style={{textAlign: 'left', fontSize: '2em'}}>
            {profile.name}
          </Col>
        </Row>
        <Row style={{marginLeft: '20%', marginRight: '20%', marginBottom: '2em'}}>
          <Col xs={3} style={{textAlign: 'left', fontSize: '2em', fontWeight: 'bold'}}>
            Data:
          </Col>
          <Col xs={9} style={{textAlign: 'left', fontSize: '2em'}}>
            {date}
          </Col>
        </Row>
        <Row style={{marginLeft: '20%', marginRight: '20%', marginBottom: '2em'}}>
          <Col xs={3} style={{textAlign: 'left', fontSize: '2em', fontWeight: 'bold'}}>
            Local:
          </Col>
          <Col xs={9} style={{textAlign: 'left', fontSize: '2em'}}>
            Rua [THERAPY_ADDRESS]
          </Col>
        </Row>
        <AppointmentNotes>
          Caso deseje o adiamento da consulta, por favor entre em contato diretamente com suporte@alleviusflorais.com e peça o reagendamento.
        </AppointmentNotes>
      </Grid>
    );
  }
}

AppointmentComponent.propTypes = {

};

export default AppointmentComponent;
