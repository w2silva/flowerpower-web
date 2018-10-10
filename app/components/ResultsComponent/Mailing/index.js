/**
*
* Mailing
*
*/

import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-styled-flexboxgrid'
// import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import Autosuggest from 'react-autosuggest';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import suggestions from 'cities/municipios_brasileiros.json'
import { AwesomeButton } from 'react-awesome-button';

import H2 from 'components/H2';
import H5 from 'components/H5';
import Form from 'components/Form';

const MailingWrapper = styled.div`
  padding: 20px 0 60px 0;
  text-align: center;
`;

const ProviderWrapper = styled.div`
  background-color: #f3f3f3;
  border-radius: 40px;
  margin: 20px 0 20px 0;
`;

const Title = styled.div`
  text-transform: uppercase;
  margin-bottom: 10px;
  margin-top: 10px;
  font-size: 1.3em;

`;

const MailingProvider = styled.div`
  padding: 3em 0 5em 0;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
`;

const Span = styled.span`
  width: 300px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const ProviderTitle = styled.h5`
  font-size: 1.3em;
  margin: 0 0 5px 0;
  text-transform: uppercase;
`;

const EmailsWrapper = styled.div`
  background-color: #f3f3f3;
  display: inline-block;
  border-radius: 40px;
  margin: 20px 0 20px 0;
  width: 300px;
  min-height: 50px;
`;

const ProviderMail = styled.div`
  font-size: 1.0em;
`;

const ProviderLink = styled.a`
  font-size: 1.0em;
  margin-left: 20px;
  text-decoration: underline !important;
`;

const ButtonSubmit = styled.a`
  display: inline-block;
  background-color: #779ccb;
  color: white !important;
  border-radius: 50px;
  padding: 10px 25px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 600;
  font-size: .8em;
  box-shadow: 4px 4px 20px 0px #3336;
