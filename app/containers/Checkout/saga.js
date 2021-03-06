import { takeLatest, put, call, select } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import request from 'utils/request';
import delay from 'utils/delay';

import { makeSelectToken } from 'containers/Login/selectors';

import {
  requestDiagnosis,
} from 'containers/Quiz/actions';
import { makeSelectDiagnosis } from 'containers/Quiz/selectors';

import {
  tokenSuccess,
  loginSuccess,
  loginFailure
} from 'containers/Login/actions'

import {
  meSuccess,
} from 'containers/Me/actions';

import {
  registerSuccess,
  registerFailure,
} from 'containers/Register/actions';


import {
  BUNDLE_CHECKOUT,
  REQUEST_PAYMENT
} from './constants';

const pubKey = process.env.MOIP_PUBKEY;

console.log(`pubKey: ${pubKey}`)

export function* bundleCheckoutSaga() {
  yield put(push('/checkout'))
}

export function* makePaymentSaga(action) {
  console.log('[makePaymentSaga] request payment for bundle', action.bundle)
  console.log('[makePaymentSaga] payment', action.payment)
  console.log('[makePaymentSaga] client', action.client)

  let accessToken = yield select(makeSelectToken());

  if (!accessToken) {
    try {
      const me = {
        name: action.client.name,
        email: action.client.email.toLowerCase(),
        password: action.client.password,
      };

      const client = {
        profiles: [{
          name: action.client.name,
          gender: action.client.gender,
          target: 'human',
          main: true
        }]
      }

      yield call(request, '/users', { body: { user: me, client }, method: 'POST' });
      const authHeader = btoa(`${action.client.email}:${action.client.password}`);

      const { token, user } = yield request('/auth', {
        method: 'POST',
        headers: {
          Authorization: `Basic ${authHeader}`,
        },
      });
      window.localStorage.setItem('token', token);
      yield put(meSuccess(user));
      yield put(tokenSuccess(token));
      yield put(loginSuccess());
      yield put(registerSuccess());
      accessToken = token;
    } catch (err) {
      yield put(registerFailure(err.toString()));
    }
    // 4. se der erro, despachar ação de erro
  }

  console.log('****************************')

  const bundle = action.bundle;
  const bundleId = bundle.id;
  const paymentInfo = action.payment;
  const client = action.client;

  function* makePaymentBoleto() {
    const phoneAreaCode = client.phone.substring(0, 2);
    const phoneNumber = client.phone.substring(2);
    const paymentData = {
      payment: {
        method: 'boleto',
        provider: 'moip',
        number_of_installments: paymentInfo.numberOfInstallments || 1, /* FIXME */
        provider_info: {
          customer: {
            fullname: client.name,
            birthdate: paymentInfo.boleto.birthdate,
            taxDocument: {
              type: 'CPF',
              number: client.taxDocumentValue.replace(/\D/g,''),
            },
            phone: {
              countryCode: '55',
              areaCode: phoneAreaCode,
              number: phoneNumber
            },
            shippingAddress: {
              street: client.street,
              streetNumber: client.streetNumber,
              complement: client.complement || '',
              district: client.district,
              zipCode: client.postalCode.replace(/·/g, '-'),
              city: client.city,
              state: client.state,
              country: 'BRA'
            }
          }
        }
      }
    };
    try {
      const payment = yield call(request, `/bundles/${bundleId}/pay`, {
        method: 'POST',
        body: paymentData,
        accessToken
      });
    } catch(e) {
      console.log('ERROR: payment error', e.toString())
      // yield put(paymentError(e.toString()))
      return;
    }
  }

  function* makePaymentCreditCard() {
    const ccData = {
      number: paymentInfo.creditCard.number.replace(/ /g, ''),
      cvc: paymentInfo.creditCard.cvc,
      expMonth: paymentInfo.creditCard.expiry.split('/')[0],
      expYear: paymentInfo.creditCard.expiry.split('/')[1],
      pubKey
    }

    const cc = new window.Moip.CreditCard(ccData);
    if (!cc.isValid()) {
      console.log('ERROR: credit_card_not_valid', ccData)
      // yield put(paymentError('credit_card_not_valid'))
      return;
    }
    const ccHash = cc.hash();
    const birthdateComponents = paymentInfo.creditCard.birthdate.split('/')
    const birthdate = [birthdateComponents[2], birthdateComponents[1], birthdateComponents[0]].join('-')

    console.log('birthdate', birthdate)

    const phoneAreaCode = client.phone.substring(0, 2);
    const phoneNumber = client.phone.substring(2);
    const paymentData = {
      payment: {
        method: 'credit_card',
        provider: 'moip',
        number_of_installments: paymentInfo.numberOfInstallments,
        provider_info: {
          credit_card_hash: ccHash,
          customer: {
            fullname: client.name,
            birthdate: paymentInfo.creditCard.birthdate,
            taxDocument: {
              type: 'CPF',
              number: client.taxDocumentValue.replace(/\D/g,''),
            },
            phone: {
              countryCode: '55',
              areaCode: phoneAreaCode,
              number: phoneNumber
            },
            shippingAddress: {
              street: client.street,
              streetNumber: client.streetNumber,
              complement: client.complement || '',
              district: client.district,
              zipCode: client.postalCode.replace(/·/g, '-'),
              city: client.city,
              state: client.state,
              country: 'BRA'
            }
          },
          holder: {
            fullname: paymentInfo.creditCard.name,
            birthdate: birthdate,
            taxDocument: {
              type: 'CPF',
              number: client.taxDocumentValue.replace(/\D/g,''),
            },
            phone: {
              countryCode: '55',
              areaCode: phoneAreaCode,
              number: phoneNumber
            }
          }
        }
      }
    };
    try {
      let purchase = yield call(request, `/bundles/${bundleId}/pay`, {
        method: 'POST',
        body: paymentData,
        accessToken
      });

      yield call(delay, 3000);
      console.log('[1] retrieving purchase...')
      while (true) { // eslint-disable-line no-constant-condition
        purchase = yield call(request, `/purchases/${purchase.id}`, { accessToken });
        console.log(`[2] purchase retrieved: ${purchase.state}`)
        if (purchase.state === 'waiting') { // keep polling
          console.log('[3a] keep polling')
          yield call(delay, 3000);
        } else if (purchase.state === 'idle') {
          console.log('[3b] something went wrong')
          // const result = {
          //   status: payment.status,
          //   status_reason: payment.status_reason,
          // };
          // yield put(paymentError(result));
          console.log(`[2] ERROR: ${result}`)
          return;
        } else if (purchase.state === 'purchased') {
          console.log('[3c] purchase success!')
          const diagnosis = yield select(makeSelectDiagnosis())
          if (diagnosis) {
            yield put(requestDiagnosis(diagnosis.id))
            // yield put(paymentDone());
            yield put(push('/results'));
          } else {
            yield put(push('/me'))
          }
          return;
        }
      }

    } catch(e) {
      console.log('ERROR: payment error', e.toString())
      // yield put(paymentError(e.toString()))
      return;
    }
  }

  function* makePaymentFree() {
    const paymentData = {
      payment: {
        method: 'free',
        provider: 'free',
        provider_info: {
          address: {
            city: client.city,
            complement: client.complement,
            district: client.district,
            postalCode: client.postalCode,
            state: client.state,
            street: client.street,
            streetNumber: client.streetNumber,
          },
          phone: client.phone,
          taxDocument: client.taxDocumentValue
        }
      }
    };
    try {
      let purchase = yield call(request, `/bundles/${bundleId}/pay`, {
        method: 'POST',
        body: paymentData,
        accessToken
      });

      yield call(delay, 3000);
      console.log('[1] retrieving purchase...')
      while (true) { // eslint-disable-line no-constant-condition
        purchase = yield call(request, `/purchases/${purchase.id}`, { accessToken });
        console.log(`[2] purchase retrieved: ${purchase.state}`)
        if (purchase.state === 'waiting') { // keep polling
          console.log('[3a] keep polling')
          yield call(delay, 3000);
        } else if (purchase.state === 'idle') {
          console.log('[3b] something went wrong')
          // const result = {
          //   status: payment.status,
          //   status_reason: payment.status_reason,
          // };
          // yield put(paymentError(result));
          console.log(`[2] ERROR: ${result}`)
          return;
        } else if (purchase.state === 'purchased') {
          console.log('[3c] purchase success!')
          const diagnosis = yield select(makeSelectDiagnosis())
          if (diagnosis) {
            yield put(requestDiagnosis(diagnosis.id))
            // yield put(paymentDone());
            yield put(push('/results'));
          } else {
            yield put(push('/me'))
          }
          return;
        }
      }

    } catch(e) {
      console.log('ERROR: payment error', e.toString())
      // yield put(paymentError(e.toString()))
      return;
    }
  }

  if (bundle.price.amount < 0.01) {
    yield makePaymentFree();
  } else if (paymentInfo.type === 'creditcard') {
    yield makePaymentCreditCard();
  } else if (paymentInfo.type === 'boleto') {
    yield makePaymentBoleto();
  }
}


export default function* defaultSaga() {
  console.log('************* LOADING CHECKOUT')
  yield takeLatest(BUNDLE_CHECKOUT, bundleCheckoutSaga);
  yield takeLatest(REQUEST_PAYMENT, makePaymentSaga);
}
