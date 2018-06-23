/**
*
* Header
*
*/

import React from 'react';
// import styled from 'styled-components';
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Grid, Row, Col } from 'react-styled-flexboxgrid'

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
`;
  
const HeaderEllipsis = styled.div`  
  position: absolute;
  color: white;
  border-bottom-left-radius: 50% 100%;
  border-bottom-right-radius: 50% 100%;
  width: 150%;
  height: 100%;
  top: 0;
  left: -100%;
  transform: translateX(50%);
  background-image: url(http://ellipsis.themewich.com/wp-content/themes/ellipsis/images/skins/galaxy/default/background.jpg);
  background-color: transparent;
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
`;

function Header(props) {
  return (
    <HeaderStyled>
      <HeaderEllipsis />
      <Grid>
        <Row middle="xs">
          <Col xs={3}>
            <Logo/>
          </Col>
          <Col xs={9}>
            <HeaderMenu titles={['Cadastro', 'Minha Conta']} to={['/register', '/me']}/>
            <HeaderMenu
              titles={['Home', 'Sobre Florais', 'Faça sua Terapia', 'Quem é Patrícia?', 'Nossos Planos', 'Contato']}
              to={['/', '/about', 'quiz', 'biography', 'bundles', 'contact']}
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Row center="xs">
              <Col xs={8}>
                <Info/>
              </Col>
            </Row>
          </Col>
        </Row>
        { props.button ?
          <div className='row'>
            <div className='col-md-12'>
              <Link to='/quiz'>Faça Agora Sua Terapia</Link>
            </div>
          </div>
          :
          ''
        }
      </Grid>
    </HeaderStyled>
  );
}

Header.propTypes = {

};

export default Header;
