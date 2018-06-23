/**
*
* QuizComponent
*
*/

import React from 'react';
// import styled from 'styled-components';
import { ThemeProvider } from 'styled-components'
import { Helmet } from 'react-helmet';
import Header from 'components/Header'
import Footer from 'components/Footer'
import Profile from 'components/Profile'
import H2 from 'components/H2'
import Questions from './Questions'

import styles from './styles.css'

const theme = {
  flexboxgrid: {
    // Defaults
    gridSize: 12, // columns
    gutterWidth: 1, // rem
    outerMargin: 2, // rem
    mediaQuery: 'only screen',
    container: {
      sm: 46, // rem
      md: 61, // rem
      lg: 60  // rem
    },
    breakpoints: {
      xs: 0,  // em
      sm: 48, // em
      md: 64, // em
      lg: 75  // em
    }
  }
};

function QuizComponent(props) {
  const isNew = true
  
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}

QuizComponent.propTypes = {

};

export default QuizComponent;
