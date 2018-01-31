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

export function getAIMove(board) {
  const boardWeights = getWeights(board);
  const max = Math.max(...boardWeights);
  if (max <= 0) return undefined;
  const bestMove = boardWeights.findIndex(cell => cell === max);
  return bestMove;
}

function getWeights(board) {
  const boardWeights = newBoard().fill(0);
  const winWeight = 30;
  const lossWeight = 20;
  const centerWeight = 10;
  const cornerWeight = 5;
  const sideWeight = 1;

  for (let i = 0; i < board.length; i++) {
    if (checkIfEmpty(i, board)) {
      if (i === 4) {
        boardWeights[i] = centerWeight;
      } else if (i === 0 || i === 2 || i === 6 || i === 8) {
        boardWeights[i] = cornerWeight;
      } else if (i === 1 || i === 3 || i === 5 || i === 7) {
        boardWeights[i] = sideWeight;
      }

      const XNextBoard = play(true, i, board);
      const XwinsNext = getWinner(XNextBoard) !== undefined;
      if (XwinsNext) boardWeights[i] = lossWeight;

      const ONextBoard = play(false, i, board);
      const OWinsNext = getWinner(ONextBoard) !== undefined;
      if (OWinsNext) boardWeights[i] = winWeight;
    }
  }

  return boardWeights;
}
