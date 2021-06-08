import { UI } from './UI';
import { SessionStorage } from './Memory/SessionStorage';
import { LocalStorage } from './Memory/LocalStorage';
import { Client } from './Client';
import { WinningCombinations } from './WinningCombinations';
import { ControlPanel } from './ControlPanel';

import {
	ICanvasElements,
	IMemory,
	IMemoryAccess,
	IParameters,
	ISymbolsImage,
	ICellIndexes,
} from '../interfaces/game.interfaces';
import { IPlayer } from '../interfaces/options.interfaces';

import { Symbols } from '../symbols.type';

import { Symbol } from '../symbol.enum';

import { convertOneDArrayToTwoDArray } from './Memory/convertOneDArrayToTwoDArray';
import { createDOMElement } from '../../../createDOMElement';

import xImageSrc from '../../../../img/games/ticTacToe/X.png';
import oImageSrc from '../../../../img/games/ticTacToe/O.png';
import tieImageSrc from '../../../../img/games/ticTacToe/TIE.png';

export class Game extends UI {
	canvasElements: ICanvasElements = {
		canvas: null,
		ctx: null,
	};

	controlPanel: ControlPanel = new ControlPanel();
	client: Client = new Client();

	memory: IMemory = {
		sessionStorage: new SessionStorage(),
		localStorage: new LocalStorage(),
	};

	memoryAccess: IMemoryAccess = {
		sessionStorageAccess: false,
		localStorageAccess: false,
	};

	board: number[][] = [];

	boardParameters: IParameters = {
		size: null,
		spaceSize: 160,
	};

	gameState: Symbols[] = [];
	lastGameState: Symbols[] = [];

	currentPlayer: Symbols | null = null;

	symbolsImages: ISymbolsImage = {
		xImage: new Image(),
		oImage: new Image(),
	};

	winningCombination: WinningCombinations = new WinningCombinations(
		this.board
	);

	gameOver: boolean = false;

	constructor(size: number) {
		super();
		this.boardParameters.size = size;
	}

	initializeGame(player: IPlayer): void {
		this.currentPlayer = player.you;

		this.client.initializeClient();
		this.controlPanel.initializeControlPanel();

		this.handleCanvasElements();
		this.addButtonsEventListeners();
		this.setSymbolsImagesContent();
		this.drawBoard();
		this.winningCombination.initializeWinningCombinations();
		this.handlePlayerClickLocation(player);
		this.configureTwoPlayerGame();
	}

	handleCanvasElements(): void {
		this.canvasElements.canvas = <HTMLCanvasElement>(
			document.getElementById('cvs')
		);

		this.canvasElements.ctx = <CanvasRenderingContext2D>(
			this.canvasElements.canvas.getContext('2d')
		);
	}

	setSymbolsImagesContent(): void {
		const { xImage, oImage } = this.symbolsImages;

		xImage.src = <string>xImageSrc;
		oImage.src = <string>oImageSrc;
	}

	addButtonsEventListeners(): void {
		const { saveButton, undoButton, loadButton } =
			this.controlPanel.elements;

		saveButton.addEventListener('click', () => this.handleSaveButton());
		undoButton.addEventListener('click', () => this.handleUndoButton());
		loadButton.addEventListener('click', () => this.handleLoadButton());
	}

	handleSaveButton(): void {
		this.memory.localStorage.saveGame(this.gameState);
		this.controlPanel.displayLoadButton();
	}

	handleUndoButton(): void {
		const { canvas, ctx } = this.canvasElements;
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		this.memoryAccess.sessionStorageAccess = true;
		this.memoryAccess.localStorageAccess = false;

		this.drawBoard();
		this.gameState = this.memory.sessionStorage.readLastMove();
	}

	handleLoadButton(): void {
		const { canvas, ctx } = this.canvasElements;
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		this.memoryAccess.sessionStorageAccess = false;
		this.memoryAccess.localStorageAccess = true;

		this.drawBoard();
		this.gameState = this.memory.localStorage.readGame();
	}

	drawBoard(): void {
		const { canvas, ctx } = this.canvasElements;
		const { size, spaceSize } = this.boardParameters;

		this.setBoardSize();
		let id: number = 0;

		for (let i: number = 0; i < size; i++) {
			this.board[i] = [];

			for (let j: number = 0; j < size; j++) {
				this.board[i][j] = id;
				id++;

				ctx.strokeStyle = '#000';
				ctx.lineWidth = 3;
				ctx.strokeRect(
					j * spaceSize,
					i * spaceSize,
					spaceSize,
					spaceSize
				);
			}
		}

		canvas.classList.remove('hide');
	}

	setBoardSize(): void {
		const { size, spaceSize } = this.boardParameters;
		const { canvas } = this.canvasElements;

		const sizeSide: number = spaceSize * size;

		canvas.width = sizeSide;
		canvas.height = sizeSide;

		this.checkMemory();
	}

	checkMemory(): void {
		const { size } = this.boardParameters;
		const { sessionStorage, localStorage } = this.memory;
		let { sessionStorageAccess, localStorageAccess } = this.memoryAccess;

		if (sessionStorageAccess) {
			const readStateGame: Symbols[] = sessionStorage.readLastMove();
			this.dataRecovery(readStateGame, size);
		} else if (localStorageAccess) {
			const readStateGame: Symbols[] = localStorage.readGame();
			this.dataRecovery(readStateGame, size);
		} else {
			const numberCells: number = Math.pow(size, 2);
			this.gameState = new Array(numberCells);
		}
	}

