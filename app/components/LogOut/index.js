/**
*
* LogOut
*
*/

import React from 'react';
import styled from 'styled-components';

const LogoutWrapper = styled.div`
  color: #000;
  padding-bottom: 100px;
  text-align: center;
  cursor: pointer;
`;

function LogOut(props) {
  return (
    <LogoutWrapper >
      <a onClick={props.logOut}>logout</a>
    </LogoutWrapper>
  );
}

LogOut.propTypes = {

};

export default LogOut;
