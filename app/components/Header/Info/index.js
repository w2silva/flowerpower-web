/**
*
* Info
*
*/

import React from 'react';
import styled from 'styled-components'
import { Row, Col } from 'react-styled-flexboxgrid'

const WrapperInfo = styled.div`
  padding-top: ${props => props.button ? '7em' : '3em'};

  @media (max-width: 780px) {
    padding-top: 0;
    .info-title {
      font-size: 3em;
      font-style: italic;
      text-align: right;
      font-weight: 390;
      letter-spacing: 1px;
    }
    .info-divider {
      visibility: hidden;
      height: 0 !important;
    }
    .info-desc {
      font-size: 1.4em;
      font-weight: 100;
      text-align: center;
    }
  }

  @media (min-width: 780px) {
    .info-title {
      font-size: 4.5em;
      font-style: italic;
      text-align: right;
      font-weight: 390;
      letter-spacing: 1px;
    }
    .info-divider {
      border-right: solid 0.5px #bdb8b8;
      opacity: 0.5;
      height: 65px;

      -webkit-transform: rotate(15deg); /* Safari */
          -ms-transform: rotate(15deg); /* IE 9 */
              transform: rotate(15deg);
    }
    .info-desc {
      font-size: 1.8em;
      font-weight: 100;
      text-align: left;
    }
  }

`;

function Info(props) {
  return (
    <WrapperInfo button={props.button}>
      <Row middle="xs" center="xs">
        <Col>
          <div className="info-title">Allevius Florais</div>
        </Col>
        <Col>
          <div className="info-divider">&nbsp;</div>
        </Col>
        <Col>
          <div className="info-desc">Facilitando sua busca por<br /><b >bem-estar</b> e <b>autoconhecimento</b></div>
        </Col>
      </Row>
    </WrapperInfo>
  );
}

Info.propTypes = {

};

export default Info;
