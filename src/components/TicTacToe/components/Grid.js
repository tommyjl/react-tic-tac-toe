import React from "react";
import styled from "styled-components";
import Cell from "./Cell";

const GridStyle = styled.div`
  background: rgb(65, 40, 23);
  box-shadow: 0 2px 8px black, inset 0 0 0 25px rgb(131, 79, 44);
  box-sizing: border-box;
  display: grid;
  grid-auto-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  height: 80vw;
  margin: 15px;
  padding: 25px;
  width: 80vw;

  @media (min-width: 800px) {
    height: 700px;
    width: 700px;
  }
`;

const Grid = ({ cells, updateCell, winnerCells }) => (
  <GridStyle>
    {cells.map((text, index) => (
      <Cell
        key={index}
        onClick={() => updateCell(index)}
        altColor={index % 2}
        winner={winnerCells && winnerCells.includes(index)}
      >
        {text}
      </Cell>
    ))}
  </GridStyle>
);

export default Grid;
