/**
*
* Therapy
*
*/

import React from 'react';
import styled from 'styled-components';
import H2 from 'components/H2'
import EmotionsPreselection from './EmotionsPreselection'
import Questions from './Questions'
import FlowersPostselection from './FlowersPostselection'

const TherapyWrapper = styled.div`
  margin-top: 100px;
`

function Therapy(props) {
  const emotionsStateArray = props.diagnosis && props.diagnosis.emotions_preselected.map((e) => e.state === 'finished')
  const emotionsIdx = props.diagnosis && emotionsStateArray.indexOf(false)
  const emotionsFinished = emotionsIdx < 0

  const questionsStateArray = props.diagnosis && props.diagnosis.quizzes.map((q) => q.state === 'finished')
  const questionsIdx = props.diagnosis && questionsStateArray.indexOf(false)
  const questionsFinished = questionsIdx < 0

  const flowersStateArray = props.diagnosis && props.diagnosis.flowers_postselected.map((f) => f.state === 'finished')
  const flowersIdx = props.diagnosis && flowersStateArray.indexOf(false)
  const flowersFinished = flowersIdx < 0
  return (
    <div>
      {props.me.me && props.diagnosis &&
        <TherapyWrapper>
          <H2 align="center">Agora vamos começar a terapia</H2>
          {
            !emotionsFinished ?
            <EmotionsPreselection
              diagnosis={props.diagnosis}
              idx={emotionsIdx}
              preselection={props.diagnosis.emotions_preselected[emotionsIdx]}
              emotions={props.emotions}
              submitEmotion={props.submitEmotion}
              finalizeEmotions={props.finishEmotionPreselection}
              flowers={props.flowers}
            />
            :
            ''
          }
          {
            emotionsFinished && !questionsFinished ?
            <Questions
              submitQuestion={props.submitQuestion}
              idx={questionsIdx}
            />
            :
            ''
          }
          {
            emotionsFinished && questionsFinished && !flowersFinished ?
            <FlowersPostselection
              FlowersPostselection={props.FlowersPostselection}
              idx={flowersIdx}
            />
            :
            ''
          }
        </TherapyWrapper>
      }
    </div>
  );
}

Therapy.propTypes = {

};

export default Therapy;
