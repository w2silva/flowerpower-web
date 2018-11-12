/**
*
* SlideBenefits
*
*/

import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-styled-flexboxgrid'
import moment from 'moment'

import Slide from './Slide'

import iconBenefit1 from 'images/icone-beneficio1.png';
import iconBenefit2 from 'images/icone-beneficio2.png';
import iconBenefit3 from 'images/icone-beneficio3.png';
import iconBenefit4 from 'images/icone-beneficio4.png';

const SlideBenefitsWrapper = styled.div`
  margin: 5em auto;
  width: 960px;
  text-align: center;
`;

export class SlideBenefits extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.state = {
      activeSlide: null,
    }
  }

  makeActive = (index) => () => {
    this.setState({
      activeSlide: index
    })
  }

  render() {
    if (!this.props.purchases) {
      return null
    }
    const pictures = [
      require('images/Icon2.png'),
      require('images/Icon3.png'),
      require('images/Icon4.png'),
      require('images/Icon5.png'),
      require('images/Icon6.png'),
      require('images/Icon7.png'),
      require('images/Icon8.png'),
      require('images/Icon9.png'),
      require('images/Icon10.png'),
      require('images/Icon11.png'),
      require('images/Icon12.png'),
      require('images/Icon13.png'),
      require('images/Icon14.png'),
      require('images/Icon15.png'),
      require('images/Icon16.png'),
      require('images/Icon17.png'),
      require('images/Icon18.png'),
      require('images/Icon19.png'),
      require('images/Icon20.png'),
      require('images/Icon21.png'),
      require('images/Icon22.png'),
      require('images/Icon23.png'),
      require('images/Icon24.png'),
      require('images/Icon25.png'),
      require('images/Icon28.png'),
      require('images/Icon29.png'),
      require('images/Icon30.png'),
      require('images/Icon31.png'),
    ]


    // REDEEMED AND TO BE REDEEMED ONLINE THERAPIES
    const allTherapies = this.props.purchases.reduce((acc, purchase) => acc.concat(purchase.bundle.therapies), [])
    const redeemedTherapies = this.props.purchases.reduce((acc, purchase) => acc.concat(purchase.redeems.therapies), [])
    const redeemedTherapiesDiagnoses = []
    const toBeRedeemedTherapies = []
    for (let i = 0; i < allTherapies.length; i++) {
      const item = {
        therapy: allTherapies[i].therapy,
        available: allTherapies[i].number_of_diagnoses
      }
      let found = false;
      for (let j = 0; j < toBeRedeemedTherapies.length && !found; j++) {
        if (toBeRedeemedTherapies[j].therapy.id === item.therapy.id) {
          found = true;
          toBeRedeemedTherapies[j].available += item.available;
        }
      }
      if (!found) {
        toBeRedeemedTherapies.push(item)
      }
    }
    for (let i = 0; i < redeemedTherapies.length; i++) {
      let found = false
      for (let j = toBeRedeemedTherapies.length - 1; j >= 0 && !found; j--) {
        if (toBeRedeemedTherapies[j].therapy.id === redeemedTherapies[i].therapy) {
          found = true
          toBeRedeemedTherapies[j].available -= redeemedTherapies[i].diagnoses.length;
          redeemedTherapiesDiagnoses.concat(redeemedTherapies[i].diagnoses)
        }
      }
    }

    // REDEEMED AND TO BE REDEEMED APPOINTMENTS
    const purchasedAppointments = this.props.purchases.reduce((acc, purchase) => acc + purchase.bundle.number_of_appointments, 0)
    const redeemedAppointments = this.props.purchases.reduce((acc, purchase) => { acc.push(purchase.redeems.appointments); return acc; }, [])
    const availableAppointments = purchasedAppointments - redeemedAppointments.length

    const purchasedAssets = this.props.purchases.reduce((acc, purchase) => acc.concat(purchase.bundle.assets), [])

    let slides = []

    console.log('toBeRedeemedTherapies', toBeRedeemedTherapies)
    console.log('redeemedTherapies', redeemedTherapies)
    console.log('this.props', this.props)
    for (let i = 0; i < toBeRedeemedTherapies.length; i++) {
      slides.push({
        key: toBeRedeemedTherapies[i].therapy.id,
        title: `Consulta Online ${toBeRedeemedTherapies[i].therapy.name}`,
        subtitle: `Disponível: ${toBeRedeemedTherapies[i].available}`,
        description: toBeRedeemedTherapies[i].therapy.description,
        icon: i < pictures.length ? pictures[i] : pictures[i % pictures.length],
        index: i,
        onClick: toBeRedeemedTherapies[i].available > 0 ? this.props.goToQuiz(toBeRedeemedTherapies[i].therapy) : null
      })
    }

    if (availableAppointments > 0) {
      slides.push({
        key: `appointments`,
        title: 'Sessão Presencial',
        subtitle: `Disponível: ${availableAppointments}`,
        icon: length < pictures.length ? pictures[length + 1] : pictures[length % pictures.length + 1],
        description: 'Agende uma sessão comigo para uma terapia mais aprofundada e personalizada',
        index: slides.length + 1,
      })
    }

    if (purchasedAssets.length > 0) {
      for (let i = 0; i < purchasedAssets.length; i++) {
        slides.push({
          key: purchasedAssets[i].id,
          title: `Ebook: ${purchasedAssets[i].name}`,
          subtitle: `Disponível: ∞`,
          icon: length < pictures.length ? pictures[length + 3] : pictures[length % pictures.length + 3],
          description: `Tenha acesso ao exclusivo e-book ${purchasedAssets[i].name}`,
          index: slides.length + 1,
          onClick: function() { window.open(purchasedAssets[i].provider_info.url, '_blank').focus();  }
        })
      }
    }

    for (let i = 0; i < redeemedTherapies.length; i++) {
      for (let j = 0; j < redeemedTherapies[i].diagnoses.length; j++) {
        if (redeemedTherapies[i].diagnoses[j].state === 'finished') {
          slides.push({
            key: redeemedTherapies[i].diagnoses[j].id,
            title: redeemedTherapies[i].diagnoses[j].therapy.name,
            subtitle: this.props.client.profiles.filter((p) => p._id === redeemedTherapies[i].diagnoses[j].profile)[0].name,
            description: `Diagnóstico concluído em ${moment(redeemedTherapies[i].diagnoses[j].finished_at).format('L')}`,
            icon: i < pictures.length ? pictures[i] : pictures[i % pictures.length],
            index: i,
            onClick: this.props.goToResults(redeemedTherapies[i].diagnoses[j])
          })
        } else {
          slides.push({
            key: redeemedTherapies[i].diagnoses[j].id,
            title: redeemedTherapies[i].diagnoses[j].therapy.name,
            subtitle: this.props.client.profiles.filter((p) => p._id === redeemedTherapies[i].diagnoses[j].profile)[0].name,
            description: `Continuar diagnóstico iniciado em ${moment(redeemedTherapies[i].diagnoses[j].created_at).format('L')}`,
            icon: i < pictures.length ? pictures[i] : pictures[i % pictures.length],
            index: i,
            onClick: this.props.goToResults(redeemedTherapies[i].diagnoses[j])
          })
        }
      }
    }

    // slides.push({
    //   title: 'Coaching Online',
    //   icon: length < pictures.length ? pictures[length + 2] : pictures[length % pictures.length + 2],
    //   description: 'Faça um coaching comigo online e descubra como lidar com medos, ansiedades, propósitos e crenças.',
    //   index: length + 2,
    // })

    return (
      <SlideBenefitsWrapper>
        <Grid>
          <Row>
            {slides.map((s) => (
              <Slide
                makeActive={this.makeActive}
                active={this.state.activeSlide === s.index}
                {...s}
              />
            ))}
          </Row>
        </Grid>
      </SlideBenefitsWrapper>
    );
  }
}

SlideBenefits.propTypes = {

};

export default SlideBenefits;
