/**
*
* Logo
*
*/

import React from 'react';

import styled from 'styled-components'

const Wrapper = styled.div`
  text-align: center;
  width: 70px;
  height: 70px;
  background-color: white;
  border-radius: 100%;
`;

function Logo() {
  return (
    <Wrapper>
      <img></img>
    </Wrapper>
  );
}

Logo.propTypes = {

};

export default Logo;
