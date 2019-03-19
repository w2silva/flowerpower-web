/**
*
* Description
*
*/

import React from 'react';
import { Link } from 'react-router-dom';
import styled, {ThemeProvider} from 'styled-components';
import { Grid, Row, Col } from 'react-styled-flexboxgrid'
import imgLavandaHome from 'images/img-lavanda-home.jpg';
import H2 from 'components/H2';
import Arrow from 'react-icons/lib/io/android-arrow-forward';
import { AwesomeButton } from 'react-awesome-button';

const DescriptionImg = styled.img`
  max-width: 600px;
  margin-left: -200px;

  @media (max-width: 780px) {
    max-width: 100%;
    margin-left: 0px;
  }
`;

const DescriptionWrapper = styled.div`
  margin-bottom: 30px;
  line-height: 2.0;
  font-size: 1.3em;
`;

// const DescriptionButton = styled.a`
//   display: inline-block;
//   background-color: #779ccb;
//   color: white;
//   border-radius: 50px;
//   padding: 10px 25px;
//   text-align: center;
//   text-transform: uppercase;
//   font-weight: 600;
//   font-size: .8em;
//   box-shadow: 4px 4px 20px 0px #3336;
// `;

export class Description extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render () {
    return (
      <Grid id="description">
        <Row middle="xs">
          <Col xs={12} sm={12} md={6} lg={6}>
            <DescriptionImg src={imgLavandaHome} />
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <H2>O que são florais?</H2>
            <DescriptionWrapper>
              <span>Os florais são essências extraídas das flores que têm o poder de transformar emoções e vibrações. Uma essência floral não contém a substância química extraída das flores, somente a assinatura energética delas, o que chamamos de essência vibracional.</span>
              <br />
              <br />
              <span>Quando utilizamos uma essência floral, ela atua em diversos de nossos corpos além do físico, como o corpo etérico, emocional e mental. O floral estimula a conexão com nosso verdadeiro Eu superior, que tem uma ligação muito mais direta com nosso Criador e tem muito mais sabedoria do que nosso Ego e nossa personalidade atual.</span>
              <br />
              <br />
              <span>Nosso Eu superior acumula e guarda o conhecimento de diversas vivências das quais não temos a capacidade de lembrar conscientemente. O uso dos florais favorece esses aprendizados de forma mais rápida, nos levando a uma evolução pessoal e transformação de tendências negativas e hábitos que não nos favorecem.</span>
            </DescriptionWrapper>
            <Link to="/about">
              <AwesomeButton type="secondary">SAIBA MAIS SOBRE FLORAIS <Arrow /></AwesomeButton>
            </Link>
            {/*<DescriptionButton href='/about'>saiba mais sobre florais <Arrow /></DescriptionButton>*/}
          </Col>
        </Row>
      </Grid>
    );
  }
}

Description.propTypes = {

};

export default Description;
