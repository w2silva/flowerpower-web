/**
*
* HeaderMenu
*
*/

import React from 'react';
// import styled from 'styled-components';
import { Link } from 'react-router-dom'
function HeaderMenu(props) {
  return (
    <div>
      {props.titles.map((t, idx) => (
        <Link to={props.to[idx]}>
          <span>{t}</span>
          {idx < props.titles.length - 1 ?
            <span> / </span>
            :
            ''
          }
        </Link>
      ))}
    </div>
  );
}

HeaderMenu.propTypes = {

};

export default HeaderMenu;
