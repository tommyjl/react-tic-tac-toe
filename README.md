# Tic-Tac-Toe

This is [tic-tac-toe](https://en.wikipedia.org/wiki/Tic-tac-toe), a famous game.
Implemented in React.

You can play against another player by alternating who gets to use the mouse,
or you can play against a bot. The bot functionality is currently under development,
so you will have to manually turn it on every time you start a new game, and you
should use the toggle AI button on an empty board.

[Try it here.](https://tommyjl.github.io/react-tic-tac-toe)

## Install

Standard npm stuff:

1. Install dependencies with `npm install`
1. Run dev server with `npm start`
1. Build the production files with `npm run build`

## Technologies used

1. React
1. npm
1. styled-components

## Documentation (temp)

1. The TicTacToe component located in src/components/TicTacToe/index.js should be wrapped in a div
   with height and width requirements.
1. The game logic is located in src/component/TicTacToe/TicTacToe.js. This game API is used as such:
    1. Create a new board (treat it as immutable!): `const board = newBoard();`
    1. Place an X or an O on the board with `play(isCross, position, board));`. This creates a new board
       (which should be treated as immutable). If `isCross` is `true`, it will place an X, if it is `false`,
       it will place an O. The position is a number between 0 and 8, where the rows are 0–2, 3—5, and 6–8.
    1. Check the board for a winner with `checkForWinner(board)`.
    1. Find a new bot move with `const result = getAIMove(board)`, and follow it up with
       `play(false, result, board);
