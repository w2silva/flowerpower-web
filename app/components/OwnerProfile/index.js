/**
*
* OwnerProfile
*
*/

import React from 'react';
import styled, {ThemeProvider} from 'styled-components';
import { Grid, Row, Col } from 'react-styled-flexboxgrid'
import H2 from 'components/H2';
import Arrow from 'react-icons/lib/io/android-arrow-forward';
import { Link } from 'react-router-dom'
import { AwesomeButton } from 'react-awesome-button';

import picture from 'images/patricia.jpg';

const Img = styled.img`
  background-color: #779ccb;
  border-radius: 100%;
  padding: 12em;
  @media (max-width: 780px) {
    width: 212px;
    height: 212px;
    margin-top: 30px;
  }
  @media (min-width: 780px) {
    width: 412px;
    height: 412px;
  }
  opacity: 0.9;
  background-image: url(${picture});
  background-position: center;
  background-size: cover;
`;

const OwnerProfileWrapper = styled.div`
  margin-bottom: 30px;
  line-height: 2.0;
  font-size: 1.3em;
`;

const ImgWrapper = styled.div`
  text-align: center
`;

const OwnerProfileButton = styled.a`
  display: inline-block;
  background-color: #779ccb;
  color: white;
  border-radius: 50px;
  padding: 10px 25px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 600;
  font-size: .8em;
  box-shadow: 4px 4px 20px 0px #3336;
`;

function OwnerProfile(props) {
  return (
    <Grid id="biography">
      <Row middle="xs" between="xs">
        <Col xs={12} sm={12} md={6} lg={6}>
          <H2>Quem é Patricia ?</H2>
          <OwnerProfileWrapper>
            <span>Patricia tem 31 anos, é formada em Engenharia pelo Instituto Mauá de Engenharia e em Coaching Profissional pelo Instituto Brasileiro de Coaching. Desde muito cedo começou a sentir interesse por assuntos relacionados à psicologia e à formação de hábitos, padrões de comportamento e pensamento humanos.</span>
            <br />
            <br />
            <span>Autora desde cedo, escreveu seus primeiros textos e poemas aos 17 anos, mas não chegou a publicá-los.</span>
            <br />
            <br />
            <span>Ao longo de sua busca por autoconhecimento conheceu a terapia floral, método vibracional de equilíbrio de emoções e energias e desde então tem visto excelentes resultados e transformações em seus pacientes e coachees que a utilizam.</span>
            <br />
            <br />
            <span>O interesse natural pela engenharia e sua curiosidade sobre o ser humano fazem com que Patricia esteja sempre criando e buscando novos métodos de Coaching que levem a resultados extraordinários – que são sempre potencializados com a ajuda da terapia floral.</span>

          </OwnerProfileWrapper>
          {props.button?
            <Link to="/biography">
              <AwesomeButton type="secondary">CONHEÇA MAIS SOBRE MIM <Arrow/></AwesomeButton>
              {/*<OwnerProfileButton href="/about">conheça mais sobre mim <Arrow/></OwnerProfileButton>*/}
            </Link>
            :
            ''
          }
        </Col>
        <Col xs={12} sm={12} md={6} lg={6}>
          <Row center="xs">
            <Col xs={12}>
              <ImgWrapper>
                <Img/>
              </ImgWrapper>
            </Col>
          </Row>
        </Col>
      </Row>
    </Grid>
  );
}

OwnerProfile.propTypes = {

};

export default OwnerProfile;
