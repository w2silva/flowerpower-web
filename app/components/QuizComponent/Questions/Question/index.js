/**
*
* Question
*
*/

import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-styled-flexboxgrid'

const QuestionWrapper = styled.div`
  margin: 0 0 4em 0;
`;

const QuestionTitle = styled.div`
  text-transform: uppercase;
  color: black;
  font-weight: 600;
  margin: 0px 0px 10px 0px;
`;

const QuestionNumber = styled.span`
  display: inline-block;
  padding: 2px 8px;
  margin: 0px 10px 0px 0px;
  background-color: #779ccb;
  color: white;
  border-radius: 2px;
`;
  
const QuestionOption = styled.div`
  cursor: pointer;
  position: relative;
  display: inline-block;
  background-color: ${props => props.active ? '#779ccb' : '#eee'};
  border-radius: 30px;
  padding: 3px 0px 3px 5px;
  width: 100px;
  font-size: .8em;
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
        <Col>
          <QuestionOption>
            <QuestionRadio type="radio" name={inputName} />
            <QuestionLabel>Nunca</QuestionLabel>
          </QuestionOption>
        </Col>
        <Col>
          <QuestionOption active={true}>
            <QuestionRadio type="radio" name={inputName} checked />
            <QuestionLabel>Poucas Vezes</QuestionLabel>
          </QuestionOption>
        </Col>
        <Col>
          <QuestionOption>
            <QuestionRadio type="radio" name={inputName} />
            <QuestionLabel>Algumas Vezes</QuestionLabel>
          </QuestionOption>
        </Col>
        <Col>
          <QuestionOption>
            <QuestionRadio type="radio" name={inputName} />
            <QuestionLabel>Frequentemente</QuestionLabel>
          </QuestionOption>
        </Col>
        <Col>
          <QuestionOption>
            <QuestionRadio type="radio" name={inputName} />
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
