/**
*
* Questions
*
*/

import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-styled-flexboxgrid'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { AwesomeButton } from 'react-awesome-button';
import H2 from 'components/H2'

import Question from './Question'

const QuestionWrapper = styled.div`
  margin-bottom: 5em;
`;

const QuestionsIntro = styled.div`
  margin-bottom: 6em;
  text-align: center;
  font-size: 20px
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

export class Questions extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      index: this.props.answers.answers.filter((a) => a.selected).map((a) => a.state === 'answered').lastIndexOf(true)
    }
  }

  componentDidUpdate(prevProps, prevState) {
    this.setState({
      index: this.props.answers.answers.filter((a) => a.selected).map((a) => a.state === 'answered').lastIndexOf(true)
    })
  }

  render() {
    const submitAnswer = (questionId) => (rating) => () => this.props.submitAnswer(this.props.quiz._id, questionId, rating)
    const isAnswering = ['started', 'answering'].indexOf(this.props.answers.state) >= 0

    let idx = 1
    const sss = this.props.answers.answers.map((a) => a.state)
    console.log('q', this.state);
    console.log('q', this.props.answers);
    const eeee = ["answered"].lastIndexOf(sss)
    return (
      <Grid>
        <H2 align="center">Continuando...</H2>
        <QuestionWrapper>
          <QuestionsIntro>Abaixo você encontra uma série de perguntas específicas, por favor escolha sempre a alternativa<br /> com a qual o perfil selecionado mais se identifica</QuestionsIntro>
          <form onSubmit={this.props.submitTherapy}>
            { this.props.quiz.questions.map((q, index) => {
              const answer = this.props.answers.answers.filter((a) => a.question === q._id)[0];
              if (!answer.selected) {
                return
              }
              if (idx >= this.state.index + 3) {
                return
              }
              return (
                <Question
                  key={q._id}
                  index={idx++}
                  title={q.statement}
                  answer={answer}
                  submitAnswer={submitAnswer(q._id)}
                />
              )
            })}
            <div className="text-center">
              <AwesomeButton disabled={isAnswering} action={this.props.finalizeQuestions}>Continuar</AwesomeButton>
            </div>
          </form>
        </QuestionWrapper>
      </Grid>
    );
  }
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
