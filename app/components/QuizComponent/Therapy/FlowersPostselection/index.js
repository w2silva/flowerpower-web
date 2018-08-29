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

import Flower from './Flower'

const FlowerWrapper = styled.div`
  margin-bottom: 5em;
`;

const FlowersIntro = styled.div`
  margin-bottom: 6em;
  text-align: center;
  font-size: 14px
`;

function FlowersPostselection(props) {
  console.log(props)
  if (!props.flowers) {
    return (
      <div></div>
    )
  }
  const isAnswering = ['started', 'answering'].indexOf(props.postselected.state) >= 0

  const submitFlower = (flowerId, selection) => () => props.submitFlower(props.postselected._id, flowerId, selection)

  return (
    <Grid>
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
        <AwesomeButton disabled={isAnswering} action={props.finalizeFlowers}>Continuar</AwesomeButton>
      </div>
    </Grid>
  );
}

FlowersPostselection.propTypes = {

};

export default FlowersPostselection;
