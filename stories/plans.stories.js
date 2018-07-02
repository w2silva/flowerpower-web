import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import PlansComponent from 'components/PlansComponent'

import Provider from './Provider'

import bench from './benchmark/pedro-planos.jpg'

storiesOf('Plans', module)
  .addDecorator(story => (<Provider story={story()}/>))
  .add('👍 benchmark', () => <img style={{height: '100%', width: '100%'}} src={bench}/>)
  .add('working', () =>
    <PlansComponent />
  )
