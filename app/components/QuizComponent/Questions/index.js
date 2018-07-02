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

const QuestionWrapper = styled.div`
  margin-bottom: 5em;
`;

const QuestionsIntro = styled.div`
  margin-bottom: 6em;
  text-align: center;
`;

const QuestionSubmit = styled.a`
  cursor: pointer;
  display: inline-block;
  background-image: linear-gradient(to right, #76558e, #b0336b);
  color: white !important;
  border-radius: 50px;
  padding: 10px 35px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 600;
  font-size: .8em;
  box-shadow: 4px 4px 20px 0px #0006;
  
  &:active, 
  &:focus, 
  &:hover {
    color: white;
    text-decoration: underline;
  }
`;

function Questions (props) {
  return (
    <Grid>
      <QuestionWrapper>
        <QuestionsIntro>Abaixo você encontra uma série de perguntas específicas, por favor escolha sempre a alternativa<br /> com a qual o perfil selecionado mais se identifica</QuestionsIntro>
        <form onSubmit={props.submitTherapy}>
          <Question index={1} title='Eu fico ansioso sem saber o por quê'/>
          <Question index={2} title='Eu tenho medo secreto que alguma coisa negativa vai acontecer'/>
          <Question index={3} title='Eu fico ansioso sem saber o por quê'/>
          <Question index={4} title='Eu tenho medo secreto que alguma coisa negativa vai acontecer'/>
          <Question index={5} title='Eu fico ansioso sem saber o por quê'/>
          <Question index={6} title='Eu tenho medo secreto que alguma coisa negativa vai acontecer'/>
          <Question index={7} title='Eu fico ansioso sem saber o por quê'/>
          <Question index={8} title='Eu tenho medo secreto que alguma coisa negativa vai acontecer'/>
          <Question index={9} title='Eu fico ansioso sem saber o por quê'/>
          <Question index={10} title='Eu tenho medo secreto que alguma coisa negativa vai acontecer'/>
          <div className="text-center">
            <QuestionSubmit>concluir e ver resultado</QuestionSubmit>
          </div>
        </form>
      </QuestionWrapper>
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
