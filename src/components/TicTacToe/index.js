import React, { Component } from "react";
import Grid from "./Grid";
import { newBoard, checkIfEmpty, play, getWinner } from "./TicTacToe";
import { getBotMove } from "./Bot";

class TicTacToe extends Component {
  constructor(props) {
    super(props);

    this.updateStatus = props.updateStatus;
    this.updateStatus("Next: X");

    this.state = {
      board: newBoard(),
      playerIsCross: true,
      gameIsFinished: false,
      winnerCells: undefined
    };

    this.updateCell = this.updateCell.bind(this);
  }

  updateCell(index) {
    const { gameIsFinished, board } = this.state;
    if (gameIsFinished || !checkIfEmpty(index, board)) return;

    this.setState(prevState => {
      const { board, playerIsCross } = prevState;
      const nextBoard = play(playerIsCross, index, board);
      const winnerCells = getWinner(nextBoard);
      const gameIsFinished = !!winnerCells;

      if (gameIsFinished) {
        this.updateStatus(`${playerIsCross ? "X" : "O"} won!`);
      } else {
        this.updateStatus(`Next: ${playerIsCross ? "O" : "X"}`);
      }

      return {
        board: nextBoard,
        playerIsCross: !playerIsCross,
        winnerCells,
        gameIsFinished
      };
    });

    if (this.props.playAgainstAi) {
      this.setState(prevState => {
        const { board, playerIsCross } = prevState;

        const aiMove = getBotMove(board);
        const aiNextBoard = play(false, aiMove, board);
        const winnerCells = getWinner(aiNextBoard);
        const gameIsFinished = !!winnerCells;

        if (gameIsFinished) {
          this.updateStatus(`${playerIsCross ? "X" : "O"} won!`);
        } else {
          this.updateStatus(`Next: ${playerIsCross ? "O" : "X"}`);
        }

        return {
          board: aiNextBoard,
          winnerCells,
          playerIsCross: !playerIsCross,
          gameIsFinished
        };
      });
    }
  }

  render() {
    const { board, winnerCells } = this.state;
    return (
      <Grid
        cells={board}
        updateCell={this.updateCell}
        winnerCells={winnerCells}
      />
    );
  }
}

export default TicTacToe;
