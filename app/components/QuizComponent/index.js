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
import Questions from './Questions'

import styles from './styles.css'

function QuizComponent(props) {
  const isNew = true
  
  return (
    <div>
      <Helmet>
        <title>Quiz</title>
        <meta name="description" content="Description of Quiz" />
      </Helmet>
      <Header/>
      <Profile isNew={isNew}/>
      <Questions submitTherapy={props.submitTherapy} className={styles.demo}/>
      <Footer/>
    </div>
  );
}

QuizComponent.propTypes = {

};

export default QuizComponent;
