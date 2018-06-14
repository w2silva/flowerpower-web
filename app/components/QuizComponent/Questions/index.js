/**
*
* Questions
*
*/

import React from 'react';
// import styled from 'styled-components';
import Question from './Question'
import { connect } from 'react-redux';
import { compose } from 'redux';

function Questions (props) {
  return (
    <div className={props.className}>
      <div>
        <h5>Agora vamos começar a terapia</h5>
        <span>Abaixo você encontra uma série de perguntas específicas, por favor escolha sempre a alternativa com a qual o perfil selecionado mais se identifica</span>
      </div>
      <form onSubmit={props.submitTherapy}>
        <Question title='Eu fico ansioso sem saber o por quê'/>
        <Question title='Eu tenho medo secreto que alguma coisa negativa vai acontecer'/>
        <input type="submit" value="Concluir questionário e ver resultado"/>
      </form>
    </div>
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
