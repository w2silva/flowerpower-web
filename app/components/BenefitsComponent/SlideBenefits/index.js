/**
*
* SlideBenefits
*
*/

import React from 'react';
import styled from 'styled-components';
import Slide from './Slide'
import { Grid, Row, Col } from 'react-styled-flexboxgrid'

import iconBenefit1 from "images/icone-beneficio1.png";
import iconBenefit2 from "images/icone-beneficio2.png";
import iconBenefit3 from "images/icone-beneficio3.png";
import iconBenefit4 from "images/icone-beneficio4.png";

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
    if(!this.props.therapies) {
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

    console.log('herapy', this.props.therapies)
    let slides = []

    for (let i = 0; i < this.props.therapies.length; i ++) {
      slides.push({
        title: "Consulta Online " + this.props.therapies[i].name,
        description: this.props.therapies[i].description,
        icon: i < pictures.length ? pictures[i] : pictures[i % pictures.length],
        index: i,
      })
    }
    const length = slides.length
    slides.push({
      title: "Sessão Presencial",
      icon: length < pictures.length ? pictures[length + 1] : pictures[length % pictures.length + 1],
      description: "Agende uma sessão comigo para uma terapia mais aprofundada e personalizada",
      index: length + 1,
    },{
      title: "Coaching Online",
      icon: length < pictures.length ? pictures[length + 2] : pictures[length % pictures.length + 2],
      description: "Faça um coaching comigo online e descubra como lidar com medos, ansiedades, propósitos e crenças.",
      index: length + 2,
    },{
      title: "Download E-books",
      icon: length < pictures.length ? pictures[length + 3] : pictures[length % pictures.length + 3],
      description: "Tenha acesso ao exclusivo E-book: A arte dos Florais",
      index: length + 3,
    })

    console.log(this.state.activeSlide);
    return (
      <SlideBenefitsWrapper>
        <Grid>
          <Row>
            {slides.map((s) => (
              <Slide
                icon={s.icon}
                title={s.title}
                description={s.description}
                index={s.index}
                makeActive={this.makeActive}
                active={this.state.activeSlide === s.index}
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
