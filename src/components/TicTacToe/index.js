import React, { Component } from "react";
import Grid from "./Grid";
import * as ttt from "./TicTacToe";

class TicTacToe extends Component {
  constructor(props) {
    super(props);

    this.updateStatus = props.updateStatus;
    this.updateStatus("Next: X");

    this.state = {
      board: ttt.newBoard(),
      playerIsCross: true,
      gameIsFinished: false,
      winnerCells: undefined
    };

    this.updateCell = this.updateCell.bind(this);
  }

  updateCell(index) {
    const { gameIsFinished, board } = this.state;
    if (gameIsFinished || !ttt.checkIfEmpty(index, board)) return;

    this.setState(prevState => {
      const { board, playerIsCross } = prevState;
      const nextBoard = ttt.play(playerIsCross, index, board);
      const winnerCells = ttt.getWinner(nextBoard);
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

        const aiMove = ttt.getAIMove(board);
        const aiNextBoard = ttt.play(false, aiMove, board);
        const winnerCells = ttt.getWinner(aiNextBoard);
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
