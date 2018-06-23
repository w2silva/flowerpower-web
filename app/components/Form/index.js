/**
*
* H2
*
*/
import styled from 'styled-components';

const Form = styled.form`
  margin: 0px;
  padding: 0px;

  input[type="text"],
  input[type="password"],
  input[type="number"],
  input[type="tel"],
  input[type="date"],
  select {
    display: block;
    width: 100%;
    padding: 7px 7px;
    color: #000;
    border: solid 1px #ccc8c8;
    background: white;
    box-sizing: border-box;
  }

  label {
    display: inline-block;
    font-size: .9em;
    margin-bottom: 5px;
  }

  .group {
    margin-bottom: 10px;
  }
`;

export default Form;
