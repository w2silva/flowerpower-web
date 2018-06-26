/**
*
* Questions
*
*/

import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-styled-flexboxgrid'
import Question from './Question'
import { connect } from 'react-redux';
import { compose } from 'redux';
import ImgBtnResultados from 'images/btn-resultados.png';

import styles from './../styles.css'

const Button = ({ type, className, children }) => (
  <button type={type} className={className}>
    {children}
  </button>
);

const QuestionSubmit = styled(Button)`
  background: none;
  background-image: url(${ImgBtnResultados});
  background-color: transparent;
  background-origin: content-box;
  background-position: top center;
  background-repeat: no-repeat;
  background-size: contain;
  position: relative;
  display: inline-block;
  width: 294px;
  height: 51px;
  border: none;
  cursor: pointer;

  &:active, 
  &:focus, 
  &:hover {
    outline: none;
  }
`;

const QuestionStyled = styled.div`
  .heading {
    text-align: center;
    margin-bottom: 3em;
  }
`;

const MarginSubmit = styled.div`
  margin-bottom: 6em;
  text-align: center;
`;

function Questions (props) {
  return (
    <Grid>
      <QuestionStyled>
        <p className="heading">Abaixo você encontra uma série de perguntas específicas, por favor escolha sempre a alternativa<br /> com a qual o perfil selecionado mais se identifica</p>
        <form onSubmit={props.submitTherapy}>
          <Question title='Eu fico ansioso sem saber o por quê'/>
          <Question title='Eu tenho medo secreto que alguma coisa negativa vai acontecer'/>
          <Question title='Eu fico ansioso sem saber o por quê'/>
          <Question title='Eu tenho medo secreto que alguma coisa negativa vai acontecer'/>
          <Question title='Eu fico ansioso sem saber o por quê'/>
          <Question title='Eu tenho medo secreto que alguma coisa negativa vai acontecer'/>
          <Question title='Eu fico ansioso sem saber o por quê'/>
          <Question title='Eu tenho medo secreto que alguma coisa negativa vai acontecer'/>
          <Question title='Eu fico ansioso sem saber o por quê'/>
          <Question title='Eu tenho medo secreto que alguma coisa negativa vai acontecer'/>
          <MarginSubmit>
            <QuestionSubmit type="submit"></QuestionSubmit>
          </MarginSubmit>
        </form>
      </QuestionStyled>
    </Grid>
  );
}

Questions.propTypes = {

};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(null, mapDispatchToProps);

export default compose(
  withConnect,
)(Questions);
