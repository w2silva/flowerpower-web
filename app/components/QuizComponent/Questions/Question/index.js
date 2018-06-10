/**
*
* Question
*
*/

import React from 'react';
// import styled from 'styled-components';

function Question(props) {
  return (
    <div>
        <span>{props.title}</span>
        <label>Nunca<input type='checkbox'/></label>
        <label>Poucas Vezes<input type='checkbox'/></label>
        <label>Algumas Vezes<input type='checkbox'/></label>
        <label>Frequentemente<input type='checkbox'/></label>
        <label>Sempre<input type='checkbox'/></label>
    </div>
  );
}

Question.propTypes = {

};

export default Question;
