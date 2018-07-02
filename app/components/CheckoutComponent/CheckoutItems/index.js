/**
*
* CheckoutComponent
*
*/

import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-styled-flexboxgrid'

const CheckoutItemsTable = styled.table`
  width: 100%;
  margin: 0px 0px 30px 0px;
`;

const Tr = styled.tr`
  th {
    text-transform: uppercase;
    color: #666;
    font-size: .8em;
    font-weight: 400;
    border-bottom: solid 1px #eee;
    padding: 5px 0px;
  }

  td {
    padding: 10px 0px;
    border-bottom: solid 1px #eee;
  }
`;

const Img = styled.img`
  display: block;
  width: 50px;
  height: 50px;
  background-color: #eee;
  border-radius: 100%;
  border: none;
`;

const ItemTitle = styled.div`
  font-weight: 600;
  color: #333;
  text-transform: uppercase;
`;

const ItemIntro = styled.span`
  font-size: .9em;
`;

const ItemCost = styled.span`
  font-weight: 600;
  color: #333;
`;

const ButtonRemove = styled.button`
  background-color: #ddd;
  border-radius: 2px;
`;

const TotalDiv = styled.div`
  display: block;
  padding: 5px 10px;
  text-align: right;
`;

const TotalAmountSpam = styled.span`
  font-weight: 500;
  font-size: 1.4em;
`;

const TotalAmountValue = styled.span`
  font-weight: 700;
  font-size: 1.4em;
  margin-left: 10px;
`;

const IntroSafe = styled.div`
  display: block;
  padding: 5px 0px;
`;

const SafeSpan = styled.span`
  font-size: .8em;
  text-transform: uppercase;
  padding: 0px 5px;
`;

const CouponTitle = styled.div`
  text-transform: uppercase;
  margin-bottom: 10px;
`;

const CouponLabel = styled.label`
  display: block;
  font-size: .9em;
  margin-bottom: 5px;
`;

const CouponInput = styled.input`
  display: inline-block;
  width: 220px;
  padding: 7px 7px;
  color: #999;
  border: solid 1px #e6e6e6;
  background: white;
  box-sizing: border-box;
  
  &:-webkit-input-placeholder { /* Chrome/Opera/Safari */
    color: #e6e6e6;
  }
  &:-moz-placeholder { /* Firefox 19+ */
    color: #e6e6e6;
  }
  &:-ms-input-placeholder { /* IE 10+ */
    color: #e6e6e6;
  }
  &:-moz-placeholder { /* Firefox 18- */
    color: #e6e6e6;
  }
`;

const CouponSubmit = styled.button`
  display: inline-block;
  border: none;
  background-color: #779ccb;
  color: white;
  border-radius: 50px;
  padding: 10px 25px;
  margin: 0px 10px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 600;
  font-size: .8em;
  box-shadow: 4px 4px 20px 0px #3336;
`;

function CheckoutItems() {
  return (
    <Grid>
      <CheckoutItemsTable>
        <Tr>
          <th width="10%">item</th>
          <th>descrição</th>
          <th width="15%">valores</th>
          <th width="5%"></th>
        </Tr>
        <Tr>
          <td>
            <Img />
          </td>
          <td>
            <ItemTitle>coacing particular (10 sessões)</ItemTitle>
            <ItemIntro>Pacote particular de coacing com patricia (10 sessões) + 4 florais online +  ebooks</ItemIntro>
          </td>
          <td>
            <ItemCost>R$ 2.100,00</ItemCost>
          </td>
          <td>
            <ButtonRemove>x</ButtonRemove>
          </td>
        </Tr>
        <Tr>
          <td>
            <Img />
          </td>
          <td>
            <ItemTitle>coacing particular (10 sessões)</ItemTitle>
            <ItemIntro>Pacote particular de coacing com patricia (10 sessões) + 4 florais online +  ebooks</ItemIntro>
          </td>
          <td>
            <ItemCost>R$ 2.100,00</ItemCost>
          </td>
          <td>
            <ButtonRemove>x</ButtonRemove>
          </td>
        </Tr>
        <Tr>
          <td>
            <Img />
          </td>
          <td>
            <ItemTitle>coacing particular (10 sessões)</ItemTitle>
            <ItemIntro>Pacote particular de coacing com patricia (10 sessões) + 4 florais online +  ebooks</ItemIntro>
          </td>
          <td>
            <ItemCost>R$ 2.100,00</ItemCost>
          </td>
          <td>
            <ButtonRemove>x</ButtonRemove>
          </td>
        </Tr>
      </CheckoutItemsTable>
      <CouponTitle>cupom de desconto</CouponTitle>
      <Row middle="xs" between="xs">
        <Col>
          <form>
            <CouponLabel>Digite seu vale presente ou cupom</CouponLabel>
            <CouponInput type="text" value="111111111111" />
            <CouponSubmit>Aplicar</CouponSubmit>
          </form>
        </Col>
        <Col>
          <Row end="xs">
            <Col>
              <TotalDiv>
                <TotalAmountSpam>Total:</TotalAmountSpam><TotalAmountValue>R$ 172,50</TotalAmountValue>
              </TotalDiv>
              <IntroSafe>
                <SafeSpan>compra segura</SafeSpan><SafeSpan>satisfação 100% garantida</SafeSpan>
              </IntroSafe>
            </Col>
          </Row>
        </Col>
      </Row>
    </Grid>
  );
}

CheckoutItems.propTypes = {

};

export default CheckoutItems;
