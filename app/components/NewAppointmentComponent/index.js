/**
*
* NewAppointmentComponent
*
*/

import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { Grid, Row, Col } from 'react-styled-flexboxgrid'
import { AwesomeButton } from 'react-awesome-button';

// import 'moment-timezone';

import H2 from 'components/H2';
// import styled from 'styled-components';

const NewAppointmentWrapper = styled.div`
  margin-bottom: 5em;
`;

const NewAppointmentIntro = styled.div`
  margin-bottom: 6em;
  text-align: center;
  font-size: 20px
`;


class NewAppointmentComponent extends React.PureComponent {
  constructor() {
    super()
    this.state = {
      preselected: null
    }
  }

  preselect = (slot) => () => this.setState({ preselected: slot.id || slot })

  select = (slot, profile) => () => this.setState({ preselected: null }, () => this.props.appointSlot(slot, profile))

  render() {
    if (!this.props.slots) {
      return (
        <div>
          Carregando...
        </div>
      )
    }
    const slots = this.props.slots.map((s) => ({...s, start_time: moment(s.start_time), end_time: moment(s.end_time)}))
    slots.sort((a, b) => b.start_time.isAfter(a.start_time) ? -1 : 1)
    return (
      <div>
        <H2 align="center">Agendamento de consultas</H2>
        <NewAppointmentWrapper>
          <NewAppointmentIntro>Selecione a data que melhor se encaixa à sua disponibilidade</NewAppointmentIntro>
        </NewAppointmentWrapper>
        <Grid style={{width: '600px', textAlign: 'center'}}>
          { slots.map((s) => (
            <Row key={s.id} style={{backgroundColor: 'lightgrey', borderRadius: '15px', margin: '15px', padding: '20px', display: 'flex', alignItems: 'center'}}>
              <Col xs={6} md={6}>
                <div style={{fontSize: '4em'}}>{s.start_time.date()}</div>
                <div style={{fontSize: '1em'}}>{s.start_time.format('MMMM')}</div>
                <div style={{fontSize: '2em'}}>{s.start_time.format('hh:mm')}</div>
              </Col>
              <Col xs={6} md={6} style={{padding: '10px'}}>
                { s.id !== this.state.preselected && s.state === 'free' &&
                  <div>
                    <AwesomeButton
                      type="secondary"
                      action={this.preselect(s)}>
                      Selecionar essa data
                    </AwesomeButton>
                  </div>
                }
                { s.id !== this.state.preselected && s.state === 'busy' &&
                  <div>
                    <AwesomeButton
                      type="secondary"
                      disabled
                      action={this.preselect(s)}>
                      Indisponível
                    </AwesomeButton>
                  </div>
                }
                { s.id === this.state.preselected &&
                  <Row>
                    <Col xs={12}>
                      <Row>
                        <Col xs={12}>
                          <strong>Selecione o perfil que irá na consulta</strong>
                        </Col>
                      </Row>
                      { this.props.profiles.map((p) => (
                        <Row>
                          <Col xs={12}>
                            <AwesomeButton
                              key={p.id}
                              type="primary"
                              action={this.select(s, p)}>
                              {p.name.substring(0, 18)}{p.name.length > 18 ? '...' : ''}
                            </AwesomeButton>
                          </Col>
                        </Row>
                      ))}
                      <Row style={{marginTop: '20px'}}>
                        <Col xs={12}>
                          <strong>Fique atento!</strong> A consulta ocorrerá no endereço abaixo. Certifique-se que poderá fazer o deslocamento no dia agendado!<br/>
                          <em>Rua [THERAPY_ADDRESS]</em>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                }
              </Col>
            </Row>
          )) }
        </Grid>
      </div>
    );
  }
}

NewAppointmentComponent.propTypes = {

};

export default NewAppointmentComponent;
