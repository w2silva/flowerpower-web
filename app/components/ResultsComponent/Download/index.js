/**
*
* Download
*
*/

import React from 'react';
// import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Download() {
  return (
    <div>
      <div>
        <h5>Faça o download da sua Receita...</h5>
        <span>Lorem Ipsum</span>
      </div>
      <Link to='/results'>Download da Receita</Link>
    </div>
  );
}

Download.propTypes = {

};

export default Download;
