/**
*
* Packages
*
*/

import React from 'react';
import styled from 'styled-components';
import { Grid } from 'react-styled-flexboxgrid';
import Pack from './Pack';

const PackagesWrapper = styled.div`
  margin: 20px 0 10em 0;
`;

const ToggleProfile = styled.div`
  display: block;
  width: 200px;
  margin: 20px auto 40px auto;
  border: solid 1px #aaa;
  border-radius: 10px;

  label {
    width: 50%;
    padding: 5px 10px;
    text-transform: uppercase;
    text-align: center;
    font-weight: 500;
    margin: 0px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    border: none;
  }

  .active {
    background-color: #4274b1;
    color: white;
    margin: -2px;
  }

  input[type="radio"] {
    display: none;
  }
`;

class Packages extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Grid>
        <PackagesWrapper>
          <ToggleProfile>
            <label className="active">
              <input type="radio" /> indivíduo
            </label>
            <label>
              <input type="radio" /> animal
            </label>
          </ToggleProfile>
          <Pack />
          <Pack />
          <Pack />
          <Pack />
          <Pack />
          <Pack />
        </PackagesWrapper>
      </Grid>
    );
  }
}

Packages.propTypes = {

};

export default Packages;
