/**
*
* PrePurchaseResults
*
*/

import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-styled-flexboxgrid'
import H2 from 'components/H2';
import { AwesomeButton } from 'react-awesome-button';

const DownloadWrapper = styled.div`
  padding: 0 0 3em 0;
  text-align: center;
`;

const DownloadIntro = styled.div`
  padding: 0 0 2em 0;
  font-size: 1.3em;
`;

const DownloadLink = styled.a`
  display: block;
  background-image: linear-gradient(to right, #76558e, #b0336b);
  color: white;
  border-radius: 50px;
  padding: 10px 35px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 600;
  font-size: .8em;
  box-shadow: 4px 4px 20px 0px #0006;

  &:hover {
    color: white;
  }
`;

function PrePurchaseResults(props) {
  return (
    <DownloadWrapper>
      <Grid style={{marginBottom: '150px'}}>
        <H2 align="center">Sua receita está pronta!</H2>
        <DownloadIntro>Parabéns! Você completou o diagnóstico com sucesso e já temos sua receita em mãos.</DownloadIntro>
        <DownloadIntro>Para concluir a terapia e obter sua receita, clique no botão abaixo e faça o pagamento. Depois é só baixar o PDF, levar na sua farmácia de manipulação de confiança e iniciar o tratamento!</DownloadIntro>
        <DownloadIntro>Caso não conheça farmácias de manipulação que elaborem compostos para tratamento floral, nós compilamos uma lista para você.</DownloadIntro>
        <button onClick={props.goToPlanSelection}>
          <AwesomeButton>Ir para o pagamento</AwesomeButton>
        </button>
      </Grid>
    </DownloadWrapper>
  );
}

PrePurchaseResults.propTypes = {

};

export default PrePurchaseResults;
