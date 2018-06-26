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
    color: #999;
    border: solid 1px #e6e6e6;
    background: white;
    box-sizing: border-box;

    &:-webkit-input-placeholder { /* Chrome/Opera/Safari */
      color: #e6e6e6;
    }
    &:-moz-placeholder { /* Firefox 19+ */
      color: #e6e6e6;
    }
    &:-ms-input-placeholder { /* IE 10+ */
      color: #e6e6e6;
    }
    &:-moz-placeholder { /* Firefox 18- */
      color: #e6e6e6;
    }
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
