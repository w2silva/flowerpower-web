/**
*
* Emotion
*
*/

import React from 'react';
// import styled from 'styled-components';
import { Grid, Row, Col } from 'react-styled-flexboxgrid'
import styled from 'styled-components';
import picture from './check.png';

const BoxWrapper = styled.div`
  background-color: ${props => props.colors[props.random]};
  height: 100px;
  margin-top: 0px;
  padding-top: 35px;
  font-size: 16px;
  text-align: center;
  @media (min-width: 780px) {
    width: 200px;
  }
  @media (max-width: 780px) {
    width: 150px;
  }
  border-radius: 30px;
`;

const Button = styled.a`
  font-size: 16px;
  border-radius: 30px;
  padding: 0
`

const Img = styled.img`
  height: 20px;
  min-height: 20px !important;
  display:block;
  margin:auto;
`

export class Emotion extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      random: Math.ceil(Math.random()*9)
    }
  }
  handleClick = (e) => {
    e.preventDefault();
    this.setState({
      active: !this.state.active
    })
    this.props.submitEmotion(this.props.emotion.id, this.props.idx)
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
    const isActive = this.props.diagnosis ? this.props.diagnosis.emotions_preselected[this.props.idx].emotions.filter((e) => e.toString() === this.props.emotion.id.toString())[0] : false
    console.log(this.props.diagnosis);
    return (
      <Col xs={6} sm={6} md={3} lg={3}>
        <div className="thumbs text-center">
          <div className="container">
            <div className="grid">
              <div className="container effect">
                <figure className="effect-steve">
                  <Button onClick={this.handleClick}>
                    <BoxWrapper colors={colors} random={this.state.random}>
                      {this.props.emotion.name}
                      <br/>
                      {isActive ?
                        <Img src={picture}/>
                        :
                        ''
                      }
                    </BoxWrapper>
                  </Button>
                </figure>
              </div>
              {/*<div className="title">
                <a
                >
                  <h5 className="mb0" style={{ fontWeight: 'bold' }}>oie</h5>
                  <h5 className="mb0" style={{ fontSize: '14px' }}>ddd</h5>
                  <h5 className="mb0" style={{ fontSize: '13px' }}>sss</h5>
                </a>
              </div>*/}
            </div>
          </div>
        </div>
      </Col>
    );
  }
}

Emotion.propTypes = {

};

export default Emotion;
