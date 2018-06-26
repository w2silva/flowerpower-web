/**
*
* QuizComponent
*
*/

import React from 'react';
// import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import Header from 'components/Header'
import Footer from 'components/Footer'
import Profile from 'components/Profile'
import H2 from 'components/H2'
import Questions from './Questions'

import styles from './styles.css'

function QuizComponent(props) {
  const isNew = true
  
  return (
    <div>
      <Helmet>
        <title>Quiz</title>
        <meta name="description" content="Description of Quiz" />
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i" rel="stylesheet" />
      </Helmet>
      <Header/>
      <H2 align="center">Terapia</H2>
      <Profile isNew={isNew}/>
      <H2 align="center">Agora vamos começar a terapia</H2>
      <Questions submitTherapy={props.submitTherapy} className={styles.questions}/>
      <Footer/>
    </div>
  );
}

QuizComponent.propTypes = {

};

export default QuizComponent;
