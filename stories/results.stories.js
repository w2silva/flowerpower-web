import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ResultsComponent from 'components/ResultsComponent'

import Provider from './Provider'

import bench from './benchmark/pedro-resultados-v2.jpg'

storiesOf('Results', module)
  .addDecorator(story => (<Provider story={story()}/>))
  .add('👍 benchmark', () => <img style={{height: '100%', width: '100%'}} src={bench}/>)
  .add('working', () =>
    <ResultsComponent/>
  )
