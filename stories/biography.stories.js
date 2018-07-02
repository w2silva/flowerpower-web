import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import BiographyComponent from 'components/BiographyComponent'

import Provider from './Provider'

import bench from './benchmark/pedro-biografia.jpg'

storiesOf('Biography', module)
  .addDecorator(story => (<Provider story={story()}/>))
  .add('👍 benchmark', () => <img style={{height: '100%', width: '100%'}} src={bench}/>)
  .add('with a new profile', () =>
    <BiographyComponent />
  )
