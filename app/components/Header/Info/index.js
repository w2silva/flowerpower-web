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
    font-size: 2.2em;
    font-style: italic;
    text-align: right;
  }

  .info-divider {
    font-size: 2.2em;
    font-style: italic;
    text-align: center;
  }

  .info-desc {
    font-size: 1.2em;
    text-align: left;
  }
`;

function Info() {
  return (
    <WrapperInfo>
      <Row middle="xs">
        <Col xs={5}>
          <div className="info-title">Allevius Florais</div>
        </Col>
        <Col xs={1}>
          <div className="info-divider">/</div>
        </Col>
        <Col xs={6}>
          <div className="info-desc">Facilitando sua busca por<br /><b>bem-estar</b> e <b>autoconhecimento</b></div>
        </Col>
      </Row>
    </WrapperInfo>
  );
}

Info.propTypes = {

};

export default Info;
