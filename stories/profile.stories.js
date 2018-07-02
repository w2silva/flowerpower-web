import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import SelectProfileComponent from 'components/SelectProfileComponent'

import Provider from './Provider'

import bench from './benchmark/pedro-perfil-v2.jpg'

storiesOf('Profile', module)
  .addDecorator(story => (<Provider story={story()}/>))
  .add('👍 benchmark', () => <img style={{height: '100%', width: '100%'}} src={bench}/>)
  .add('with a new profile', () =>
    <SelectProfileComponent />
  )
