import * as ttt from "./TicTacToe";

export function getBotMove(board) {
  const victoryIsOurs = getWinningMove(board);
  if (victoryIsOurs !== undefined) return victoryIsOurs;

  const lossIsImminent = preventImmediateLoss(board);
  if (lossIsImminent !== undefined) return lossIsImminent;

  const playerIsMischievous = preventOpposingCornersLoss(board);
  if (playerIsMischievous !== undefined) return playerIsMischievous;

  if (!middleIsTaken(board)) return 4;

  const availableCorner = getAvailableCorner(board);
  if (availableCorner !== undefined) return availableCorner;

  const availableSide = getAvailableSide(board);
  if (availableSide !== undefined) return availableSide;
}

export function middleIsTaken(board) {
  return board[4] !== ttt.moves.EMPTY;
}

export function getAvailableCorner(board) {
  if (ttt.checkIfEmpty(0, board)) return 0;
  if (ttt.checkIfEmpty(2, board)) return 2;
  if (ttt.checkIfEmpty(6, board)) return 6;
  if (ttt.checkIfEmpty(8, board)) return 8;
  return undefined;
}

export function getAvailableSide(board) {
  if (ttt.checkIfEmpty(1, board)) return 1;
  if (ttt.checkIfEmpty(3, board)) return 4;
  if (ttt.checkIfEmpty(5, board)) return 5;
  if (ttt.checkIfEmpty(7, board)) return 7;
  return undefined;
}

export function preventOpposingCornersLoss(board) {
  if (
    (board[0] === ttt.moves.X && board[8] === ttt.moves.X) ||
    (board[2] === ttt.moves.X && board[6] === ttt.moves.X)
  ) {
    return getAvailableSide(board);
  }
}

export function preventImmediateLoss(board) {
  for (let i = 0; i < board.length; i++) {
    if (ttt.checkIfEmpty(i, board)) {
      const nextBoard = ttt.play(true, i, board);
      const winner = ttt.getWinner(nextBoard);
      if (winner !== undefined) return i;
    }
  }
  return undefined;
}

export function getWinningMove(board) {
  for (let i = 0; i < board.length; i++) {
    if (ttt.checkIfEmpty(i, board)) {
      const nextBoard = ttt.play(false, i, board);
      const winner = ttt.getWinner(nextBoard);
      if (winner !== undefined) return i;
    }
  }
  return undefined;
}
