/**
*
* EmotionsPreselection
*
*/

import React from 'react';
// import styled from 'styled-components';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-styled-flexboxgrid'
import Emotion from './Emotion';
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/themes/theme-blue.css';
import H2 from 'components/H2'

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
export class EmotionsPreselection extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      idx: 0
    }
  }

  componentDidMount() {
    this.top.scrollIntoView({ behavior: "smooth" });
  }

  render() {
    if (!this.props.diagnosis) {
      return (<div/>)
    }
    const isAnswering = ['started', 'answering'].indexOf(this.props.diagnosis.emotions_preselected[this.props.idx].state) >= 0

    return (
      <Grid>
        <H2 align="center">Agora vamos começar a terapia</H2>
        <div style={{ float:"left", clear: "both" }} ref={(el) => { this.top = el; }}/>
        <QuestionWrapper>
          <QuestionsIntro>{this.props.diagnosis.therapy.emotions_preselection[this.props.idx].statement}</QuestionsIntro>
            <form>
            <Row middle="xs">
              {this.props.emotions ? this.props.emotions.map((e) => (
                <Emotion
                  key={e.id}
                  emotion={e}
                  diagnosis={this.props.diagnosis}
                  submitEmotion={this.props.submitEmotion}
                  idx={this.props.idx}
                />
              ))
              :
              ''
              }
            </Row>
          </form>
        </QuestionWrapper>
        <div className="text-center">
          {isAnswering?
            <div style={{fontSize: '15px', marginBottom: '10px'}}>Por favor selecione mais opções acima antes de continuar.
            </div>
            :
            ''
          }
          <AwesomeButton disabled={isAnswering} action={this.props.finalizeEmotions(this.props.preselection._id)}>Continuar</AwesomeButton>
        </div>
      </Grid>
    );
  }
}

EmotionsPreselection.propTypes = {

};

export default EmotionsPreselection;
