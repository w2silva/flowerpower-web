/**
*
* HeaderBurgerMenu
*
*/

import React from 'react';
// import styled from 'styled-components';
import { stack as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';


function HeaderBurgerMenu(props) {
  const style = {
    height: '30px',
    fontSize: '20px',
    color: 'white',
    marginLeft: '20px',
  }
  return (
    <Menu
      right
      styles={{ bmOverlay: { height: '2000px', top: 0, backgroundImage: 'linear-gradient(to bottom right, rgba(119,157,203,0.8) , rgba(0,0,0,1))' }, bmMenuWrap: { height: '2000px' } }}
      width={'100%'}
      isOpen={props.isOpen}
      onStateChange={(state) => props.handleStateChange(state)}
    >
      <Link to={'/quiz'} style={style} onClick={props.closeMenu} className="menu-item" >Faça sua Terapia</Link>
    </Menu>
  );
}

HeaderBurgerMenu.propTypes = {

};

export default HeaderBurgerMenu;
