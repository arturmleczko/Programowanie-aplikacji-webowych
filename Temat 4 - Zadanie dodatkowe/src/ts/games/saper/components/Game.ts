import { Cell } from './Cell';
import { UI } from './UI';
import { Counter } from './Counter';
import { Timer } from './Timer';
import { ResetButton } from './ResetButton';
import { Modal } from './Modal';

import { IConfig, IButtons } from '../interfaces/interfaces';
import { NumberOrNull } from '../types/types';
import { Emotion } from '../enums/Emotion';

export class Game extends UI {
	config: IConfig = {
		easy: {
			rows: 8,
			cols: 8,
			mines: 10,
		},
		normal: {
			rows: 16,
			cols: 16,
			mines: 40,
		},
	};

	counter: Counter = new Counter();
	timer: Timer = new Timer();
	modal: Modal = new Modal();

	isGameFinished: boolean = false;

	numberOfRows: NumberOrNull = null;
	numberOfCols: NumberOrNull = null;
	numberOfMines: NumberOrNull = null;

	cells: Cell[][] = [];
	cellsElements: NodeListOf<HTMLElement> | null = null;
	cellsToReveal: number = 0;
	revealedCells: number = 0;

	board: HTMLElement = null;

	buttons: IButtons = {
		easy: null,
		normal: null,
		modal: null,
		reset: new ResetButton(),
	};

	initializeGame(): void {
		this.handleElements();
		this.counter.initializeCounter();
		this.timer.initializeTimer();
		this.buttons.reset.initializeResetButton();
		this.modal.initializeModal();
		this.addButtonsEventListeners();
		this.newGame();
	}

	newGame(
		rows: number = this.config.easy.rows,
		cols: number = this.config.easy.cols,
		mines: number = this.config.easy.mines
	): void {
		this.numberOfRows = rows;
		this.numberOfCols = cols;
		this.numberOfMines = mines;

		this.counter.setValue(this.numberOfMines);
		this.timer.resetTimer();

		this.cellsToReveal =
			this.numberOfRows * this.numberOfCols - this.numberOfMines;

		this.setStyles();

		this.generateCells();
		this.renderBoard();
		this.placeMinesInCells();

		this.cellsElements = this.getElements(this.UISelectors.cell);

		this.buttons.reset.changeEmotion(Emotion.neutral);

		this.isGameFinished = false;
		this.revealedCells = 0;

		this.addCellsEventListeners();
	}

	endGame(isWin: boolean) {
		this.isGameFinished = true;
		this.timer.stopTimer();
		this.modal.buttonText = 'Close';

		if (!isWin) {
			this.revealMines();
			this.modal.infoText = 'You lost, try again!';
			this.buttons.reset.changeEmotion(Emotion.negative);
			this.modal.setText();
			this.modal.toggleModal();
			return;
		} else {
			const { numberOfSeconds, maxNumberOfSeconds } = this.timer;

			this.modal.infoText =
				numberOfSeconds < maxNumberOfSeconds
					? `You won, it took you ${this.timer.numberOfSeconds} seconds, congratulations!`
					: 'You won, congratulations!';
			this.buttons.reset.changeEmotion(Emotion.positive);
			this.modal.setText();
			this.modal.toggleModal();
		}
	}

	handleElements(): void {
		this.board = this.getElement(this.UISelectors.board);
		this.buttons.modal = this.getElement(this.UISelectors.modalButton);
		this.buttons.easy = this.getElement(this.UISelectors.easyButton);
		this.buttons.normal = this.getElement(this.UISelectors.normalButton);
	}

	addCellsEventListeners(): void {
		this.cellsElements.forEach((element) => {
			element.addEventListener('click', this.handleCellClick);
			element.addEventListener('contextmenu', this.handleCellContentMenu);
		});
	}

	removeCellsEventListeners(): void {
		this.cellsElements.forEach((element) => {
			element.removeEventListener('click', this.handleCellClick);
		});
		this.cellsElements.forEach((element) => {
			element.removeEventListener(
				'contextmenu',
				this.handleCellContentMenu
			);
		});
	}

	addButtonsEventListeners(): void {
		const { easy, normal } = this.config;

		this.buttons.easy.addEventListener('click', () =>
			this.handleNewGameClick(easy.rows, easy.cols, easy.mines)
		);

		this.buttons.normal.addEventListener('click', () =>
			this.handleNewGameClick(normal.rows, normal.cols, normal.mines)
		);

		this.buttons.reset.element.addEventListener('click', () =>
			this.handleNewGameClick()
		);

		this.buttons.modal.addEventListener('click', this.modal.toggleModal);
	}

