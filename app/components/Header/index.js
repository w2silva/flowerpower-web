/**
*
* Header
*
*/

import React from 'react';
// import styled from 'styled-components';
import { Link } from 'react-router-dom'

import Logo from './Logo'
import HeaderMenu from './HeaderMenu'
import Info from './Info'

function Header(props) {
  return (
    <div className='col-md-12'>
      <div className='row'>
        <div className='col-md-3'>
          <Logo/>
        </div>
        <div className='col-md-9'>
          <HeaderMenu titles={['Cadastro', 'Minha Conta']} to={['/register', '/me']}/>
          <HeaderMenu
            titles={['Home', 'Sobre Florais', 'Faça sua Terapia', 'Quem é Patrícia?', 'Nossos Planos', 'Contato']}
            to={['/', '/about', 'quiz', 'biography', 'bundles', 'contact']}
          />
        </div>
      </div>
      <div className='row'>
        <div className='col-md-12'>
          <Info/>
        </div>
      </div>
      { props.button ?
        <div className='row'>
          <div className='col-md-12'>
            <Link to='/quiz'>Faça Agora Sua Terapia</Link>
          </div>
        </div>
        :
        ''
      }
    </div>
  );
}

Header.propTypes = {

};

export default Header;
