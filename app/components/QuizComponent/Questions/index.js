/**
*
* Questions
*
*/

import React from 'react';
// import styled from 'styled-components';
import { Grid, Row, Col } from 'react-styled-flexboxgrid'
import Question from './Question'
import { connect } from 'react-redux';
import { compose } from 'redux';

function Questions (props) {
  return (
    <Grid>
      <div className={props.className}>
        <p>Abaixo você encontra uma série de perguntas específicas, por favor escolha sempre a alternativa<br /> com a qual o perfil selecionado mais se identifica</p>
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
          <input type="submit" value="Concluir questionário e ver resultado"/>
        </form>
      </div>
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
