import React, { Component } from "react";
import styled from "styled-components";
import Grid from "./Grid";

class TicTacToe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cells: Array(9).fill(""),
      player: "X"
    };

    this.updateCell = this.updateCell.bind(this);
  }

  updateCell(index) {
    this.setState(prevState => {
      const cells = prevState.cells.slice();
      cells[index] = prevState.player;

      const player = prevState.player === "X" ? "O" : "X";

      return { cells, player };
    });
  }

  render() {
    const { cells } = this.state;
    return <Grid cells={cells} updateCell={this.updateCell} />;
  }
}

export default TicTacToe;
