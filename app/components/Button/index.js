/**
*
* Button
*
*/

import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

const ButtonStyle = styled.div`
  padding: 10px 0px;
  text-align: ${props => props.align};

  a {
    display: inline-block;
    background-color: #779ccb;
    color: white !important;
    border-radius: 100px;
    padding: 10px 15px;
  }
`;

function Button() {
  return (
    <ButtonStyle>
      <a>
        <FormattedMessage {...messages.header} />
      </a>
    </ButtonStyle>
  );
}

Button.propTypes = {
  align: 'left'
};

export default Button;
