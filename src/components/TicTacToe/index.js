import React, { Component } from "react";
import { Grid } from "./components";
import { newBoard, checkIfEmpty, play, getWinner } from "./TicTacToe";
import { getBotMove } from "./Bot";
import { Button } from "../Button";
import Flexbox from "../Flexbox";

function getInitialState() {
  const initialState = {
    board: newBoard(),
    playerIsCross: true,
    gameIsFinished: false,
    winnerCells: undefined,
    useBot: false
  };

  return { ...initialState };
}

class TicTacToe extends Component {
  constructor(props) {
    super(props);
    this.updateStatus = props.updateStatus;
    this.updateStatus("Next: X");
    this.state = getInitialState();
    this.updateCell = this.updateCell.bind(this);
    this.toggleBot = this.toggleBot.bind(this);
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

    if (this.state.useBot) {
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

  toggleBot() {
    this.setState(state => {
      return { useBot: !state.useBot };
    });
  }

  render() {
    const { board, winnerCells } = this.state;
    return (
      <Flexbox>
        <Grid
          cells={board}
          updateCell={this.updateCell}
          winnerCells={winnerCells}
        />
        <Button highlighted={this.state.useBot} onClick={this.toggleBot}>
          Toggle Bot
        </Button>
        <Button>Clear board</Button>
      </Flexbox>
    );
  }
}

export default TicTacToe;
