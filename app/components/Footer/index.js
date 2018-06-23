/**
*
* Footer
*
*/

import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-styled-flexboxgrid'

const Wrapper = styled.div`
  text-align: center;
  background-color: #eee;
  padding: 20px 0;

  h1 {
    color: blue;
    margin: 0px 0px 20px 0px;
    font-weight: 400;
  }

  .desc {
    margin-bottom: 20px;
  }

  .copyright {
    color: #716e6e;
    margin-top: 30px;
  }
`;

function Footer() {
  return (
    <Wrapper>
      <Grid>
        <h1>Allevius Florais</h1>
        <div className="desc">Lorem ipsum todos os direitos reservados</div>
        <Row center="xs">
          <Col><span>contato@alllevius.com.br</span></Col>
          <Col><span>/</span></Col>
          <Col><span>Avenida Brasil, 1234 - São Paulo</span></Col>
          <Col><span>/</span></Col>
          <Col><span>+55 11 91234-5678</span></Col>
        </Row>
        <div className="copyright">Copyright 2018 Allevius Florais. Todos os direitos reservados</div>
      </Grid>
    </Wrapper>
  );
}

Footer.propTypes = {

};

export default Footer;
