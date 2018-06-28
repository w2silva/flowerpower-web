/**
*
* Download
*
*/

import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-styled-flexboxgrid'
import H2 from 'components/H2';

const DownloadWrapper = styled.div`
  padding: 0 0 3em 0;
  text-align: center;
`;

const DownloadIntro = styled.div`
  padding: 0 0 2em 0;
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

function Download() {
  return (
    <DownloadWrapper>
      <Grid>
        <H2 align="center">Faça download da receita de sua terapia</H2>
        <DownloadIntro>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in justo ullamcorper, sollicitudin turpis dapibus, hendrerit tortor. Morbi tincidunt non sapien nec pretium. Donec elementum tristique consequat. Cras ut orci at felis accumsan ullamcorper non quis risus. Ut at ex mi. Aenean ac varius elit, eu congue dolor.</DownloadIntro>
        <DownloadLink href="/results">Download da Receita</DownloadLink>
      </Grid>
    </DownloadWrapper>
  );
}

Download.propTypes = {

};

export default Download;
