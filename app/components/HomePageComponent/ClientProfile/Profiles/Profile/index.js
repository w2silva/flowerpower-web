/**
*
* Profile
*
*/

import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-styled-flexboxgrid'
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  a {
    color: white;
  }

  img {
    max-width: 160px;
  }

  span {
    display: block;
  }
`;

function Profile(props) {
  return (
    <Wrapper>
      <Row middle="xs" center="xs">
        <Col>
          <Link to='/quiz'>
            <img src={props.src} />
            <span>{props.title}</span>
          </Link>
        </Col>
      </Row>      
    </Wrapper>
  );
}

Profile.propTypes = {

};

export default Profile;
