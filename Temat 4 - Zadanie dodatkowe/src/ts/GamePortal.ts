import { Games } from './games.enum';
import { IGame } from './game.model';
import {
	TicTacToeCreator,
	BattleShipsCreator,
	SaperCreator,
} from './game.creator';

import { GameMenu } from './GameMenu';

export class GamePortal extends GameMenu {
	constructor() {
		super();
		this.initializeGamePortal();
		this.initializeSwitchTheme();
	}

	initializeGamePortal(): void {
		this.createMenu();
		const gameWindow = this.createGameWindow();

		this.createGameNavigation(gameWindow);
	}

	createGameWindow(): HTMLDivElement {
		const gameWindow = document.createElement('div') as HTMLDivElement;
		gameWindow.className = 'game-window';

		document.body.appendChild(gameWindow);
		return gameWindow;
	}

	createGameNavigation(gameWindow: HTMLDivElement): void {
		for (const game in Games) {
			if (isNaN(Number(game))) return;

			const selectedGame: IGame = this.selectGame(parseInt(game));
			const nameSelectedGame: string = selectedGame.name;
			const disabled: boolean = selectedGame.disabled;

			const gameNavigator = this.createReferenceToGame(
				nameSelectedGame,
				disabled
			);
			this.gameNavigation.appendChild(gameNavigator);
			gameNavigator.addEventListener('click', (e) =>
				this.handleGameClick(e, selectedGame, gameWindow)
			);
		}
	}

	selectGame(game: Games): IGame {
		let selectedGame: IGame | undefined;
		const { TicTacToe, BattleShips, Saper } = Games;
		if (game === TicTacToe) {
			const gameCreator = new TicTacToeCreator();
			selectedGame = gameCreator.getGame();
		}

		if (game === BattleShips) {
			const gameCreator = new BattleShipsCreator();
			selectedGame = gameCreator.getGame();
		}

		if (game === Saper) {
			const gameCreator = new SaperCreator();
			selectedGame = gameCreator.getGame();
		}

		return selectedGame as IGame;
	}

	handleGameClick(
		e: MouseEvent,
		selectedGame: IGame,
		gameWindow: HTMLDivElement
	): void {
		this.clearGameWindowAndOverlay(gameWindow);

		const selectedDiv = e.target as HTMLDivElement;
		this.setOverlay(selectedDiv);

		const gameElement = selectedGame.getGameElement();
		gameWindow.appendChild(gameElement);
		selectedGame.getGameLogic();
	}

	clearGameWindowAndOverlay(gameWindow: HTMLDivElement): void {
		const gameNavigators = document.querySelectorAll('[data-overlay]');
		gameNavigators.forEach((gameNavigator) => {
			const divGameNavigator = gameNavigator as HTMLDivElement;
			divGameNavigator.style.backgroundColor = '';
		});

		while (gameWindow.firstChild) {
			gameWindow.removeChild(gameWindow.firstChild);
		}
	}

	setOverlay(selectedDiv: HTMLDivElement) {
		const template = document.documentElement.dataset.theme;
		let selectedOverlayColor: string;

		if (template === 'dark') {
			selectedOverlayColor = 'rgba(255, 255, 255, 0.3)';
		} else {
			selectedOverlayColor = 'rgba(0, 0, 0, 0.233)';
		}

		selectedDiv.style.backgroundColor = selectedOverlayColor;
	}
}
