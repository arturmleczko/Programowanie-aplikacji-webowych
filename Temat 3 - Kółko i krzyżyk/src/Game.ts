import { UI } from './UI';
import { Symbols, Player } from './Options';

import xImageSrc from './img/X.png';
import oImageSrc from './img/O.png';
import tieImageSrc from './img/TIE.png';

interface BoardVariables {
	COLUMN: number;
	ROW: number;
	SPACE_SIZE: number;
}

interface SymbolsImage {
	xImage: HTMLImageElement;
	oImage: HTMLImageElement;
}

interface CellIndexes {
	i: number;
	j: number;
}

type Combo = [number, number, number];

export class Game extends UI {
	canvas = document.getElementById('cvs') as HTMLCanvasElement;
	ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;

	symbolsImages: SymbolsImage = {
		xImage: new Image(),
		oImage: new Image(),
	};

	board: number[][] = [];
	boardVariables: BoardVariables = {
		COLUMN: 3,
		ROW: 3,
		SPACE_SIZE: 160,
	};

	gameData: Symbols[] = new Array(9);

	COMBOS: Combo[] = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];

	GAME_OVER = false;

	initializationGame(player: Player) {
		let currentPlayer = player.man;

		this.setImagesContent();
		this.drawBoard();
		this.handlePlayerClickLocation(currentPlayer, player);
	}

	setImagesContent() {
		const { xImage, oImage } = this.symbolsImages;
		xImage.src = `${xImageSrc}`;
		oImage.src = `${oImageSrc}`;
	}

	drawBoard() {
		const { COLUMN, ROW, SPACE_SIZE } = this.boardVariables;
		let id = 0;

		for (let i = 0; i < ROW; i++) {
			this.board[i] = [];

			for (let j = 0; j < COLUMN; j++) {
				this.board[i][j] = id;
				id++;

				this.ctx.strokeStyle = '#000';
				this.ctx.lineWidth = 3;
				this.ctx.strokeRect(
					j * SPACE_SIZE,
					i * SPACE_SIZE,
					SPACE_SIZE,
					SPACE_SIZE
				);
			}
		}

		this.canvas.classList.remove('hide');
	}

	handlePlayerClickLocation(currentPlayer: Symbols, player: Player) {
		this.canvas.addEventListener('click', (event) => {
			if (this.GAME_OVER === true) return;
			const { i, j } = this.calculateCellIndexes(event);

			const id = this.board[i][j];
			if (this.gameData[id]) return;

			this.gameData[id] = currentPlayer;
			this.drawOnBoard(currentPlayer, i, j);

			this.checkGameResult(currentPlayer);

			currentPlayer =
				currentPlayer == player.man ? player.friend : player.man;
		});
	}

	calculateCellIndexes(event: MouseEvent): CellIndexes {
		const X = event.clientX - this.canvas.getBoundingClientRect().x;
		const Y = event.clientY - this.canvas.getBoundingClientRect().y;

		const SPACE_SIZE = this.boardVariables.SPACE_SIZE;
		const i = Math.floor(Y / SPACE_SIZE);
		const j = Math.floor(X / SPACE_SIZE);

		const cellIndexes: CellIndexes = { i: i, j: j };
		return cellIndexes;
	}

	drawOnBoard(currentPlayer: Symbols, i: number, j: number) {
		const { xImage, oImage } = this.symbolsImages;
		const SPACE_SIZE = this.boardVariables.SPACE_SIZE;

		const img = currentPlayer === 'X' ? xImage : oImage;
		this.ctx.drawImage(img, j * SPACE_SIZE, i * SPACE_SIZE);
	}

	checkGameResult(currentPlayer?: Symbols) {
		if (this.isWinner(this.gameData, currentPlayer)) {
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

	isWinner(gameData: Symbols[], verdict: Symbols) {
		for (let i = 0; i < this.COMBOS.length; i++) {
			let won = true;

			for (let j = 0; j < this.COMBOS[i].length; j++) {
				let id = this.COMBOS[i][j];
				won = gameData[id] === verdict && won;
			}

			if (won) {
				return true;
			}
		}

		return false;
	}

	isTie() {
		let isBoardFill: boolean | undefined = true;
		for (let i = 0; i < this.gameData.length; i++) {
			isBoardFill = this.gameData[i] && isBoardFill;
		}

		if (isBoardFill) {
			return true;
		}

		return false;
	}

	showGameOver(verdict: Symbols | string) {
		const gameOverElement = this.getElement(
			this.UISelectors.gameOverElement
		) as HTMLElement;

		let message: string = 'The Winner is';
		let imageSrc: string | undefined = undefined;

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

		gameOverElement.innerHTML = `
			<h1 class="game-over__heading">${message}</h1>
			<img class="game-over__image" src="${imageSrc}"/>
			<div class="game-over__play-again" onclick="location.reload()">Play Again!</div>
		`;

		this.canvas.classList.add('hide');
		gameOverElement.classList.remove('hide');
	}
}
