import styled from "styled-components";

const Button = styled.div`
  background: rgb(131, 79, 44);
  box-shadow: 0 2px 8px black;
  cursor: pointer;
  padding: 0.5em;
  user-select: none;
  margin: 5px;

  ${props => props.highlighted && "background: white;"} &:active {
    transform: translateY(2px);
  }
`;

export default Button;
