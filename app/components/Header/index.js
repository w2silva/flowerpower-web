/**
*
* Header
*
*/

import React from 'react';
// import styled from 'styled-components';
import { Link } from 'react-router-dom';
import styled, {ThemeProvider} from 'styled-components'
import { Grid, Row, Col } from 'react-styled-flexboxgrid'
import bgBannerHome from 'images/bg-banner-home.png';
import Button from 'components/Button';
import Arrow from 'react-icons/lib/io/android-arrow-forward';
import { AwesomeButton } from 'react-awesome-button';

import Logo from './Logo'
import HeaderMenu from './HeaderMenu'
import Info from './Info'

// Create a <Title> react component that renders an <h1> which is
// centered, palevioletred and sized at 1.5em
const HeaderStyled = styled.div`
  position: relative;
  width: 100%;
  font-size: 1em;
  padding: 20px 0px 30px 0px;
  margin-bottom: 4em;
  overflow: hidden;
  height: ${props => props.button ? '500px' : '300px'}
`;

const HeaderEllipsis = styled.div`
  position: absolute;
  color: white;
  border-bottom-left-radius: 100% 100%;
  border-bottom-right-radius: 100% 100%;
  width: 120%;
  height: ${props => props.button ? '850px' : '650px'};
  top: -350px;
  left: -70%;
  transform: translateX(50%);
  background-image: url(${bgBannerHome});
  background-color: transparent;
  background-position-y: 300px;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 780px) {
    border-bottom-left-radius: 150% 100%;
    border-bottom-right-radius: 150% 100%;
  }
`;

const HeaderNav = styled.div`
  position: relative;
  top: 0;
  left: 0;
  color: white;
`;

// const HeaderButton = styled.div`
//   display: inline-block;
//   background-image: linear-gradient(to right, #76558e, #b0336b);
//   color: white;
//   border-radius: 50px;
//   padding: 10px 35px;
//   text-align: center;
//   text-transform: uppercase;
//   font-weight: 600;
//   font-size: 1.0em;
//   box-shadow: 4px 4px 20px 0px #0006;
//
//   &:hover {
//     color: white;
//   }
// `;

function Header(props) {
  return (
    <HeaderStyled button={props.button}>
      <HeaderEllipsis button={props.button}/>
      <HeaderNav>
        <Grid>
            <Row top="xs" top="sm" middle="md" middle="lg" between="xs">
              <Col xs={3} sm={3} md={2} lg={2}>
                <Logo/>
              </Col>
              <Col xs={9} sm={9} md={10} lg={10}>
                <HeaderMenu
                  handleClick={props.handleClick}
                  titles={['Faça sua Terapia']}
                  to={['/quiz']}/>
                <HeaderMenu
                  handleClick={props.handleClick}
                  titles={['Home', 'Sobre Florais', 'Quem é Patrícia?', 'Nossos Planos', 'Contato', 'Minha Conta']}
                  scroll={['top', 'description']}
                  to={['/biography', '/plans', '/contact', '/me']}
                />
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <Row center="xs">
                  <Col xs={10}>
                    <Info button={props.button}/>
                  </Col>
                </Row>
              </Col>
            </Row>
            { props.button ?
              <Row center="xs" style={{ margin: `6em 0 5em 0` }}>
                <Col>
                  <Link to="/therapy">
                    {/*<HeaderButton>faça agora sua terapia <Arrow/></HeaderButton>*/}
                    <AwesomeButton>FAÇA AGORA SUA TERAPIA <Arrow/></AwesomeButton>
                  </Link>
                </Col>
              </Row>
              :
              ''
          }
        </Grid>
      </HeaderNav>
    </HeaderStyled>
  );
}

Header.propTypes = {

};

export default Header;
