/**
*
* Packages
*
*/

import React from 'react';
import styled, {ThemeProvider} from 'styled-components';
import { Grid } from 'react-styled-flexboxgrid';
import Pack from './Pack';

const PackagesWrapper = styled.div`
  margin: 50px 0 10em 0;
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
    console.log(this.props)
    return (
      <Grid>
        <PackagesWrapper>
          {/*<ToggleProfile>
            <label className="active">
              <input type="radio" /> indivíduo
            </label>
            <label>
              <input type="radio" /> animal
            </label>
          </ToggleProfile>*/}
          { this.props.bundles &&
            this.props.bundles.filter((b) => !this.props.currentDiagnosis || b.therapies.filter((t) => t.therapy === this.props.currentDiagnosis.therapy._id).length > 0)
              .map((b) =>
                <Pack
                  currentDiagnosis={this.props.currentDiagnosis}
                  bundle={b}
                  bundleCheckout={this.props.bundleCheckout}
                  key={b.id}/>
              )
          }
        </PackagesWrapper>
      </Grid>
    );
  }
}

Packages.propTypes = {

};

export default Packages;
