/**
*
* Profiles
*
*/

import React from 'react';
// import styled from 'styled-components';
import Profile from './Profile'

function Profiles() {
  return (
    <div className='col-md-12'>
      <div className='row'>
        <Profile title='Para mim ou parente'/>
        <Profile title='Para meu cão ou gato'/>
      </div>
    </div>
  );
}

Profiles.propTypes = {

};

export default Profiles;
