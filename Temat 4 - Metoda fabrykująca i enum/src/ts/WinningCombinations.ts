export class WinningCombinations {
	board: number[][];
	COMBOS: number[][] = [];

	constructor(board: number[][]) {
		this.board = board;
	}

	initializeWinningCombinations() {
		this.rowCombinations();
		this.columnCombinations();
		this.firstDiagonalCombination();
		this.secondDiagonalCombination();
	}

	rowCombinations() {
		this.board.forEach((rowCombination: number[]) =>
			this.COMBOS.push(rowCombination)
		);
	}

	columnCombinations() {
		const transposedBoard: number[][] = this.board[0].map((i) =>
			this.board.map((rowCombination) => rowCombination[i])
		);

		transposedBoard.forEach((columnCombination: number[]) =>
			this.COMBOS.push(columnCombination)
		);
	}

	firstDiagonalCombination() {
		this.calculateDiagonalCombination(this.board);
	}

	secondDiagonalCombination() {
		const turnedBy180Degrees: number[][] = [];

		for (let i = this.board.length - 1; i >= 0; i--) {
			turnedBy180Degrees.push(this.board[i]);
		}

		this.calculateDiagonalCombination(turnedBy180Degrees);
	}

	calculateDiagonalCombination(board: number[][]) {
		const diagonalBoard: number[] = [];

		for (let i = 0; i < board.length; i++) {
			for (let j = 0; j < board[i].length; j++) {
				if (i === j) {
					diagonalBoard.push(board[j][i]);
				}
			}
		}

		this.COMBOS.push(diagonalBoard);
	}
}
