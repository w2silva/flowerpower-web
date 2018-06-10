/**
*
* Profile
*
*/

import React from 'react';
// import styled from 'styled-components';


function Profile(props) {
  return (
    <div>
      {props.isNew ?
        <div>
          <h5>Cadastro de Perfil (Pessoa)</h5>
          <span>Upload de Foto</span>
        </div>
        :
        <img/>
      }
      <form>
        <div>
          <span>Nome Completo</span>
          <input disabled={!props.isNew} type='text' name='name'></input>
        </div>
        <div>
          <span>Sexo</span>
          <select disabled={!props.isNew}>
            <option value=''></option>
            <option value='female'>Feminino</option>
            <option value='male'>Masculino</option>
            <option value='other'>Outro</option>
          </select>
        </div>
        <div>
          <span>Data de Nascimento</span>
          <input disabled={!props.isNew} type='date' name='birthday'></input>
        </div>
        <div>
          <span>Relacionamento</span>
          <select disabled={!props.isNew}>
            <option value=''></option>
            <option value='human'>Amigo ou parente</option>
            <option value='pet'>Gato ou cachorro</option>
            <option value='main'>Meu perfil</option>
          </select>
        </div>
        <div>
          <span>E-mail</span>
          <input disabled={!props.isNew} type='text' name='email'></input>
        </div>
      </form>
    </div>
  );
}

Profile.propTypes = {

};

export default Profile;
