/**
*
* LoginMe
*
*/

import React from 'react';
// import styled from 'styled-components';
import { Grid, Row, Col } from 'react-styled-flexboxgrid'
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import Form from 'components/Form'
import TextField from '@material-ui/core/TextField'
import { AwesomeButton } from 'react-awesome-button';
import H2 from 'components/H2'


const LoginContainer = styled.div`
  margin-bottom: 6em;

  h5 {
    margin-bottom: 2em;
  }
`;

const LoginWrapper = styled.div`
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 3px 30px rgba(0,0,0,.8);
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

function LoginMe(props) {
  const {classes} = props;

  return (
    <div>
      <Grid>
        <LoginContainer>
          <Row middle="xs">
            <Form className={classes.container}>
              <Col xs={10} xsOffset={2} sm={8} smOffset={2} md={4} mdOffset={4}>
                <LoginWrapper>
                  <Row>
                    <Col xs={12} sm={12} md={12} lg={12}>
                      <H2 align="center">Faça seu Login</H2>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={12}>
                      <div className="group">
                        <TextField
                          id="email"
                          label="E-mail"
                          name="email"
                          error={props.login.emailMessage && props.login.emailMessage.length > 0 }
                          helperText={props.login.emailMessage}
                          onChange={props.updateLogin('email')}
                          inputProps={{ className: classes.textField }}
                          className={classes.textField}
                          placeholder="Digite o seu e-mail"
                          margin="normal"
                        />
                      </div>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={12}>
                      <div className="group">
                        <TextField
                          id="password-input"
                          type="password"
                          label="Senha"
                          name="password"
                          error={props.login.passwordMessage && props.login.passwordMessage.length > 0 }
                          helperText={props.login.passwordMessage}
                          onChange={props.updateLogin('password')}
                          inputProps={{ className: classes.password }}
                          className={classes.textField}
                          placeholder="Digite a sua senha"
                        />
                      </div>
                    </Col>
                  </Row>
                </LoginWrapper>
              </Col>
            </Form>
          </Row>
        </LoginContainer>
      </Grid>
      <div className="text-center">
        <AwesomeButton bubbles action={props.submitLogin}>CONTINUAR</AwesomeButton>
      </div>
    </div>
  );
}

LoginMe.propTypes = {

};

export default withStyles(styles)(LoginMe);
