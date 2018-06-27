/**
*
* H2
*
*/
import styled from 'styled-components';

const H2 = styled.h2`
  margin: 10px 0px 20px 0px;
  padding: 0px;
  font-weight: 400;
  color: #403151;
  text-align: ${props => props.align};
`;

H2.defaultProps = {
  align: 'left'
};

export default H2;
