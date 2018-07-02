import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import HomePageComponent from 'components/HomePageComponent'

import Provider from './Provider'

import bench from './benchmark/pedro-home-v2.jpg'

storiesOf('Home', module)
  .addDecorator(story => (<Provider story={story()}/>))
  .add('👍 benchmark', () => <img style={{height: '100%', width: '100%'}} src={bench}/>)
  .add('with a new profile', () =>
    <HomePageComponent />
  )
