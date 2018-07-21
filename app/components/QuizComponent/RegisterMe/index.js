/**
*
* RegisterMe
*
*/

import React from 'react';
// import styled from 'styled-components';
import Register from 'components/Register'
import { AwesomeButton } from 'react-awesome-button';


function RegisterMe(props) {
  return (
    <div>
      <Register
        updateRegister={props.updateRegister}
        register={props.register}
        showLogin={props.showLogin}
      />
      <div className="text-center">
        <AwesomeButton bubbles action={props.submitRegister}>CONTINUAR</AwesomeButton>
      </div>
    </div>
  );
}

RegisterMe.propTypes = {

};

export default RegisterMe;
