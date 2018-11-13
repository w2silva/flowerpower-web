/**
*
* H3
*
*/
import styled from 'styled-components';

const H3 = styled.h3`
  margin: 10px 0px 20px 0px;
  padding: 0px;
  font-weight: 400;
  color: #403151;
  font-size: 1.5em;
  text-align: ${props => props.align};
`;

H3.defaultProps = {
  align: 'left'
};

export default H3;
