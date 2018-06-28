/**
*
* Mailing
*
*/

import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-styled-flexboxgrid'
import H2 from 'components/H2';
import Form from 'components/Form';

const MailingWrapper = styled.div`
  padding: 20px 0;
  text-align: center;
`;

const MailingProvider = styled.div`
  padding: 3em 0 5em 0;
`;

const ProviderTitle = styled.h5`
  font-size: 1em;
  margin: 0 0 5px 0;
  text-transform: uppercase;
`;

const ProviderLink = styled.a`
  font-size: .9em;
  text-decoration: underline !important;
`;

const ButtonSubmit = styled.a`
  display: inline-block;
  background-color: #779ccb;
  color: white !important;
  border-radius: 50px;
  padding: 10px 25px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 600;
  font-size: .8em;
  box-shadow: 4px 4px 20px 0px #3336;
`;

function Mailing() {
  return (
    <MailingWrapper>
      <Grid>
        <H2 align="center">ou envie diretamente aos fornecedores</H2>
        <div>Selecione uma Cidade</div>
        <Form>
          <div className="group">
            <input type="text" style={{ width: '200px', display: 'inline-block' }} />
          </div>
          <div>Foram enviados <strong>6 fornecedores</strong> para a cidade de <strong>MOGI DAS CRUZES.</strong></div>
        </Form>
        <Row>
          <Col>
            <MailingProvider>
              <ProviderTitle>Nome do fornecedor</ProviderTitle>
              <div>contato@fornecedor.com.br</div>
              <ProviderLink>+ adicionar a lista</ProviderLink>
            </MailingProvider>
          </Col>
          <Col>
            <MailingProvider>
              <ProviderTitle>Nome do fornecedor</ProviderTitle>
              <div>contato@fornecedor.com.br</div>
              <ProviderLink>+ adicionar a lista</ProviderLink>
            </MailingProvider>
          </Col>
          <Col>
            <MailingProvider>
              <ProviderTitle>Nome do fornecedor</ProviderTitle>
              <div>contato@fornecedor.com.br</div>
              <ProviderLink>+ adicionar a lista</ProviderLink>
            </MailingProvider>
          </Col>
          <Col>
            <MailingProvider>
              <ProviderTitle>Nome do fornecedor</ProviderTitle>
              <div>contato@fornecedor.com.br</div>
              <ProviderLink>+ adicionar a lista</ProviderLink>
            </MailingProvider>
          </Col>
        </Row>
        <Form>
          <div>Se preferir, adicione o email de seu fornecedor aqui:</div>
          <div className="group">
            <input type="text" style={{ width: '200px', display: 'inline-block', marginRight: '10px' }} />
            <ProviderLink>+ adicionar a lista</ProviderLink>
          </div>
          <div className="group">
            <input type="text" style={{ width: '200px', display: 'inline-block', marginRight: '10px' }} />
            <ProviderLink>+ adicionar a lista</ProviderLink>
          </div>
          <div className="group">
            <input type="text" style={{ width: '200px', display: 'inline-block', marginRight: '10px' }} />
            <ProviderLink>+ adicionar a lista</ProviderLink>
          </div>
          <ButtonSubmit>enviar receita para os emails</ButtonSubmit>
        </Form>
      </Grid>
    </MailingWrapper>
  );
}

Mailing.propTypes = {

};

export default Mailing;
