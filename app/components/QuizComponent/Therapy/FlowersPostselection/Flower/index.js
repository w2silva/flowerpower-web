/**
*
* Flower
*
*/

import React from 'react';
// import styled from 'styled-components';
import { Grid, Row, Col } from 'react-styled-flexboxgrid'
import styled from 'styled-components';
import picture from './check.png';

const BoxWrapper = styled.div`
  background-image: url(${props => props.url});
  background-size: cover;
  margin-top: 0px;
  padding-top: 35px;
  font-size: 16px;
  text-align: center;
  @media (min-width: 780px) {
    width: 200px;
    height: 200px;
  }
  @media (max-width: 780px) {
    width: 150px;
    height: 150px;
  }
  border-radius: 100px;
`;

const Overlay = styled.div`
  @media (max-width: 780px) {
    width: 150px;
    height: 150px;
  }
  @media (min-width: 780px) {
    width: 200px;
    height: 200px;
  }
  background-color: rgba(255, 255, 255,0.5);
  position: absolute !important;
  z-index: 100;
  border-radius: 100px;
`

const Button = styled.a`
  font-size: 16px;
  border-radius: 30px;
  padding: 0
`

const Img = styled.img`
  height: 50px;
  min-height: 20px !important;
  position: absolute !important;
  z-index: 1000;
  @media (max-width: 780px) {
    top: 50px;
    left: 50px;
  }
  @media (min-width: 780px) {
    top: 80px;
    left: 80px;
  }
  display:block;
  margin:auto;
`

export class Flower extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      random: Math.ceil(Math.random()*9)
    }
  }

  handleClick = (e) => {
    e.preventDefault();
    this.props.submitFlower(this.props.flower.id, !this.props.selected)
  }

  render () {
    const colors = [
      '#DEE6F0',
      '#BBCCE2',
      '#9AB3D4',
      '#7E9DC7',
      '#4C74AC',
      '#E3DFEB',
      '#CAC1D8',
      '#AEA1C4',
      '#9181AF',
      '#6D598C',
      '#D9D9D9',
      '#A6A6A6'
    ]
    console.log('flower', this.props.flower);
    return (
      <Col xs={6} sm={6} md={3} lg={3}>
        <div className="thumbs text-center">
          <div className="container">
            <div className="grid">
              <div className="container effect">
                <figure className="effect-steve">
                  <Button onClick={this.handleClick}>
                    {this.props.selected ?
                      <Img src={picture}/>
                      :
                      ''
                    }
                    {this.props.selected ?
                      <Overlay/>
                      :
                      ''
                    }
                    <BoxWrapper url={this.props.flower.picture} random={this.state.random}>
                    </BoxWrapper>
                  </Button>
                </figure>
              </div>
              {<div className="title">
                <a
                >
                  <h5 className="mb0" style={{}}>{this.props.flower.name}</h5>
                </a>
              </div>}
            </div>
          </div>
        </div>
      </Col>
    );
  }
}

Flower.propTypes = {

};

export default Flower;