`;

function renderInput(inputProps) {
  const { classes, ref, ...other } = inputProps;

  return (
    <TextField
      fullWidth
      InputProps={{
        inputRef: ref,
        classes: {
          input: classes.input,
        },
        ...other,
      }}
    />
  );
}

function renderSuggestion(suggestion, { query, isHighlighted }) {
  const matches = match(suggestion.nome_municipio, query);
  const parts = parse(suggestion.nome_municipio, matches);

  return (
    <MenuItem selected={isHighlighted} component="div">
      <div>
        {parts.map((part, index) => {
          return part.highlight ? (
            <span key={String(index)} style={{ fontWeight: 500 }}>
              {part.text}
            </span>
          ) : (
            <strong key={String(index)} style={{ fontWeight: 300 }}>
              {part.text}
            </strong>
          );
        })}
      </div>
    </MenuItem>
  );
}

function renderSuggestionsContainer(options) {
  const { containerProps, children } = options;

  return (
    <Paper {...containerProps} square>
      {children}
    </Paper>
  );
}

function getSuggestionValue(suggestion) {
  return suggestion.nome_municipio;
}

function getSuggestions(value) {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;
  let count = 0;

  return inputLength === 0
    ? []
    : suggestions.filter(suggestion => {
        const keep =
          count < 5 && suggestion.nome_municipio.toLowerCase().slice(0, inputLength) === inputValue;

        if (keep) {
          count += 1;
        }

        return keep;
      });
}

const styles = theme => ({
  input: {
    height: 50,
    borderRadius: '20px',
    marginRight: '-20px',
    marginLeft: '-20px',
    width: '300px !important',
    fontSize: '1.3em',
    paddingLeft: '20px !important',
    paddingRight: '20px !important'
  },
  container: {
    flexGrow: 1,
    position: 'relative',
    height: 100,
  },
  suggestionsContainerOpen: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing.unit,
    left: 0,
    right: 0,
  },
  suggestion: {
    display: 'block',
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none',
  },
});

export class Mailing extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor () {
    super();
    this.state = {
      region: '',
      value: '',
      suggestions: [],
      list: [],
      suppliers: [],
      newEmails: []
    }
  }

  handleSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value),
    });
  };

  handleSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };

  handleChange = (event, { newValue }) => {

    this.setState({
      value: newValue,
      suppliers: this.props.suppliers.filter((s) => s.city === newValue)
    });
  };

  handleListPlus = (email) => () => {
    console.log(email);
    const list = this.state.list.slice()
    if(email){
      if(list.filter((l) => l === email).length === 0) {
        list.push(email)
        this.setState({
          list
        })

      }
    }
  }

  handleListMinus = (index) => () => {
    const list = this.state.list.slice()
    list.splice(index, 1)
    console.log(list);
    this.setState({
      list
    })
  }

  newEmail = (event) => {
    this.setState({
      newEmail: event.target.value
    })
  }


  render () {
    const { classes } = this.props
    console.log('state', this.state.list);
    return (
      <MailingWrapper>
        <Grid>
          <H2 align="center">...ou envie diretamente aos fornecedores</H2>
          <Title>Selecione uma Cidade</Title>
          <Form>
            <InputWrapper>
              <Autosuggest
                theme={{
                  container: classes.container,
                  suggestionsContainerOpen: classes.suggestionsContainerOpen,
                  suggestionsList: classes.suggestionsList,
                  suggestion: classes.suggestion,
                }}
                renderInputComponent={renderInput}
                suggestions={this.state.suggestions}
                onSuggestionsFetchRequested={this.handleSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.handleSuggestionsClearRequested}
                renderSuggestionsContainer={renderSuggestionsContainer}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                inputProps={{
                  classes,
                  placeholder: 'Digite sua Cidade',
                  value: this.state.value,
                  onChange: this.handleChange,
                }}
              />
            </InputWrapper>
            {this.state.suppliers.length > 0 &&
              <div>Foram encontrados <strong>{this.state.suppliers.length} fornecedor(es)</strong> para a cidade de <strong>{this.state.value}.</strong></div>
            }
          </Form>
          {this.state.suppliers.length > 0 &&
            <ProviderWrapper>
              <Row middle="xs" around="xs">
                {this.state.suppliers.map((s) => (
                  <Col xs={12} sm={12} md={3} lg={3}>
                    <MailingProvider>
                      <ProviderTitle>{s.name}</ProviderTitle>
                      <ProviderMail>{s.contact_info.main_email}</ProviderMail>
                      <ProviderLink onClick={this.handleListPlus(s.contact_info.main_email)}>+ adicionar à lista</ProviderLink>
                    </MailingProvider>
                  </Col>
                ))}
              </Row>
            </ProviderWrapper>
          }
          <Form>
            <Title>Se preferir, adicione o email de seu fornecedor aqui:</Title>
            <div className="group" style={{marginBottom: '50px'}}>
              <input type="text" onChange={this.newEmail} style={{ width: '200px', borderRadius: '40px', display: 'inline-block', marginRight: '10px' }} />
              <ProviderLink onClick={this.handleListPlus(this.state.newEmail)}>+ adicionar à lista</ProviderLink>
            </div>
            {this.state.list.length > 0 &&
              <Row>
                <Col xs={12} sm={12} md={12} lg={12}>
                  <EmailsWrapper className="group">
                    {this.state.list.map((l, index) => (
                      <Row>
                        <Span>{this.state.list[index]}<ProviderLink onClick={this.handleListMinus(index)}>Excluir</ProviderLink></Span>
                      </Row>
                    ))}
                  </EmailsWrapper>
                </Col>
              </Row>
            }
            {this.state.list.length > 0 &&
              <Row>
                <Col xs={12} sm={12} md={12} lg={12}>
                  <AwesomeButton type="secondary"> Enviar receita para os emails acima </AwesomeButton>
                </Col>
              </Row>
            }

          </Form>
        </Grid>
      </MailingWrapper>
    );
  }
}

Mailing.propTypes = {

};

// export default ;
export default withStyles(styles)(Mailing);
