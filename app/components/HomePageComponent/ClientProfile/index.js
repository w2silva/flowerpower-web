/**
*
* ClientProfile
*
*/

import React from 'react';
// import styled from 'styled-components';
import Profiles from './Profiles'

function ClientProfile() {
  return (
    <div>
      <h1>Terapia Floral Allevius</h1>
      <h2>Por favor, selecione para quem é esse floral:</h2>
      <Profiles/>
      <span>Após selecionar a opção, você será direcionado ao nosso questionário, a fim de criar sua terapia exclusiva e instantânea</span>
    </div>
  );
}

ClientProfile.propTypes = {

};

export default ClientProfile;
