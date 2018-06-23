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

  label {
    cursor: pointer;
    position: relative;
    display: inline-block;
    background-color: #eee;
    border-radius: 30px;
    padding: 8px 15px;
    width: 120px;
    font-size: 12px;
    text-align: left;
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
      <p>{props.title}</p>
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
