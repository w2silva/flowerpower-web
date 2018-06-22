import styled from 'styled-components'

const SeparatorBottom = styled.div`
  position: absolute;
  width: 100%;
  background-color: inherit;
  border-color: #718394;
  z-index: 1;
  bottom: 0;

  &:after, &:before {
    bottom: -31px;
    content: '';
    width: 0;
    height: 0;
    border-style: solid;
    border-color: inherit;
    border-width: 32px 0 0 900px;
    border-width: 32px 0 0 50vw;
    border-left-width: 900px;
    border-left-width: 50vw;
    position: absolute;
    z-index: 9;
  }
  
  &:before {
    border-left-color: transparent;
    border-right-color: transparent;
    right: 49.8%;
  }
  
  &:after {
    border-left-color: transparent;
    border-right-color: transparent;
    left: 50%;
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }  
`;

export default SeparatorBottom;