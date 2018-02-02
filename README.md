# Tic-Tac-Toe

This is the game Tic-Tac-Toe. Implemented in React. The goal of the game is to
make three marks in a vertical, horizontal, or diagonal row. You can play
against another person by alternating who places the marks, or you can play
against a bot which takes this game way too seriously.

[Try it here.](https://tommyjl.github.io/react-tic-tac-toe)

## Contents

* [Contents](#contents)
* [Install](#install)
* [Technologies used](#technologies-used)
* [Documentation](#documentation)
  * [The game](#the-game)
  * [Components](#components)

## Install

Standard npm stuff:

1. Install dependencies with `npm install`
1. Run dev server with `npm start`
1. Build the production files with `npm run build`

## Technologies used

1. React
1. npm
1. styled-components
1. gh-pages

## Documentation

The general layout of the app is found in `src/App.js`.

### The game

Example:

```JavaScript
const playerIsCross = true;
const position = 3;

let board = newBoard();
const positionIsEmpty = checkIfEmpty(position, board);
if (positionIsEmpty) {
  board = play(playerIsCross, position, board);
}

const botMove = getBotMove(board);
board = play(false, botMove, board);
```

1. The game logic is located in `src/components/TicTacToe/TicTacToe.js`. This
   game API is used as such:
   1. Create a new board (treat it as immutable!) with `newBoard()`
   1. Check if a position is empty: `checkIfEmpty(position, board)`
   1. Place an X or an O on the board with `play(isCross, position, board);`
      This creates a new board (which should be treated as immutable). If
      `isCross` is `true`, it will place an X, if it is `false`, it will place
      an O. The position is a number between 0 and 8, where the rows are 0–2,
      3—5, and 6–8.
   1. Check the board for a winner with `checkForWinner(board)`
   1. Find a new bot move with `const result = getAIMove(board)`, and follow it
      up with `play(false, result, board);`
1. The bot is located in `src/components/TicTacToe/Bot.js`
   1. Get the bot's move with `getBotMove(board)`

### Components

* Buttons are found in `src/components/Button`
* Text components are found in `src/components/Generic`
* The actual game is found in `src/components/TicTacToe`
