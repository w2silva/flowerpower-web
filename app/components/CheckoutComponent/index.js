/**
*
* CheckoutComponent
*
*/

import React from 'react';
// import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

import Header from 'components/Header'
import Footer from 'components/Footer'
import H2 from 'components/H2'
import CheckoutItems from './CheckoutItems'
import CheckoutPayment from './CheckoutPayment'
import CheckoutSignup from './CheckoutSignup'
import { AwesomeButton } from 'react-awesome-button';

const MarginFooter = styled.div`
  margin: 1em 0px 5em 0;
  text-align: center;
`;


export class CheckoutComponent extends React.PureComponent {

  constructor(props) {
    super(props)
    console.log('[CheckoutComponent.constructor] props.me', props.me)
    this.state = {
      attemptingPayment: false,
      payment: {
        creditCard: {
          number: '',
          name: '',
          expiry: '',
          cvc: ''
        },
        boleto: {
          cpf: ''
        },
        numberOfInstallments: 1,
        type: 'creditcard'
      },
      client: {

      }
      // payment: {
      //   creditCard: {
      //     number: '5555 6666 7777 8884',
      //     name: 'PEDRO CAVALCANTE',
      //     expiry: '11/19',
      //     cvc: '123',
      //     birthdate: '15/01/1987'
      //   },
      //   boleto: {
      //     cpf: ''
      //   },
      //   numberOfInstallments: 1,
      //   type: 'creditcard'
      // },
      // client: {
      //   name: 'PEDRO VICTOR LOSADA CAVALCANTE',
      //   taxDocumentValue: '337.611.878-74',
      //   phone: '11 994593789',
      //   street: 'Rua Marieta',
      //   streetNumber: '71',
      //   complement: '',
      //   district: 'Jd America',
      //   postalCode: '01442·010',
      //   city: 'Sao Paulo',
      //   state: 'SP'
      // }
    }
    const me = props.me.me;
    if (me) {
      this.state.client.user = me.id;
      this.state.client.client = me.client.id;
      this.state.client.name = me.name;
      this.state.client.telephone = me.telephones[0];
      this.state.client.email = me.email;
    }
  }

  makePayment = () => {
    console.log(`[CheckoutComponent.CheckoutComponent] bundle id: ${this.props.bundle.id}`)
    console.log(`[CheckoutComponent.CheckoutComponent] payment: ${JSON.stringify(this.state.payment)}`)
    this.setState({
      attemptingPayment: true
    })
    this.props.makePayment(this.props.bundle.id, this.state.payment, this.state.client)
  }

  updatePayment = (payment) => {
    console.log('[CheckoutComponent.updatePayment] payment', payment)
    this.setState({ payment })
  }

  updateClient = (client) => {
    console.log('[CheckoutComponent.updateClient] client', client)
    this.setState({ client })
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Quiz</title>
          <meta name="description" content="Pagamento" />
        </Helmet>
        <Header />
        <H2 align="center">Checkout</H2>
        <CheckoutItems bundle={this.props.bundle}/>
        <CheckoutPayment
          updatePayment={this.updatePayment}
          payment={this.state.payment}/>
        <CheckoutSignup
          updateClient={this.updateClient}
          client={this.state.client}/>
        <MarginFooter>

          {!this.state.attemptingPayment ?
            <AwesomeButton
              type="secondary"
              action={this.makePayment}>
              concluir compra e prosseguir com terapia
            </AwesomeButton>
          :
            <AwesomeButton
              type="secondary"
              disabled>
              efetuando pagamento...
            </AwesomeButton>
          }
        </MarginFooter>
        <Footer />
      </div>
    );
  }
}

CheckoutComponent.propTypes = {

};

export default CheckoutComponent;
