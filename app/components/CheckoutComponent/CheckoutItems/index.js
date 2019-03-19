/**
*
* CheckoutComponent
*
*/

import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-styled-flexboxgrid'
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles';
import { AwesomeButton } from 'react-awesome-button';

const CheckoutItemsWrapper = styled.div`
  width: 100%;
  background-color: #f3f3f3;
  border-radius: 40px;
  margin: 100px 0px 50px 0px;
  padding: 40px;
`;

const CheckoutItemsTableDesktop = styled.table`
  width: 100%;
  @media (max-width: 780px) {
    visibility: collapse;
  }
`;

const CheckoutItemsTableMobile = styled.table`
  width: 100%;
  @media (min-width: 780px) {
    visibility: collapse;
  }
`;

const Tr = styled.tr`
  th {
    text-transform: uppercase;
    color: #666;
    font-size: 1.3em;
    font-weight: 400;
    border-bottom: solid 1px #eee;
    padding: 5px 0px;

  }

  td {
    padding: 10px 0px;
    border-bottom: solid 1px #eee;
    @media (max-width: 780px) {
      display: block;
      width: 100%
    }
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
  font-size: 1.3em;
  text-transform: uppercase;
`;

const ItemIntro = styled.span`
  font-size: .9em;
`;

const ItemCost = styled.span`
  font-weight: 600;
  font-size: 1.3em;
  color: #333;
`;

// const ButtonRemove = styled.button`
//   background-color: #ddd;
//   border-radius: 2px;
// `;

const TotalDiv = styled.div`
  display: block;
  padding: 5px 10px;
  text-align: right;
  margin-top: 50px;
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
  margin-top: 50px;
  font-size: 1.3em;
`;

const CouponLabel = styled.label`
  display: block;
  font-size: .9em;
  margin-bottom: 5px;
`;

const CouponInput = styled.input`
  display: block;
  width: 100%;
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
const pictures = [
  require('images/Icon2.png'),
  require('images/Icon3.png'),
  require('images/Icon4.png'),
  require('images/Icon5.png'),
  require('images/Icon6.png'),
  require('images/Icon7.png'),
  require('images/Icon8.png'),
  require('images/Icon9.png'),
  require('images/Icon10.png'),
  require('images/Icon11.png'),
  require('images/Icon12.png'),
  require('images/Icon13.png'),
  require('images/Icon14.png'),
  require('images/Icon15.png'),
  require('images/Icon16.png'),
  require('images/Icon17.png'),
  require('images/Icon18.png'),
  require('images/Icon19.png'),
  require('images/Icon20.png'),
  require('images/Icon21.png'),
  require('images/Icon22.png'),
  require('images/Icon23.png'),
  require('images/Icon24.png'),
  require('images/Icon25.png'),
  require('images/Icon28.png'),
  require('images/Icon29.png'),
  require('images/Icon30.png'),
  require('images/Icon31.png'),
]

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    fontSize: '14px !important',
    width: '100% !important',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '100% !important',
    fontSize: 15,
    border: '0 !important',
    background: 'none !important',
    margin: '0 !important',
  },
  birthday: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '100% !important',
    fontSize: 15,
    border: '0 !important',
    background: 'none !important',
    margin: '0 !important',
    height: 32
  },
  password: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '100% !important',
    fontSize: 15,
    border: '0 !important',
    background: 'none !important',
    margin: '0 !important',
    height: 32
  },
  menu: {
    width: 200,
  },
  formControl: {
    margin: '0 !important',
    minWidth: 120,
    width: '100%',
    fontSize: 15
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
    backgroundColor: 'grey'
  },
});

function CheckoutItems(props) {
  const picture = pictures[Math.floor(Math.random()*pictures.length)]

  const {classes} = props;
  return (
    <Grid>
      <CheckoutItemsWrapper>
          <CheckoutItemsTableDesktop>
            <thead>
              <Tr>
                <th width="10%">item</th>
                <th width="50%">descrição</th>
                <th width="15%">valores</th>
                <th width="5%"></th>
              </Tr>
            </thead>
            <tbody>
              <Tr>
                <td>
                  <Img src={picture}/>
                </td>
                <td>
                  <ItemTitle>{props.bundle.name}</ItemTitle>
                  <ItemIntro>{props.bundle.statement}</ItemIntro>
                </td>
                <td>
                  <ItemCost>R$ {props.bundle.price.amount.toFixed(2).replace('.', ',')}</ItemCost>
                </td>
                <td>
                  {/* <ButtonRemove>x</ButtonRemove> */}
                </td>
              </Tr>
            </tbody>
          </CheckoutItemsTableDesktop>
          <CheckoutItemsTableMobile>
            <thead>
              <Tr>
                <th width="100%">item</th>
              </Tr>
            </thead>
            <tbody>
              <Tr>
                <td>
                  <Img src={picture}/>
                </td>
                <td>
                  <ItemTitle>{props.bundle.name}</ItemTitle>
                  <ItemIntro>{props.bundle.statement}</ItemIntro>
                </td>
                <td>
                  <ItemCost>R$ {props.bundle.price.amount.toFixed(2).replace('.', ',')}</ItemCost>
                  {/* <ButtonRemove>x</ButtonRemove> */}
                </td>
              </Tr>
            </tbody>
          </CheckoutItemsTableMobile>
          <Row middle="xs" between="xs">
            <Col xs={12} sm={12} md lg>
              <CouponTitle>cupom de desconto</CouponTitle>
              <form>
                <Row middle="xs">
                  <Col xs={12} sm={12} md lg>
                    <TextField
                      id="name"
                      label="Digite seu vale presente ou cupom"
                      name="name"
                      inputProps={{ className: classes.textField }}
                      className={classes.textField}
                      placeholder="Digite o nome do perfil"
                      margin="normal"
                    />
                  </Col>
                  <Col>
                    <span>&nbsp;</span><br />
                    <AwesomeButton type="secondary">Aplicar</AwesomeButton>
                  </Col>
                </Row>
              </form>
            </Col>
            <Col xs={12} sm={12} md lg>
              <Row end="xs">
                <Col>
                  <TotalDiv>
                    <TotalAmountSpam>Total:</TotalAmountSpam><TotalAmountValue>R$ {props.bundle.price.amount.toFixed(2).replace('.', ',')}</TotalAmountValue>
                  </TotalDiv>
                  <IntroSafe>
                    <SafeSpan>compra segura</SafeSpan><SafeSpan>satisfação 100% garantida</SafeSpan>
                  </IntroSafe>
                </Col>
              </Row>
            </Col>
          </Row>
      </CheckoutItemsWrapper>
    </Grid>
  );
}

CheckoutItems.propTypes = {

};

export default withStyles(styles)(CheckoutItems);
