/**
*
* Therapy
*
*/

import React from 'react';
import styled from 'styled-components';
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
  const finalizeQuestions = (id) => props.finishQuiz(id)

  const flowersStateArray = props.diagnosis && props.diagnosis.flowers_postselected.map((f) => f.state === 'finished')
  const flowersIdx = props.diagnosis && flowersStateArray.indexOf(false)
  const flowersFinished = flowersIdx < 0
  const finalizeFlowers = (id) => props.finishFlowers(id)

  console.log(`${emotionsFinished} | ${questionsFinished} | ${flowersFinished}`)

  return (
    <div>
      {props.me.me && props.diagnosis &&
        <TherapyWrapper>
          { !emotionsFinished &&
            <EmotionsPreselection
              diagnosis={props.diagnosis}
              idx={emotionsIdx}
              preselection={props.diagnosis.emotions_preselected[emotionsIdx]}
              emotions={props.emotions}
              submitEmotion={props.submitEmotion}
              finalizeEmotions={props.finishEmotionPreselection}
              flowers={props.flowers}
            />
          }
          { emotionsFinished && !questionsFinished &&
            <Questions
              submitQuestion={props.submitQuestion}
              quiz={props.diagnosis.therapy.quizzes[questionsIdx]}
              answers={props.diagnosis.quizzes[questionsIdx]}
              submitAnswer={props.submitQuizAnswer}
              finalizeQuestions={finalizeQuestions(props.diagnosis.quizzes[questionsIdx]._id)}
              idx={questionsIdx}
            />
          }
          { emotionsFinished && questionsFinished && !flowersFinished &&
            <FlowersPostselection
              postselection={props.diagnosis.therapy.flowers_postselection[flowersIdx]}
              postselected={props.diagnosis.flowers_postselected[flowersIdx]}
              submitFlower={props.submitFlower}
              finalizeFlowers={finalizeFlowers(props.diagnosis.flowers_postselected[flowersIdx]._id)}
              flowers={props.flowers}
              goBack={props.goBack}
            />
          }
        </TherapyWrapper>
      }
    </div>
  );
}

Therapy.propTypes = {

};

export default Therapy;
