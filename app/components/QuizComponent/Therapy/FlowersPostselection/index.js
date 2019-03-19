/**
*
* FlowersPostselection
*
*/

import React from 'react';
// import styled from 'styled-components';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-styled-flexboxgrid'
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/themes/theme-blue.css';
import H2 from 'components/H2'
import H5 from 'components/H5'

import Flower from './Flower'

const FlowerWrapper = styled.div`
  margin-bottom: 5em;
`;

const FlowersIntro = styled.div`
  text-align: center;
  font-size: 20px;
  @media (max-width: 780px) {
    margin-bottom: 2em;
  }
  @media (min-width: 780px) {
    margin-bottom: 6em;
  }
`;

export class FlowersPostselection extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.top.scrollIntoView({ behavior: "smooth" });
  }

  render() {
    if (!this.props.flowers) {
      return (
        <div style={{ float:"left", clear: "both" }} ref={(el) => { this.top = el; }}/>
      )
    }
    const isAnswering = ['started', 'answering'].indexOf(this.props.postselected.state) >= 0

    const submitFlower = (flowerId, selection) => () => this.props.submitFlower(this.props.postselected._id, flowerId, selection)
    console.log(this.props.postselection);
    return (
      <Grid>
        <H2 align="center">Continuando...</H2>
        <div style={{ float:"left", clear: "both" }} ref={(el) => { this.top = el; }}/>
        <FlowerWrapper>
          <FlowersIntro>{this.props.postselection.statement}</FlowersIntro>
          <form>
            <Row middle="xs">
              {this.props.postselected.options.flowers.map((f) => (
                <Flower
                  flower={this.props.flowers.filter((g) => g.id === f)[0]}
                  selected={this.props.postselected.flowers.filter((g) => f === g)[0] ? true : false}
                  submitFlower={submitFlower(f, this.props.postselected.flowers.filter((g) => f === g)[0] ? false : true)}
                />
              ))}
            </Row>
          </form>
        </FlowerWrapper>
        <div className="text-center">
          {this.props.postselection.maximum_selection > 0 && this.props.postselected.flowers.length > this.props.postselection.maximum_selection ?
            <H5 align="center">Selecione apenas {this.props.postselection.maximum_selection} opções</H5>
            :
            ""
          }
          <AwesomeButton type="secondary" action={this.props.goBack}>Voltar</AwesomeButton>
          &nbsp;
          <AwesomeButton disabled={isAnswering} action={this.props.finalizeFlowers}>Continuar</AwesomeButton>
        </div>
      </Grid>
    );
  }
}

FlowersPostselection.propTypes = {

};

export default FlowersPostselection;
