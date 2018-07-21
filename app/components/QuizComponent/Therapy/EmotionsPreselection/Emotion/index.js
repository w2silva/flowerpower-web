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
  height: 150px;
  margin-top: 0px;
  padding-top: 60px;
  font-size: 20px;
  text-align: center;
  width: 200px;
`;

const Button = styled.button`
  font-size: 16px;
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
      '#CFA4BF',
      '#FCC5CB',
      '#FEFAA3',
      '#E7DFD2',
      '#ADEAEB',
      '#76DADA',
      '#B4EDD2',
      '#A9D7F2',
      '#BEC3DB',
      '#A1B0B7',
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
