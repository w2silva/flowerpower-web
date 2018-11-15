/**
*
* ClientProfile
*
*/

import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-styled-flexboxgrid'
import iconeHumanos from 'images/icone-humanos.png';
import iconeAnimals from 'images/icone-animais.png';

const BookseWrapper = styled.div`
  position: relative;
  width: 100%;
  color: #333;
  padding: 3em 0px 7em 0;
  text-align: center;
`;

const BooksTitle = styled.div`
  margin: 0px 0px 30px 0px;
  padding: 0px 0px;
  font-size: 1.4em;
  font-weight: 500;
`;

const BooksIntro = styled.div`
  margin: 0px 0px 30px 0px;
  padding: 0px 0px;
`;

const Img = styled.img`

`;

function Books() {
  return (
    <BookseWrapper>
      <Grid>
        {/* <BooksTitle>Lorem ipsum dollor amet sit</BooksTitle> */}
        <BooksIntro>Após selecionar a opção, você será direcionado ao nosso questionário, a fim de criar sua terapia exclusiva e instantânea.</BooksIntro>
        <Row middle="xs" around="xs">
          <Col>
            <Img src={iconeHumanos} />
          </Col>
          <Col>
            <Img src={iconeAnimals} />
          </Col>
        </Row>
      </Grid>
    </BookseWrapper>
  );
}

Books.propTypes = {

};

export default Books;
