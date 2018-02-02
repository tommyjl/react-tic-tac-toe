import * as ttt from "./TicTacToe";
import * as bot from "./Bot";

describe("Bot", () => {
  const emptyBoard = ttt.newBoard();

  describe("middleIsTaken(board)", () => {
    it("returns true when the middle position is taken", () => {
      const middlePlayedBoard = ttt.play(true, 4, emptyBoard);
      const actual = bot.middleIsTaken(middlePlayedBoard);
      expect(actual).toBe(true);
    });
    it("returns false when the middle position is empty", () => {
      const actual = bot.middleIsTaken(emptyBoard);
      expect(actual).toBe(false);
    });
  });

  describe("getWinningMove()", () => {
    it("returns a winning move if one exists", () => {
      const intermediateBoard = ttt.play(false, 7, emptyBoard);
      const boardWithWinningMove = ttt.play(false, 6, intermediateBoard);
      const actual = bot.getWinningMove(boardWithWinningMove);
      expect(actual).toEqual(8);
    });
    it("returns undefined if no winning winning move exists", () => {
      const actual = bot.getWinningMove(emptyBoard);
      expect(actual).toBeUndefined();
    });
  });

  describe("preventImmediateLoss(board)", () => {
    it("returns a move that prevents X from winning if it exists", () => {
      const boardMove1 = ttt.play(true, 0, emptyBoard);
      const boardMove2 = ttt.play(true, 6, boardMove1);
      const actual = bot.preventImmediateLoss(boardMove2);
      expect(actual).toBe(3);
    });
    it("returns undefined if no such move exists", () => {
      const actual = bot.preventImmediateLoss(emptyBoard);
      expect(actual).toBeUndefined();
    });
  });

  describe("getAvailableCorner(board)", () => {
    const oneCornerPlayed = ttt.play(true, 0, emptyBoard);
    const twoCornersPlayed = ttt.play(true, 2, oneCornerPlayed);
    const threeCornersPlayed = ttt.play(true, 8, twoCornersPlayed);
    const fourCornersPlayed = ttt.play(true, 6, threeCornersPlayed);
    it("returns a corner if one is available", () => {
      const actual = bot.getAvailableCorner(threeCornersPlayed);
      expect(actual).toBe(6);
    });

    it("returns undefined if no corner is available", () => {
      const actual = bot.getAvailableCorner(fourCornersPlayed);
      expect(actual).toBeUndefined();
    });
  });

  describe("getAvailableSide(board)", () => {
    const oneSidePlayed = ttt.play(true, 1, emptyBoard);
    const twoSidesPlayed = ttt.play(true, 3, oneSidePlayed);
    const threeSidesPlayed = ttt.play(true, 7, twoSidesPlayed);
    const fourSidesPlayed = ttt.play(true, 5, threeSidesPlayed);
    it("returns a side if one is available", () => {
      const actual = bot.getAvailableSide(threeSidesPlayed);
      expect(actual).toBe(5);
    });

    it("returns undefined if no side is available", () => {
      const actual = bot.getAvailableSide(fourSidesPlayed);
      expect(actual).toBeUndefined();
    });
  });

  describe("preventOpposingCornersLoss(board)", () => {
    it("returns a side when two opposing corners have been played by X", () => {
      const boardMove1 = ttt.play(true, 0, emptyBoard);
      const boardMove2 = ttt.play(true, 8, boardMove1);
      const actual = bot.preventOpposingCornersLoss(boardMove2);
      expect([1, 3, 5, 7]).toContain(actual);
    });
  });

  describe("getBotMove(board)", () => {
    const emptyBoard = ttt.newBoard();
    it("returns undefined if no move is available", () => {
      const board = ttt.newBoard().fill("X");
      expect(bot.getBotMove(board)).toBeUndefined();
    });

    it("returns centre cells if no other moves have been made", () => {
      expect(bot.getBotMove(emptyBoard)).toBe(4);
    });

    it("does not return a cell which has been played", () => {
      const playedMiddle = ttt.play(true, 4, emptyBoard);
      expect(bot.getBotMove(playedMiddle)).not.toBe(4);
    });

    it("returns a corner cell if one is empty and board is not threatened", () => {
      let board = ttt.play(true, 4, emptyBoard);
      board = ttt.play(false, 0, board);
      expect(bot.getBotMove(board)).toBe(2);
      board = ttt.play(true, 2, board);
      expect(bot.getBotMove(board)).toBe(6);
    });

    it("returns a side cell if nothing else is available", () => {
      let board = ttt.play(false, 0, emptyBoard);
      board = ttt.play(true, 2, board);
      board = ttt.play(false, 3, board);
      board = ttt.play(true, 4, board);
      board = ttt.play(false, 6, board);
      board = ttt.play(true, 8, board);
      expect(bot.getBotMove(board)).toBe(1);
      board = ttt.play(false, 1, board);
      expect(bot.getBotMove(board)).toBe(5);
    });

    it("returns a cell which threatens a victory", () => {
      let secondRowThreatened = ttt.play(true, 3, emptyBoard);
      secondRowThreatened = ttt.play(true, 4, secondRowThreatened);
      expect(bot.getBotMove(secondRowThreatened)).toBe(5);
    });

    it("returns a cell that wins the game", () => {
      let board = ttt.play(false, 0, emptyBoard);
      board = ttt.play(false, 1, board);
      expect(bot.getBotMove(board)).toBe(2);
    });
  });
});