	handlePlayerClickLocation(player: IPlayer): void {
		const { canvas } = this.canvasElements;

		canvas.addEventListener('click', (event) => {
			const { sessionStorage } = this.memory;
			const { size } = this.boardParameters;

			if (this.gameOver) return;

			const { i, j } = this.calculateCellIndexes(event);
			const id = this.board[i][j];

			if (this.gameState[id]) return;

			sessionStorage.saveLastMove(this.gameState);
			this.controlPanel.displayUndoButton();

			this.gameState[id] = this.currentPlayer;

			this.drawOnBoard(this.currentPlayer, i, j);

			this.checkGameResult(this.currentPlayer);

			this.currentPlayer =
				this.currentPlayer === player.you ? player.friend : player.you;

			this.client.provideGameData(
				size,
				this.gameState,
				this.currentPlayer
			);
		});
	}

	calculateCellIndexes(event: MouseEvent): ICellIndexes {
		const { canvas } = this.canvasElements;
		const { spaceSize } = this.boardParameters;

		const x: number = event.clientX - canvas.getBoundingClientRect().x;
		const y: number = event.clientY - canvas.getBoundingClientRect().y;

		const i: number = Math.floor(y / spaceSize);
		const j: number = Math.floor(x / spaceSize);

		const cellIndexes: ICellIndexes = { i: i, j: j };
		return cellIndexes;
	}

	drawOnBoard(currentPlayer: Symbols, i: number, j: number): void {
		const { xImage, oImage } = this.symbolsImages;
		const { spaceSize } = this.boardParameters;
		const { ctx } = this.canvasElements;

		const img = currentPlayer === Symbol.X ? xImage : oImage;
		ctx.drawImage(img, j * spaceSize, i * spaceSize);
	}

	configureTwoPlayerGame(): void {
		this.client.socket.onmessage = (message) => {
			const data = JSON.parse(message.data);

			const size: number = data.size;
			const gameState: Symbols[] = data.gameState;
			const currentPlayer: Symbols = data.currentPlayer;

			this.gameState.length = 0;
			gameState.forEach((symbol, index) => {
				this.gameState[index] = symbol;
			});

			this.dataRecovery(gameState, size);

			if (this.gameOver === false) {
				this.checkGameResult(this.currentPlayer);
			}

			this.currentPlayer = currentPlayer;
		};
	}

	dataRecovery(readStateGame: Symbols[], size: number): void {
		const preparedGameState: Symbols[] = convertOneDArrayToTwoDArray(
			readStateGame,
			size
		);

		for (let i: number = 0; i < preparedGameState.length; i++) {
			for (let j: number = 0; j < preparedGameState[i].length; j++) {
				const gameCell = <Symbols>preparedGameState[i][j];

				if (gameCell !== null) {
					this.drawOnBoard(gameCell, i, j);
				}
			}
		}
	}

	checkGameResult(currentPlayer?: Symbols): void {
		if (this.isWinner(currentPlayer)) {
			this.showGameOver(currentPlayer);
			this.gameOver = true;
			return;
		}

		if (this.isTie()) {
			this.showGameOver('TIE');
			this.gameOver = true;
			return;
		}
	}

	isWinner(verdict: Symbols): boolean {
		const combos: number[][] = this.winningCombination.combos;

		for (let i: number = 0; i < combos.length; i++) {
			let won: boolean = true;

			for (let j: number = 0; j < combos[i].length; j++) {
				let id = combos[i][j];
				won = this.gameState[id] === verdict && won;
			}

			if (won) {
				return true;
			}
		}

		return false;
	}

	isTie(): boolean {
		let isBoardFill: boolean | null = true;
		for (let i = 0; i < this.gameState.length; i++) {
			isBoardFill = this.gameState[i] && isBoardFill;
		}

		if (isBoardFill) {
			return true;
		}

		return false;
	}

	showGameOver(verdict: Symbols | string): void {
		let message: string = 'The Winner is';
		let imageSrc: string | null = null;

		switch (verdict) {
			case Symbol.X:
				imageSrc = <string>xImageSrc;
				break;
			case Symbol.O:
				imageSrc = <string>oImageSrc;
				break;
			case 'TIE':
				message = 'Oops No Winner';
				imageSrc = <string>tieImageSrc;
				break;
		}

		this.createGameOverBox(message, imageSrc);

		const { sessionStorage, localStorage } = this.memory;
		const { canvas } = this.canvasElements;

		sessionStorage.clearLastMove();
		localStorage.clearSavedGame();

		this.controlPanel.hideUndoButton();
		this.controlPanel.hideLoadButton();
		this.controlPanel.hideControlPanel();

		canvas.classList.add('hide');
	}

	createGameOverBox(message: string, imageSrc: string | null): void {
		const gameOverBox = <HTMLDivElement>(
			this.getElement(this.UISelectors.gameOverBox)
		);

		const heading = createDOMElement({
			tagName: 'h1',
			className: 'game-over__heading',
			textContent: message,
		});

		const image = createDOMElement({
			tagName: 'img',
			className: 'game-over__image',
			src: imageSrc,
		});

		const button = createDOMElement({
			tagName: 'button',
			className: 'game-over__play-again',
			textContent: 'Play Again!',
		});

		gameOverBox.appendChild(heading);
		gameOverBox.appendChild(image);
		gameOverBox.appendChild(button);

		gameOverBox.classList.remove('hide');

		button.addEventListener('click', () => this.playAgain(gameOverBox));
	}

	playAgain(gameOverBox: HTMLDivElement): void {
		const options = <HTMLDivElement>(
			this.getElement(this.UISelectors.options)
		);

		gameOverBox.classList.add('hide');

		while (gameOverBox.firstChild) {
			gameOverBox.removeChild(gameOverBox.firstChild);
		}

		options.classList.remove('hide');
	}
}
