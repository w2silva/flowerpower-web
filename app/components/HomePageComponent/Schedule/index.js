/**
*
* Schedule
*
*/

import React from 'react';
// import styled from 'styled-components';
import { Link } from 'react-router-dom'

function Schedule() {
  return (
    <div>
      <h1>Agende uma Consulta</h1>
      <span>Nosso sistema foi desenvolvido com extrema expertise da área de conhecimentos de casos práticos, mas se houver maiores dúvidas, pergunte a um terapeuta floral e <Link to='schedule'>agende sua consulta hoje mesmo, clicando no botão</Link></span>
      <Link to='schedule'>Agendar uma Consulta</Link>
    </div>
  );
}

Schedule.propTypes = {

};

export default Schedule;
