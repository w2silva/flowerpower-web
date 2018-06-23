/**
*
* Profile
*
*/

import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-styled-flexboxgrid'
import H5 from 'components/H5'
import Form from 'components/Form'

const ProfilePicture = styled.div`
  display: inline-block;
  width: 100px;
  height: 100px;
  background-color: transparent;
  border: solid 1px #ddd;

  div {
    display: flex;
    background-color: #eee;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;

    span {
      font-size: .7em;
      text-transform: uppercase;
    }
  }
`;

function Profile(props) {
  return (
    <Grid>
      <H5>Cadastro de Perfil (Pessoa)</H5>
      <Form>        
        <Row middle="xs">
          <Col>
            <ProfilePicture>
              {props.isNew ?
                <div>
                  <span>Upload de Foto</span>
                </div>
                :
                <img/>
              }
            </ProfilePicture>
          </Col>
          <Col md={5}>
            <Row>
              <Col md={12}>
              <div className="group">
                  <label>Nome Completo</label>
                  <input disabled={!props.isNew} type='text' name='name'></input>
                </div>
              </Col>
              <Col md={6}>
              <div className="group">
                  <label>Data de Nascimento</label>
                  <input disabled={!props.isNew} type='date' name='birthday'></input>
                </div>
              </Col>
              <Col md={6}>
                <div className="group">
                  <label>Relacionamento</label>
                  <select disabled={!props.isNew}>
                    <option value=''></option>
                    <option value='human'>Amigo ou parente</option>
                    <option value='pet'>Gato ou cachorro</option>
                    <option value='main'>Meu perfil</option>
                  </select>
                </div>
              </Col>
            </Row>
          </Col>
          <Col md={4}>
            <div className="group">
              <label>Sexo</label>
              <select disabled={!props.isNew}>
                <option value=''></option>
                <option value='female'>Feminino</option>
                <option value='male'>Masculino</option>
                <option value='other'>Outro</option>
              </select>
            </div>
            <div className="group">
              <label>E-mail</label>
              <input disabled={!props.isNew} type='text' name='email'></input>
            </div>
          </Col>
        </Row>
      </Form>
    </Grid>
  );
}

Profile.propTypes = {

};

export default Profile;
