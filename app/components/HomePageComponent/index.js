/**
*
* HomePageComponent
*
*/

import React from 'react';
// import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import Header from 'components/Header'
import Description from './Description'
import Schedule from 'components/Schedule'
import ClientProfile from './ClientProfile'
import OwnerProfile from 'components/OwnerProfile'
import Footer from 'components/Footer'
import scrollToComponent from 'react-scroll-to-component';



export class HomePageComponent extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  handleClick = (title) => () => {
    let to;
    if (title === 'Description') {
      to = this.Description
    } else if (title === 'Top') {
      to = this.Top
    } else if (title === 'Therapy') {
      to = this.Therapy
    } else if (title === 'Biography') {
      to = this.Biography
    }
    this.props.goTo('/');
    scrollToComponent(to, { offset: 0, align: 'top', duration: 800, ease:'inExpo'})
  }

  render () {
    return (
      <div>
        <Helmet>
          <title>Quiz</title>
          <meta name="description" content="Description of Quiz" />
        </Helmet>
        <Header button={true} handleClick={this.handleClick}/>
        <Description/>
        <Schedule />
        <ClientProfile />
        <OwnerProfile button/>
        <Schedule />
        <Footer />
      </div>
    );
  }
}

HomePageComponent.propTypes = {

};

export default HomePageComponent;
