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
import Burger from 'react-icons/lib/md/menu';
import { AwesomeButton } from 'react-awesome-button';
import { stack as Menu } from 'react-burger-menu';

import Logo from './Logo'
import HeaderMenu from './HeaderMenu'
import HeaderActionMenu from './HeaderActionMenu'
import Info from './Info'
import HeaderBurgerMenu from './HeaderBurgerMenu'
// Create a <Title> react component that renders an <h1> which is
// centered, palevioletred and sized at 1.5em
const HeaderStyled = styled.div`
  position: relative;
  width: 100%;
  font-size: 1em;
  padding: 20px 0px 30px 0px;
  overflow: hidden;
  margin-bottom: 4em;
  @media (min-width: 780px) {
    height: ${props => props.button ? '500px' : '400px'} !important;
  }
  @media (max-width: 780px) {
    height: ${props => props.button ? '500px' : '300px'} !important;
  }
`;

const BurgerWrapper = styled.a `
  @media (max-width: 780px) {
    font-size: 4em;
  }
  @media (min-width: 780px) {
    visibility: hidden
  }
`;

const HeaderEllipsis = styled.div`
  position: absolute;
  color: white;
  border-bottom-left-radius: 100% 60%;
  border-bottom-right-radius: 100% 60%;
  width: 100%;
  top: -350px;
  left: -50%;
  transform: translateX(50%);
  background-image: url(${bgBannerHome});
  background-color: transparent;
  background-position-y: 300px;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 780px) {
    border-bottom-left-radius: 100% 10%;
    border-bottom-right-radius: 100% 10%;
    height: ${props => props.button ? '850px' : '650px'};
  }
  @media (min-width: 780px) {
    border-bottom-left-radius: 100% 60%;
    border-bottom-right-radius: 100% 60%;
    height: ${props => props.button ? '850px' : '750px'};
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

export class Header extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
  }

  openMenu = () => {
    this.setState({
      isOpen: true
    })
  }

  handleStateChange = (state) => {
    this.setState({ isOpen: state.isOpen });
  }

  closeMenu = () => {
    this.setState({ isOpen: false });
  }

  render() {
    console.log('this.props.currentUrl: ', this.props.currentUrl)
    const showMainButton = this.props.currentUrl === '/';
    return (
      <HeaderStyled button={this.props.button}>
        <HeaderEllipsis button={this.props.button}/>
        <HeaderBurgerMenu closeMenu={this.closeMenu} isOpen={this.state.isOpen} handleStateChange={this.handleStateChange}/>
        <HeaderNav>
          <Grid>
              <Row top="xs" top="sm" middle="md" middle="lg" between="xs">
                <Col xs={9} sm={9} md={2} lg={2}>
                  <Logo/>
                </Col>
                <Col xs={3} sm={0} md={0} lg={0}>
                  <BurgerWrapper onClick={this.openMenu}>
                    <Burger/>
                  </BurgerWrapper>
                </Col>
                <Col xs={0} sm={3} md={10} lg={10}>
                  { !showMainButton &&
                    <HeaderActionMenu
                      handleClick={this.props.handleClick}
                      titles={['Faça sua Terapia']}
                      mobilehidden={true}
                      to={['/quiz']}
                      goTo={this.props.goTo}/>
                  }
                  <HeaderMenu
                    handleClick={this.props.handleClick}
                    titles={['Home', 'Sobre Florais', 'Quem é Patrícia?', 'Nossos Planos', 'Contato', 'Minha Conta']}
                    scroll={['top', 'description']}
                    mobilehidden={true}
                    to={['/biography', '/plans', '/contact', '/me']}
                  />
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <Row center="xs">
                    <Col xs={10}>
                      <Info button={this.props.button}/>
                    </Col>
                  </Row>
                </Col>
              </Row>
              { showMainButton ?
                <Row center="xs" style={{ margin: `6em 0 5em 0` }}>
                  <Col>
                    <Link to="/quiz">
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
}

Header.propTypes = {

};

export default Header;
