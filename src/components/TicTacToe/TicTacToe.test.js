import * as ttt from "./TicTacToe";

describe("TicTacToe", () => {
  describe("newBoard()", () => {
    it("returns the predefined array", () => {
      const actual = ttt.newBoard();
      const expected = ["", "", "", "", "", "", "", "", ""];
      expect(actual).toEqual(expected);
    });

    it("returns a new array every time", () => {
      const actual = ttt.newBoard();
      const expected = ttt.newBoard();
      expect(actual).not.toBe(expected);
    });
  });

  describe("checkIfEmpty(position, board)", () => {
    const board = ttt.newBoard();

    it("returns true if the position is empty", () => {
      expect(ttt.checkIfEmpty(3, board)).toBe(true);
    });

    it("returns false if the position is not empty", () => {
      const nonEmptyBoard = ttt.play(true, 4, board);
      expect(ttt.checkIfEmpty(4, nonEmptyBoard)).toBe(false);
    });
  });

  describe("play(isCross, position, board)", () => {
    const board = ttt.newBoard();

    it("does not mutate the board", () => {
      const actual = ttt.newBoard();
      ttt.play(true, 0, actual);
      expect(actual).toEqual(board);
    });

    it("places an X on the correct position", () => {
      const actual = ttt.play(true, 3, board);
      const expected = board.slice();
      expected[3] = "X";
      expect(actual).toEqual(expected);
    });

    it("places an O on the correct position", () => {
      const actual = ttt.play(false, 6, board);
      const expected = board.slice();
      expected[6] = "O";
      expect(actual).toEqual(expected);
    });

    it("places Xs and Os correctly", () => {
      let game = board;
      game = ttt.play(false, 0, game);
      game = ttt.play(false, 1, game);
      game = ttt.play(true, 3, game);
      game = ttt.play(true, 4, game);
      game = ttt.play(true, 8, game);
      const actual = game.slice();
      const expected = ["O", "O", "", "X", "X", "", "", "", "X"];
      expect(actual).toEqual(expected);
    });
  });

  describe("getWinner(board)", () => {
    it("returns undefined when there is no winner", () => {
      expect(ttt.getWinner(ttt.newBoard())).toBeUndefined();

      const losingBoard = ["O", "X", "X", "X", "X", "O", "O", "O", "X"];
      expect(ttt.getWinner(losingBoard)).toBeUndefined();
    });

    it("returns the indices of the winner row", () => {
      const row1 = ["X", "X", "X", "", "", "", "", "", ""];
      expect(ttt.getWinner(row1)).toEqual([0, 1, 2]);

      const row2 = ["", "", "", "X", "X", "X", "", "", ""];
      expect(ttt.getWinner(row2)).toEqual([3, 4, 5]);

      const row3 = ["", "", "", "", "", "", "O", "O", "O"];
      expect(ttt.getWinner(row3)).toEqual([6, 7, 8]);
    });

    it("returns the indices of the winner column", () => {
      const col1 = ["X", "", "", "X", "", "", "X", "", ""];
      expect(ttt.getWinner(col1)).toEqual([0, 3, 6]);

      const col2 = ["", "X", "", "", "X", "", "", "X", ""];
      expect(ttt.getWinner(col2)).toEqual([1, 4, 7]);

      const col3 = ["", "", "O", "", "", "O", "", "", "O"];
      expect(ttt.getWinner(col3)).toEqual([2, 5, 8]);
    });

    it("returns the indices of the winner diagonal", () => {
      const diag1 = ["X", "", "", "", "X", "", "", "", "X"];
      expect(ttt.getWinner(diag1)).toEqual([0, 4, 8]);

      const diag2 = ["", "", "O", "", "O", "", "O", "", ""];
      expect(ttt.getWinner(diag2)).toEqual([2, 4, 6]);
    });
  });
});
