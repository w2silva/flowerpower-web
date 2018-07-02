import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import CheckoutComponent from 'components/CheckoutComponent'

import Provider from './Provider'

import bench from './benchmark/pedro-checkout-v2.jpg'

storiesOf('Checkout', module)
  .addDecorator(story => (<Provider story={story()}/>))
  .add('👍 benchmark', () => <img style={{height: '100%', width: '100%'}} src={bench}/>)
  .add('with a new profile', () =>
    <CheckoutComponent />
  )
