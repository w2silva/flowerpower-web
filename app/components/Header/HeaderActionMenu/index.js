/**
*
* HeaderActionMenu
*
*/

import React from 'react';
import { Link } from 'react-router-dom'
import { push } from 'react-router-redux';
import styled from 'styled-components'
import scrollToComponent from 'react-scroll-to-component';
import { HashLink } from 'react-router-hash-link';
import { AwesomeButton } from 'react-awesome-button';

export class HeaderActionMenu extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  goTo = (url) => () => {
    this.props.dispatch(push(url))
  }

  render () {
    const HeaderActionMenuWrapper = styled.div`
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
      <HeaderActionMenuWrapper mobilehidden={this.props.mobilehidden}>
        {this.props.titles.map((t, idx) => (
          <AwesomeButton onClick={this.goTo(this.props.to[idx])}>
            {t}
          </AwesomeButton>
        ))}
      </HeaderActionMenuWrapper>
    );
  }
}

HeaderActionMenu.propTypes = {

};

export default HeaderActionMenu;
