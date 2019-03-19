/**
*
* HeaderMenu
*
*/

import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import scrollToComponent from 'react-scroll-to-component';
import { HashLink } from 'react-router-hash-link';

export class HeaderMenu extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render () {
    const HeaderMenuWrapper = styled.div`
      @media (max-width: 780px) {
        visibility: ${props => props.mobilehidden ? 'hidden' : ''};
        height: ${props => props.mobilehidden ? '0px' : ''}
      }
      text-align: right;
      padding-bottom: 2em;
      a {
        text-decoration: none;
        font-size: 1.2em;
        color: inherit;
        transition: 0.3s;
        span {
          padding: 0px 0px 0px 7px;
        }

      }
      button {
        background-color: transparent;
        border: 0;
        text-decoration: none;
        font-size: 1.2em;
        color: inherit;
        cursor:pointer;
        font-weight: 300;

        span {
          padding: 0px 0px 0px 7px;
        }

      }
      a:hover {
        text-shadow: 2px 2px #000;
      }

      @media (max-width: 780px) {
        a {
          display: block;
          padding: 10px 0px;

          .divider {
            display: none;
          }
        }
      }
    `;

    let idxSub = 0
    return (
      <HeaderMenuWrapper mobilehidden={this.props.mobilehidden}>
        {this.props.titles.map((t, idx) => {
          if(this.props.scroll && idx <= 1) {
            idxSub = 2
            return (
              <HashLink to={`/#${this.props.scroll[idx]}`} key={t}>
                <span>{t}</span>
                {idx < this.props.titles.length - 1 ?<span className="divider">/</span>:''}
              </HashLink>
            )
          } else {
            return (
              <Link key={t} to={this.props.to[idx-idxSub]}>
                <span>{t}</span>
                {idx < this.props.titles.length - 1 ?<span className="divider">/</span>:''}
              </Link>
            )
          }

        })}
      </HeaderMenuWrapper>
    );
  }
}

HeaderMenu.propTypes = {

};

export default HeaderMenu;
