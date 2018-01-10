import React from "react";
import styled from "styled-components";
import Cell from "./Cell";

const GridStyle = styled.div`
  background: rgb(131, 79, 44);
  box-shadow: 0 2px 8px black;
  box-sizing: border-box;
  display: grid;
  grid-auto-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  height: 90%;
  margin: 5%;
  padding: 5%;
  width: 90%;
`;

const Grid = () => (
  <GridStyle>
    <Cell />
    <Cell altColor />
    <Cell />
    <Cell altColor />
    <Cell />
    <Cell altColor />
    <Cell />
    <Cell altColor />
    <Cell />
  </GridStyle>
);

export default Grid;
