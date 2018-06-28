/**
*
* Footer
*
*/

import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';

const FooterWrapper = styled.div`
  position: relative;
  text-align: center;
  background-color: #eee;
  padding: 20px 0;
`;
  
const FooterTitle = styled.h1`
  color: #779ccb;
  margin: 0px 0px 10px 0px;
  font-weight: 600;
`;
  
const FooterIntro = styled.div`
  margin: 0px 0px 10px 0px;
`;
  
const FooterCopyright = styled.div`
  color: #716e6e;
  margin: 50px 0px 10px 0px;
`;

function Footer() {
  return (
    <FooterWrapper>
      <Grid>
        <FooterTitle>Allevius Florais</FooterTitle>
        <FooterIntro>Lorem ipsum todos os direitos reservados</FooterIntro>
        <Row center="xs">
          <Col><span>contato@alllevius.com.br</span></Col>
          <Col><span>/</span></Col>
          <Col><span>Avenida Brasil, 1234 - São Paulo</span></Col>
          <Col><span>/</span></Col>
          <Col><span>+55 11 91234-5678</span></Col>
        </Row>
        <FooterCopyright>Copyright 2018 Allevius Florais. Todos os direitos reservados</FooterCopyright>
      </Grid>
    </FooterWrapper>
  );
}

Footer.propTypes = {

};

export default Footer;