	handleNewGameClick(
		rows: number = this.numberOfRows,
		cols: number = this.numberOfCols,
		mines: number = this.numberOfMines
	): void {
		this.removeCellsEventListeners();
		this.newGame(rows, cols, mines);
	}

	generateCells(): void {
		this.cells.length = 0;

		for (let row = 0; row < this.numberOfRows; row++) {
			this.cells[row] = [];

			for (let col = 0; col < this.numberOfCols; col++) {
				this.cells[row].push(new Cell(col, row));
			}
		}
	}

	renderBoard(): void {
		while (this.board.firstChild) {
			this.board.removeChild(this.board.lastChild);
		}

		this.cells.flat().forEach((cell: Cell) => {
			this.board.insertAdjacentHTML('beforeend', cell.createElement());
			cell.element = cell.getElement(cell.selector);
		});
	}

	placeMinesInCells(): void {
		let minesToPlace: number = this.numberOfMines;

		while (!!minesToPlace) {
			const rowIndex: number = this.getRandomInteger(
				0,
				this.numberOfRows - 1
			);
			const colIndex: number = this.getRandomInteger(
				0,
				this.numberOfCols - 1
			);

			const cell: Cell = this.cells[rowIndex][colIndex];

			const hasCellMine: boolean = cell.isMine;

			if (!hasCellMine) {
				cell.addMine();
				minesToPlace--;
			}
		}
	}

	handleCellClick = (e: Event): void => {
		const target = e.target as HTMLDivElement;

		const rowIndex: number = parseInt(target.getAttribute('data-y'), 10);
		const colIndex: number = parseInt(target.getAttribute('data-x'), 10);

		const cell: Cell = this.cells[rowIndex][colIndex];

		this.clickCell(cell);
	};

	handleCellContentMenu = (e: Event): void => {
		e.preventDefault();
		const target = e.target as HTMLDivElement;

		const rowIndex: number = parseInt(target.getAttribute('data-y'), 10);
		const colIndex: number = parseInt(target.getAttribute('data-x'), 10);

		const cell: Cell = this.cells[rowIndex][colIndex];

		if (cell.isReveal || this.isGameFinished) return;

		if (cell.isFlagged) {
			this.counter.increment();
			cell.toggleFlag();
			return;
		}

		if (this.counter.value !== 0) {
			this.counter.decrement();
			cell.toggleFlag();
		}
	};

	getRandomInteger(min: number, max: number): number {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	clickCell(cell: Cell): void {
		if (this.isGameFinished || cell.isFlagged) return;

		if (cell.isMine) {
			this.endGame(false);
		}
		this.setCellValue(cell);

		if (this.revealedCells === this.cellsToReveal && !this.isGameFinished) {
			this.endGame(true);
		}
	}

	setCellValue(cell: Cell): void {
		let minesCount: number = 0;

		const startValueForRow: number = Math.max(cell.y - 1, 0);
		const endValueForRow: number = Math.min(
			cell.y + 1,
			this.numberOfRows - 1
		);

		const startValueForCol: number = Math.max(cell.x - 1, 0);
		const endValueForCol: number = Math.min(
			cell.x + 1,
			this.numberOfCols - 1
		);

		for (
			let rowIndex = startValueForRow;
			rowIndex <= endValueForRow;
			rowIndex++
		) {
			for (
				let colIndex = startValueForCol;
				colIndex <= endValueForCol;
				colIndex++
			) {
				if (this.cells[rowIndex][colIndex].isMine) {
					minesCount++;
				}
			}
		}

		cell.value = minesCount;
		cell.revealCell();
		this.revealedCells++;

		if (!cell.value) {
			for (
				let rowIndex = startValueForRow;
				rowIndex <= endValueForRow;
				rowIndex++
			) {
				for (
					let colIndex = startValueForCol;
					colIndex <= endValueForCol;
					colIndex++
				) {
					const cell: Cell = this.cells[rowIndex][colIndex];

					if (!cell.isReveal) {
						this.clickCell(cell);
					}
				}
			}
		}
	}

	revealMines(): void {
		const cellsWithMines: Cell[] = this.cells
			.flat()
			.filter(({ isMine }) => isMine);

		cellsWithMines.forEach((cell) => cell.revealCell());
	}

	setStyles(): void {
		const cellsInRow = this.numberOfCols.toString();
		document.documentElement.style.setProperty(
			'--cells-in-row',
			cellsInRow
		);
	}
}
