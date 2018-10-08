/**
*
* Footer
*
*/

import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import Mail from 'react-icons/lib/io/ios-email-outline';
import Local from 'react-icons/lib/io/ios-locatoutline';
import Contact from 'react-icons/lib/io/ios-telephone-outline';



const FooterWrapper = styled.div`
  position: relative;
  text-align: center;
  background-color: #F2F2F2;
  padding: 70px 0;
  height: 300px
`;

const FooterEllipsis = styled.div`
  position: absolute;
  border-bottom-left-radius: 100% 100%;
  border-bottom-right-radius: 100% 100%;
  width: 100%;
  height: 150px;
  top: -110px;
  left: -50%;
  transform: translateX(50%);
  background: linear-gradient(to bottom, transparent, white 75%);
  @media (max-width: 780px) {
    border-bottom-left-radius: 150% 100%;
    border-bottom-right-radius: 150% 100%;
  }
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
      <FooterEllipsis />
      <Grid>
        <FooterTitle>Allevius Florais</FooterTitle>
        <FooterIntro>Lorem ipsum todos os direitos reservados</FooterIntro>
        <Row center="xs">
          <Col><span><Mail style={{fontSize: '20px'}}/> contato@alllevius.com.br</span></Col>
          <Col><span>/</span></Col>
          <Col><span><Local style={{fontSize: '20px'}}/>Avenida Brasil, 1234 - São Paulo</span></Col>
          <Col><span>/</span></Col>
          <Col><span><Contact style={{fontSize: '20px'}}/>+55 11 91234-5678</span></Col>
        </Row>
        <FooterCopyright>Copyright 2018 Allevius Florais. Todos os direitos reservados</FooterCopyright>
      </Grid>
    </FooterWrapper>
  );
}

Footer.propTypes = {

};

export default Footer;
