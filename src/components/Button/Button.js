import React from "react";
import styled from "styled-components";

const ButtonStyle = styled.div`
  background: rgb(131, 79, 44);
  box-shadow: 0 2px 8px black;
  cursor: pointer;
  padding: 0.5em;
`;

export default function(props) {
  return <ButtonStyle {...props} />;
}
