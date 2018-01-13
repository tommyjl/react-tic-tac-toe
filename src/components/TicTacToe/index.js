import React, { Component } from "react";
import Grid from "./Grid";

class TicTacToe extends Component {
  constructor(props) {
    super(props);

    this.updateStatus = props.updateStatus;
    this.updateStatus("Next: X");

    this.state = {
      cells: Array(9).fill(""),
      gameFinished: false,
      player: "X"
    };

    this.updateCell = this.updateCell.bind(this);
  }

  updateCell(index) {
    const { gameFinished, cells } = this.state;
    if (gameFinished || cells[index] !== "") return;

    this.setState(prevState => {
      const cells = prevState.cells.slice();

      cells[index] = prevState.player;

      const playerHasWon = this.checkForWinner(cells);
      if (playerHasWon) {
        this.updateStatus(`${this.state.player} is the winner!`);
        return { cells, gameFinished: true };
      }

      const player = prevState.player === "X" ? "O" : "X";
      this.updateStatus(`Next: ${player}`);

      return { cells, player };
    });
  }

  checkForWinner(cells) {
    const check = (cells, firstCell, secondCell, thirdCell) => {
      if (cells[firstCell] === "") return false;
      if (
        cells[firstCell] === cells[secondCell] &&
        cells[secondCell] === cells[thirdCell]
      )
        return true;
    };

    const rows = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];
    const columns = [[0, 3, 6], [1, 4, 7], [2, 5, 8]];
    const diagonals = [[0, 4, 8], [2, 4, 6]];

    const rules = [...rows, ...columns, ...diagonals];

    for (let i = 0; i < rules.length; i++) {
      if (check(cells, ...rules[i])) return true;
    }

    return false;
  }

  render() {
    const { cells } = this.state;
    return <Grid cells={cells} updateCell={this.updateCell} />;
  }
}

export default TicTacToe;
