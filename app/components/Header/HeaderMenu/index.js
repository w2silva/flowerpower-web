/**
*
* HeaderMenu
*
*/

import React from 'react';
import { Link } from 'react-router-dom'
import Wrapper from './Wrapper'

function HeaderMenu(props) {
  return (
    <Wrapper>
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
    </Wrapper>
  );
}

HeaderMenu.propTypes = {

};

export default HeaderMenu;
