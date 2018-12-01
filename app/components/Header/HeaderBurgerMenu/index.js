/**
*
* HeaderBurgerMenu
*
*/

import React from 'react';
// import styled from 'styled-components';
import { stack as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import Close from 'react-icons/lib/md/close';


function HeaderBurgerMenu(props) {
  const style = {
    height: '60px',
    fontSize: '15px',
    color: 'white',
    marginLeft: '30px',

  }
  return (
    <Menu
      right
      styles={{ bmOverlay: { height: '2000px', top: 0, backgroundImage: 'linear-gradient(to bottom right, rgba(0,0,0,0.8) , rgba(0,0,0,0.8))' }, bmMenuWrap: { height: '2000px' } }}
      width={'100%'}
      isOpen={props.isOpen}
      onStateChange={(state) => props.handleStateChange(state)}
    >
      <a onClick={props.closeMenu} style={{ textAlign: 'right', color: 'white', fontSize: '30px', paddingRight: '20px' }}><Close/></a>
      <Link to={'/'} style={style} onClick={props.closeMenu} className="menu-item" >HOME</Link>
      <Link to={'/quiz'} style={style} onClick={props.closeMenu} className="menu-item" >FAÇA SUA TERAPIA</Link>
      <Link to={'/biography'} style={style} onClick={props.closeMenu} className="menu-item" >QUEM É PATRICIA?</Link>
      <Link to={'/plans'} style={style} onClick={props.closeMenu} className="menu-item" >NOSSOS PLANOS</Link>
      <Link to={'/contact'} style={style} onClick={props.closeMenu} className="menu-item" >CONTATO</Link>
      <Link to={'/me'} style={style} onClick={props.closeMenu} className="menu-item" >MINHA CONTA</Link>
    </Menu>
  );
}

HeaderBurgerMenu.propTypes = {

};

export default HeaderBurgerMenu;
