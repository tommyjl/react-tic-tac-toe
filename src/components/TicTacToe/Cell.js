import React from "react";
import styled from "styled-components";

const Cell = styled.div`
  background: ${props =>
    props.altColor ? "rgba(207, 156, 122, 0.4)" : "rgb(207, 156, 122)"};
  margin: 1px;
  padding: 1em;
  transition: 0.15s transform;
  user-select: none;

  &:hover {
    cursor: pointer;
    opacity: 0.9;
    transform: scale(0.97);
  }
`;

export default Cell;
