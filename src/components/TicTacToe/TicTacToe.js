export const moves = {
  EMPTY: "",
  X: "X",
  O: "O"
};

export function newBoard() {
  return Array(9).fill(moves.EMPTY);
}

export function checkIfEmpty(position, board) {
  return !board[position];
}

export function play(isCross, position, board) {
  const newBoard = board.slice();
  newBoard[position] = isCross ? moves.X : moves.O;
  return newBoard;
}

export function getWinner(board) {
  const check = (board, firstCell, secondCell, thirdCell) => {
    if (!board[firstCell]) return undefined;
    if (
      board[firstCell] === board[secondCell] &&
      board[secondCell] === board[thirdCell]
    )
      return true;
  };

  const rows = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];
  const columns = [[0, 3, 6], [1, 4, 7], [2, 5, 8]];
  const diagonals = [[0, 4, 8], [2, 4, 6]];

  const winners = [...rows, ...columns, ...diagonals];

  for (let i = 0; i < winners.length; i++) {
    if (check(board, ...winners[i])) return winners[i];
  }

  return undefined;
}
