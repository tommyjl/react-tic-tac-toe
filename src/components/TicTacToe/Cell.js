import React from "react";
import styled from "styled-components";

const Cell = styled.div`
  background: ${props =>
    props.altColor ? "rgba(207, 156, 122, 0.5)" : "rgb(207, 156, 122)"};
  margin: 1px;
  padding: 1em;
`;

export default Cell;
