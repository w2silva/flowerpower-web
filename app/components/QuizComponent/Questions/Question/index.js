/**
*
* Question
*
*/

import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-styled-flexboxgrid'

const Wrapper = styled.div`
  margin: 0 0 4em 0;

  p {
    text-transform: uppercase;
    color: black;
    font-weight: 600;
    margin: 0px 0px 10px 0px;
  }

  span {
    display: inline-block;
    padding: 2px 8px;
    margin: 0px 10px 0px 0px;
    background-color: #779ccb;
    color: white;
    border-radius: 2px;
  }

  label {
    cursor: pointer;
    position: relative;
    display: inline-block;
    background-color: #eee;
    border-radius: 30px;
    padding: 5px 8px;
    width: 110px;
    font-size: .7em;
    text-align: left;

    &:active, 
    &:focus, 
    &:hover {
      background-color: #779ccb;
      color: white;
    }
  }

  input {
    position: relative;
    top: 2px;
    margin: 0px 5px 0px 0px;
  }
`;

function Question(props) {
  return (
    <Wrapper>
      <p><span>1</span> {props.title}</p>
      <Row middle="xs" around="xs">
        <Col>
          <label><input type='checkbox'/> Nunca</label>
        </Col>
        <Col>
          <label><input type='checkbox'/> Poucas Vezes</label>
        </Col>
        <Col>
          <label><input type='checkbox'/> Algumas Vezes</label>
        </Col>
        <Col>
          <label><input type='checkbox'/> Frequentemente</label>
        </Col>
        <Col>
          <label><input type='checkbox'/> Sempre</label>
        </Col>
      </Row>
    </Wrapper>
  );
}

Question.propTypes = {

};

export default Question;
