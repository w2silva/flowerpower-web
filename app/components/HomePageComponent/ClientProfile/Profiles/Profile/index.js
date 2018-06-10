/**
*
* Profile
*
*/

import React from 'react';
// import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Profile(props) {
  return (
    <div className='col-md-6'>
      <Link to='/quiz'>
        <img/>
        <span>{props.title}</span>
      </Link>
    </div>
  );
}

Profile.propTypes = {

};

export default Profile;
