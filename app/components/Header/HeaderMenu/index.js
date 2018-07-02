/**
*
* HeaderMenu
*
*/

import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.div`
  text-align: right;
  padding-bottom: 1em;

  a {
    text-decoration: none;
    font-size: .9em;
    color: inherit;

    span {
      padding: 0px 0px 0px 7px;
    }
  }
`;

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
