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

function FlowersPostselection(props) {
  if (!props.flowers) {
    return (
      <div></div>
    )
  }
  const isAnswering = ['started', 'answering'].indexOf(props.postselected.state) >= 0

  const submitFlower = (flowerId, selection) => () => props.submitFlower(props.postselected._id, flowerId, selection)
  console.log(props.postselection);
  return (
    <Grid>
      <H2 align="center">Continuando...</H2>
      <FlowerWrapper>
        <FlowersIntro>{props.postselection.statement}</FlowersIntro>
        <form>
          <Row middle="xs">
            {props.postselected.options.flowers.map((f) => (
              <Flower
                flower={props.flowers.filter((g) => g.id === f)[0]}
                selected={props.postselected.flowers.filter((g) => f === g)[0] ? true : false}
                submitFlower={submitFlower(f, props.postselected.flowers.filter((g) => f === g)[0] ? false : true)}
              />
            ))}
          </Row>
        </form>
      </FlowerWrapper>
      <div className="text-center">
        {props.postselection.maximum_selection > 0 && props.postselected.flowers.length > props.postselection.maximum_selection ?
          <H5 align="center">Selecione apenas {props.postselection.maximum_selection} opções</H5>
          :
          ""
        }
        <AwesomeButton disabled={isAnswering} disabled={props.postselection.maximum_selection > 0 && props.postselected.flowers.length > props.postselection.maximum_selection} action={props.finalizeFlowers}>Continuar</AwesomeButton>
      </div>
    </Grid>
  );
}

FlowersPostselection.propTypes = {

};

export default FlowersPostselection;
