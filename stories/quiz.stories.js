import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import QuizComponent from 'components/QuizComponent'

import Provider from './Provider'

import bench from './benchmark/pedro-quiz.jpg'

storiesOf('Quiz', module)
  .addDecorator(story => (<Provider story={story()}/>))
  .add('benchmark', () => <img style={{height: '100%', width: '100%'}} src={bench}/>)
  .add('working', () =>
    <QuizComponent
      isNew={true}
      submitTherapy={action('submitTherapy')}
    />
  )
