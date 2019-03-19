/**
*
* Register
*
*/

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Row, Col } from 'react-styled-flexboxgrid'
import H5 from 'components/H5'
import H2 from 'components/H2'
import Form from 'components/Form'
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
//
// const ProfilePicture = styled.div`
//   display: inline-block;
//   width: 100px;
//   height: 100px;
//   background-color: transparent;
//   border: solid 1px #ddd;
//
//   div {
//     display: flex;
//     background-color: #eee;
//     width: 100%;
//     height: 100%;
//     align-items: center;
//     justify-content: center;
//
//     span {
//       font-size: .7em;
//       text-transform: uppercase;
//     }
//   }
// `;

const RegisterWrapper = styled.div`
  padding: 20px;
  border-radius: 20px;
  background-color: #F2F2F2;
`;

const RegisterContainer = styled.div`
  margin-bottom: 6em;

  h5 {
    margin-bottom: 2em;
  }
`;

const Button = styled.a`
  color: #007bff !important;
  cursor: pointer;
  font-weight: 500;
`;

const LoginContainer = styled.div`
  text-align: center;
  font-size: 15px;
  padding-top: 20px
`;

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    fontSize: '14px !important',
    width: '100% !important',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '100% !important',
    fontSize: 15,
    border: '0 !important',
    background: 'none !important',
    margin: '0 !important',
  },
  birthday: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '100% !important',
    fontSize: 15,
    border: '0 !important',
    background: 'none !important',
    margin: '0 !important',
    height: 32
  },
  password: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '100% !important',
    fontSize: 15,
    border: '0 !important',
    background: 'none !important',
    margin: '0 !important',
    height: 32
  },
  menu: {
    width: 200,
  },
  formControl: {
    margin: '0 !important',
    minWidth: 120,
    width: '100%',
    fontSize: 15
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
    backgroundColor: 'grey'
  },
});


function Register(props) {
  const {classes} = props;
  return (
    <Grid>
      <RegisterContainer>
        <Form className={classes.container}>
          <Row middle="xs">
            <Col xs={10} xsOffset={1} sm={8} smOffset={2} md={6} mdOffset={3}>
              <RegisterWrapper>
                <Row>
                  <Col xs={12} sm={12} md={12} lg={12}>
                    <H5 align="center">Primeiro faça seu cadastro</H5>
                  </Col>
                  <Col xs={12} sm={12} md={6} lg={6}>
                    <div className="group">
                      <TextField
                        id="name"
                        label="Nome Completo"
                        name="name"
                        error={props.register.nameMessage && props.register.nameMessage.length > 0}
                        helperText={props.register.nameMessage}
                        onChange={props.updateRegister('name')}
                        inputProps={{ className: classes.textField }}
                        className={classes.textField}
                        placeholder="Digite o nome do perfil"
                        margin="normal"
                      />
                    </div>
                  </Col>
                  <Col xs={12} sm={12} md={6} lg={6}>
                    <div className="group">
                      <TextField
                        id="email"
                        label="E-mail"
                        name="email"
                        error={props.register.emailMessage && props.register.emailMessage.length > 0 }
                        helperText={props.register.emailMessage}
                        onChange={props.updateRegister('email')}
                        inputProps={{ className: classes.textField }}
                        className={classes.textField}
                        placeholder="Digite o seu e-mail"
                        margin="normal"
                      />
                    </div>
                  </Col>

                  <Col xs={12} sm={12} md={6} lg={6}>
                    <div className="group">
                      <TextField
                        id="birthday"
                        label="Aniversário"
                        type="date"
                        name="birthday"
                        error={props.register.birthdayMessage && props.register.birthdayMessage.length > 0 }
                        helperText={props.register.birthdayMessage}
                        onChange={props.updateRegister('birthday')}
                        inputProps={{ className: classes.birthday }}
                        className={classes.textField}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </div>
                  </Col>
                  <Col xs={12} sm={12} md={6} lg={6}>
                    <div className="group">
                      <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="gender">Sexo</InputLabel>
                        <Select
                          value={props.register.gender}
                          error={props.register.genderMessage && props.register.genderMessage.length > 0 }
                          onChange={props.updateRegister('gender')}
                          inputProps={{
                            name: 'gender',
                            id: 'gender',
                            className: classes.textField
                          }}
                        >
                          <MenuItem value={'male'}>Masculino</MenuItem>
                          <MenuItem value={'female'}>Feminino</MenuItem>
                          <MenuItem value={'other'}>Outro</MenuItem>
                        </Select>
                        {props.register.genderMessage ?
                          <FormHelperText error>{props.register.genderMessage}</FormHelperText>
                          :
                          ""
                        }
                      </FormControl>
                    </div>
                  </Col>
                  <Col xs={12} sm={12} md={6} lg={6}>
                    <div className="group">
                      <TextField
                        id="password-input"
                        type="password"
                        label="Senha"
                        name="password"
                        error={props.register.passwordMessage && props.register.passwordMessage.length > 0 }
                        helperText={props.register.passwordMessage}
                        onChange={props.updateRegister('password')}
                        inputProps={{ className: classes.password }}
                        className={classes.textField}
                        placeholder="Digite a sua senha"
                      />
                    </div>
                  </Col>
                  <Col xs={12} sm={12} md={6} lg={6}>
                    <div className="group">
                      <TextField
                        id="password-input2"
                        type="password"
                        label="Confirmar Senha"
                        name="password"
                        error={props.register.confirmPasswordMessage && props.register.confirmPasswordMessage.length > 0 }
                        helperText={props.register.confirmPasswordMessage}
                        onChange={props.updateRegister('confirmPassword')}
                        inputProps={{ className: classes.password }}
                        className={classes.textField}
                        placeholder="Confirme a sua senha"
                      />
                    </div>
                  </Col>
                  {/*<Col xs={12} sm={12} md={6} lg={6}>
                    <div className="group">
                      <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="target">Relacionamento</InputLabel>
                        <Select
                          value={props.register.target}
                          onChange={props.updateLogin('target')}
                          inputProps={{
                            name: 'target',
                            id: 'target',
                            className: classes.textField
                          }}
                        >
                          <MenuItem value="">
                            <em>Relacionamento</em>
                          </MenuItem>
                          <MenuItem value={'main'}>Meu perfil</MenuItem>
                          <MenuItem value={'pet'}>Para cão ou gato</MenuItem>
                          <MenuItem value={'human'}>Para parente ou amigo</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </Col>*/}
                </Row>
              </RegisterWrapper>
            </Col>
          </Row>
        </Form>
        <LoginContainer>
          <span>
            Já possui cadastro? Faça seu <Button onClick={props.showLogin}>login</Button>
          </span>
        </LoginContainer>
      </RegisterContainer>
    </Grid>
  );
}

Register.propTypes = {

};

export default withStyles(styles)(Register);
// export default Register;
