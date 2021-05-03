import { UI } from './UI';
import { Symbols, Player } from './Options';
import { WinningCombinations } from './WinningCombinations';
import { createDOMElement } from '../../../createDOMElement';

import xImageSrc from '../../../../img/games/ticTacToe/X.png';
import oImageSrc from '../../../../img/games/ticTacToe/O.png';
import tieImageSrc from '../../../../img/games/ticTacToe/TIE.png';

interface SymbolsImage {
	xImage: HTMLImageElement;
	oImage: HTMLImageElement;
}

interface CellIndexes {
	i: number;
	j: number;
}

export class Game extends UI {
	canvas = document.getElementById('cvs') as HTMLCanvasElement;
	ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;

	board: number[][] = [];

	SIZE!: number;
	SPACE_SIZE: number = 160;

	gameData: Symbols[] = [];

	symbolsImages: SymbolsImage = {
		xImage: new Image(),
		oImage: new Image(),
	};

	winningCombination = new WinningCombinations(this.board);
	COMBOS = this.winningCombination.COMBOS;

	GAME_OVER: boolean = false;

	constructor(SIZE: number) {
		super();
		this.SIZE = SIZE;
	}

	initializationGame(player: Player): void {
		let currentPlayer = player.you;

		this.setImagesContent();
		this.drawBoard();
		console.log(this.board);
		console.log(this.COMBOS);
		this.winningCombination.initializeWinningCombinations();
		this.handlePlayerClickLocation(currentPlayer, player);
	}

	setImagesContent(): void {
		const { xImage, oImage } = this.symbolsImages;
		xImage.src = `${xImageSrc}`;
		oImage.src = `${oImageSrc}`;
	}

	drawBoard(): void {
		this.setBoardProperties();
		let id = 0;

		for (let i = 0; i < this.SIZE; i++) {
			this.board[i] = [];

			for (let j = 0; j < this.SIZE; j++) {
				this.board[i][j] = id;
				id++;

				this.ctx.strokeStyle = '#000';
				this.ctx.lineWidth = 3;
				this.ctx.strokeRect(
					j * this.SPACE_SIZE,
					i * this.SPACE_SIZE,
					this.SPACE_SIZE,
					this.SPACE_SIZE
				);
			}
		}

		this.canvas.classList.remove('hide');
	}

	setBoardProperties(): void {
		const numberCells: number = Math.pow(this.SIZE, 2);
		this.gameData = new Array(numberCells);

		const sizeSideBard: number = this.SPACE_SIZE * this.SIZE;
		this.canvas.width = sizeSideBard;
		this.canvas.height = sizeSideBard;
	}

	handlePlayerClickLocation(currentPlayer: Symbols, player: Player): void {
		this.canvas.addEventListener('click', (event) => {
			if (this.GAME_OVER === true) return;
			const { i, j } = this.calculateCellIndexes(event);

			const id = this.board[i][j];
			if (this.gameData[id]) return;

			this.gameData[id] = currentPlayer;
			this.drawOnBoard(currentPlayer, i, j);

			this.checkGameResult(currentPlayer);

			currentPlayer =
				currentPlayer == player.you ? player.friend : player.you;
		});
	}

	calculateCellIndexes(event: MouseEvent): CellIndexes {
		const X = event.clientX - this.canvas.getBoundingClientRect().x;
		const Y = event.clientY - this.canvas.getBoundingClientRect().y;

		const SPACE_SIZE = this.SPACE_SIZE;
		const i = Math.floor(Y / SPACE_SIZE);
		const j = Math.floor(X / SPACE_SIZE);

		const cellIndexes: CellIndexes = { i: i, j: j };
		return cellIndexes;
	}

	drawOnBoard(currentPlayer: Symbols, i: number, j: number): void {
		const { xImage, oImage } = this.symbolsImages;
		const SPACE_SIZE = this.SPACE_SIZE;

		const img = currentPlayer === 'X' ? xImage : oImage;
		this.ctx.drawImage(img, j * SPACE_SIZE, i * SPACE_SIZE);
	}

	checkGameResult(currentPlayer?: Symbols): void {
		if (this.isWinner(currentPlayer)) {
			this.showGameOver(currentPlayer);
			this.GAME_OVER = true;
			return;
		}

		if (this.isTie()) {
			this.showGameOver('TIE');
			this.GAME_OVER = true;
			return;
		}
	}

	isWinner(verdict: Symbols): boolean {
		for (let i = 0; i < this.COMBOS.length; i++) {
			let won = true;

			for (let j = 0; j < this.COMBOS[i].length; j++) {
				let id = this.COMBOS[i][j];
				won = this.gameData[id] === verdict && won;
			}

			if (won) {
				return true;
			}
		}

		return false;
	}

	isTie(): boolean {
		let isBoardFill: boolean | undefined = true;
		for (let i = 0; i < this.gameData.length; i++) {
			isBoardFill = this.gameData[i] && isBoardFill;
		}

		if (isBoardFill) {
			return true;
		}

		return false;
	}

	showGameOver(verdict: Symbols | string): void {
		let message: string = 'The Winner is';
		let imageSrc: string | undefined;

		switch (verdict) {
			case 'X':
				imageSrc = `${xImageSrc}`;
				break;
			case 'O':
				imageSrc = `${oImageSrc}`;
				break;
			case 'TIE':
				message = 'Oops No Winner';
				imageSrc = `${tieImageSrc}`;
				break;
		}

		this.gameOver(message, imageSrc);
	}

	gameOver(message: string, imageSrc: string | undefined): void {
		const gameOverElement = this.getElement(
			this.UISelectors.gameOverElement
		) as HTMLElement;

		const h1 = createDOMElement({
			tagName: 'h1',
			className: 'game-over__heading',
			textContent: message,
		});

		const img = createDOMElement({
			tagName: 'img',
			className: 'game-over__image',
			src: imageSrc,
		});

		const div = createDOMElement({
			tagName: 'div',
			className: 'game-over__play-again',
			textContent: 'Play Again!',
		});

		gameOverElement.appendChild(h1);
		gameOverElement.appendChild(img);
		gameOverElement.appendChild(div);

		this.canvas.classList.add('hide');
		gameOverElement.classList.remove('hide');

		div.addEventListener('click', () => this.playAgain(gameOverElement));
	}

	playAgain(gameOverElement: HTMLElement): void {
		const options = this.getElement(
			this.UISelectors.options
		) as HTMLElement;

		gameOverElement.classList.add('hide');
		while (gameOverElement.firstChild) {
			gameOverElement.removeChild(gameOverElement.firstChild);
		}
		options.classList.remove('hide');
	}
}
