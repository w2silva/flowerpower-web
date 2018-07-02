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

const ProfileContainer = styled.div`
  margin-bottom: 6em;

  h5 {
    margin-bottom: 2em;
  }
`;

function Profile(props) {
  return (
    <Grid>
      <ProfileContainer>
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
            <Col xs={12} sm={12} md={5} lg={5}>
              <Row>
                <Col xs={12} sm={12} md={12} lg={12}>
                  <div className="group">
                    <label>Nome Completo</label>
                    <input disabled={!props.isNew} type='text' name='name'></input>
                  </div>
                </Col>
                <Col xs={12} sm={12} md={6} lg={6}>
                  <div className="group">
                    <label>Data de Nascimento</label>
                    <input disabled={!props.isNew} type='text' name='birthday'></input>
                  </div>
                </Col>
                <Col xs={12} sm={12} md={6} lg={6}>
                  <div className="group">
                    <label>Relacionamento</label>
                    <select disabled={!props.isNew}>
                      <option value=''></option>
                      <option value='human' selected="selected">Amigo ou parente</option>
                      <option value='pet'>Gato ou cachorro</option>
                      <option value='main'>Meu perfil</option>
                    </select>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col xs={12} sm={12} md={4} lg={4}>
              <div className="group">
                <label>Sexo</label>
                <select disabled={!props.isNew}>
                  <option value=''></option>
                  <option value='female'>Feminino</option>
                  <option value='male' selected="selected">Masculino</option>
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
      </ProfileContainer>
    </Grid>
  );
}

Profile.propTypes = {

};

export default Profile;
