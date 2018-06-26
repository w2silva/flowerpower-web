/**
*
* Info
*
*/

import React from 'react';
import styled from 'styled-components'
import { Row, Col } from 'react-styled-flexboxgrid'

const WrapperInfo = styled.div`
  padding-top: 3em;

  .info-title {
    font-size: 3em;
    font-style: italic;
    text-align: right;
  }

  .info-divider {
    border-right: solid 1px #bdb8b8;
    height: 65px;

    -webkit-transform: rotate(15deg); /* Safari */
        -ms-transform: rotate(15deg); /* IE 9 */
            transform: rotate(15deg);
  }

  .info-desc {
    font-size: 1.2em;
    text-align: left;
  }
`;

function Info() {
  return (
    <WrapperInfo>
      <Row middle="xs" center="xs">
        <Col>
          <div className="info-title">Allevius Florais</div>
        </Col>
        <Col>
          <div className="info-divider">&nbsp;</div>
        </Col>
        <Col>
          <div className="info-desc">Facilitando sua busca por<br /><b>bem-estar</b> e <b>autoconhecimento</b></div>
        </Col>
      </Row>
    </WrapperInfo>
  );
}

Info.propTypes = {

};

export default Info;
