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
    this.setState(prevState => {
      const cells = prevState.cells.slice();
      if (cells[index] !== "") return prevState;
      if (this.state.gameFinished) return prevState;

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
    const check = cells => {
      if (!cells[0]) return false;
      if (cells[0] === cells[1] && cells[1] === cells[2]) return true;
    };

    const rows = [
      [cells[0], cells[1], cells[2]],
      [cells[3], cells[4], cells[5]],
      [cells[6], cells[7], cells[8]]
    ];
    const columns = [
      [cells[0], cells[3], cells[6]],
      [cells[1], cells[4], cells[7]],
      [cells[2], cells[5], cells[8]]
    ];
    const diagonals = [
      [cells[0], cells[4], cells[8]],
      [cells[2], cells[4], cells[6]]
    ];

    const rules = [...rows, ...columns, ...diagonals];

    for (let i = 0; i < rules.length; i++) {
      if (check(rules[i])) return true;
    }

    return false;
  }

  render() {
    const { cells } = this.state;
    return <Grid cells={cells} updateCell={this.updateCell} />;
  }
}

export default TicTacToe;
