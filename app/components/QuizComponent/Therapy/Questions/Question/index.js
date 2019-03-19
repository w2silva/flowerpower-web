/**
*
* Question
*
*/

import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-styled-flexboxgrid'

const QuestionWrapper = styled.div`
  margin: 0 0 3em 0;
`;

const QuestionTitle = styled.div`
  text-transform: uppercase;
  color: black;
  font-weight: 400;
  font-size: 1.3em;
  margin: 0px 0px 10px 0px;
`;

const QuestionNumber = styled.span`
  display: inline-block;
  padding: 2px 8px;
  margin: 0px 10px 0px 0px;
  background-color: #779ccb;
  color: white;
  border-radius: 20px;
`;

const QuestionOption = styled.div`
  cursor: pointer;
  position: relative;
  display: inline-block;
  background-color: ${props => props.active ? '#779ccb' : '#eee'};
  border-radius: 30px;
  padding: 3px 0px 3px 5px;
  margin-bottom: 1em;
  width: 150px;
  height: 30px;
  font-size: 1.2em;
  padding-top: 5px;
  text-align: left;

  label {
    color: ${props => props.active ? 'white' : '#666'};
  }

  &:active,
  &:focus,
  &:hover {
    background-color: #779ccb;

    * {
      color: white;
    }
  }
`;

const QuestionRadio = styled.input`
  position: relative;

  &:checked,
  &:not(:checked) {
    position: absolute;
    left: -9999px;
  }
  &:checked + label,
  &:not(:checked) + label {
    position: relative;
    display: inline-block;
    padding-left: 23px;
    cursor: pointer;
    line-height: 20px;
  }
  &:checked + label:before,
  &:not(:checked) + label:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 18px;
    height: 18px;
    border: 1px solid #ddd;
    border-radius: 100%;
    background: #fff;
  }
  &:checked + label:after,
  &:not(:checked) + label:after {
    position: absolute;
    content: '';
    width: 12px;
    height: 12px;
    background-color: #779ccb;
    top: 3px;
    left: 3px;
    border-radius: 100%;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
  }
  &:not(:checked) + label:after {
    opacity: 0;
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  &:checked + label:after {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
`;

const QuestionLabel = styled.label`
  color: #666;
  margin: 0;
`;

function Question(props) {
  var inputName = "radio-group-" + props.index;
  return (
    <QuestionWrapper>
      <QuestionTitle>
        <QuestionNumber>{props.index}</QuestionNumber> {props.title}
      </QuestionTitle>
      <Row middle="xs" around="xs">
        <Col xs={12} sm={12} md lg style={{textAlign: 'center'}}>
          <QuestionOption active={props.answer && props.answer.rating === 0} onClick={props.submitAnswer(0)}>
            <QuestionRadio type="radio" name={inputName} checked={props.answer && props.answer.rating === 0} />
            <QuestionLabel>Nunca</QuestionLabel>
          </QuestionOption>
        </Col>
        <Col xs={12} sm={12} md lg style={{textAlign: 'center'}}>
          <QuestionOption active={props.answer && props.answer.rating === 1} onClick={props.submitAnswer(1)}>
            <QuestionRadio type="radio" name={inputName} checked={props.answer && props.answer.rating === 1} />
            <QuestionLabel>Poucas Vezes</QuestionLabel>
          </QuestionOption>
        </Col>
        <Col xs={12} sm={12} md lg style={{textAlign: 'center'}}>
          <QuestionOption active={props.answer && props.answer.rating === 2} onClick={props.submitAnswer(2)}>
            <QuestionRadio type="radio" name={inputName} checked={props.answer && props.answer.rating === 2} />
            <QuestionLabel>Algumas Vezes</QuestionLabel>
          </QuestionOption>
        </Col>
        <Col xs={12} sm={12} md lg style={{textAlign: 'center'}}>
          <QuestionOption active={props.answer && props.answer.rating === 3} onClick={props.submitAnswer(3)}>
            <QuestionRadio type="radio" name={inputName} checked={props.answer && props.answer.rating === 3} />
            <QuestionLabel>Frequentemente</QuestionLabel>
          </QuestionOption>
        </Col>
        <Col xs={12} sm={12} md lg style={{textAlign: 'center'}}>
          <QuestionOption active={props.answer && props.answer.rating === 4} onClick={props.submitAnswer(4)}>
            <QuestionRadio type="radio" name={inputName} checked={props.answer && props.answer.rating === 4} />
            <QuestionLabel>Sempre</QuestionLabel>
          </QuestionOption>
        </Col>
      </Row>
    </QuestionWrapper>
  );
}

Question.propTypes = {

};

export default Question;
