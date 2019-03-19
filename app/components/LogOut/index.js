/**
*
* LogOut
*
*/

import React from 'react';
import styled from 'styled-components';

import { AwesomeButton } from 'react-awesome-button';

const LogoutWrapper = styled.div`
  color: #000;
  padding-bottom: 100px;
  text-align: center;
  cursor: pointer;
`;

function LogOut(props) {
  return (
    <LogoutWrapper >
      <AwesomeButton type="secondary" action={props.logout}>Sair</AwesomeButton>
    </LogoutWrapper>
  );
}

LogOut.propTypes = {

};

export default LogOut;
