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
        <AwesomeButton action={props.goToResults}>Ver receita</AwesomeButton>
      </Grid>
    </DownloadWrapper>
  );
}

PrePurchaseResults.propTypes = {

};

export default PrePurchaseResults;
