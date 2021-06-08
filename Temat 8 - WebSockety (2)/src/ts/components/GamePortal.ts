import { GameMenu } from './GameMenu';

import { IGame } from '../interfaces/game.interface';
import { Games } from '../enums/games.enum';

import { TicTacToeCreator, TetrisCreator, SaperCreator } from '../game.creator';

export class GamePortal extends GameMenu {
	gameWindow: HTMLDivElement | null = null;

	initializeGamePortal(): void {
		this.createMenu();
		this.createGameWindow();
		this.createGameNavigation();
		this.initializeSwitchTheme();
	}

	createGameWindow(): void {
		const gameWindow = <HTMLDivElement>document.createElement('div');
		gameWindow.className = 'game-window';

		this.gameWindow = gameWindow;
		document.body.appendChild(gameWindow);
	}

	createGameNavigation(): void {
		for (const game in Games) {
			if (isNaN(Number(game))) return;

			const selectedGame: IGame = this.selectGame(parseInt(game));
			const nameSelectedGame: string = selectedGame.name;
			const disabled: boolean = selectedGame.disabled;

			const gameNavigator: HTMLLIElement = this.createReferenceToGame(
				nameSelectedGame,
				disabled
			);

			this.gameNavigation.appendChild(gameNavigator);

			gameNavigator.addEventListener('click', (e) =>
				this.handleGameClick(e, selectedGame)
			);
		}
	}

	selectGame(game: Games): IGame {
		let selectedGame: IGame | null;

		if (game === Games.TicTacToe) {
			const gameCreator = new TicTacToeCreator();
			selectedGame = gameCreator.getGame();
		} else if (game === Games.Tetris) {
			const gameCreator = new TetrisCreator();
			selectedGame = gameCreator.getGame();
		} else if (game === Games.Saper) {
			const gameCreator = new SaperCreator();
			selectedGame = gameCreator.getGame();
		}

		return selectedGame;
	}

	handleGameClick(e: Event, selectedGame: IGame): void {
		this.clearGameWindowAndOverlay();

		const selectedBox = <HTMLLIElement>e.target;
		this.setOverlay(selectedBox);

		const gameElement: HTMLElement = selectedGame.getGameElement();
		this.gameWindow.appendChild(gameElement);

		selectedGame.getGameLogic();
	}

	clearGameWindowAndOverlay() {
		const gameNavigators = <NodeListOf<HTMLDivElement>>(
			document.querySelectorAll('[data-overlay]')
		);

		gameNavigators.forEach((gameNavigator: HTMLDivElement) => {
			const divGameNavigator = gameNavigator;
			divGameNavigator.style.backgroundColor = '';
		});

		while (this.gameWindow.firstChild) {
			this.gameWindow.removeChild(this.gameWindow.firstChild);
		}
	}

	setOverlay(selectedBox: HTMLLIElement) {
		const template: string = document.documentElement.dataset.theme;
		let selectedOverlayColor: string | null = null;

		if (template === 'dark') {
			selectedOverlayColor = 'rgba(255, 255, 255, 0.3)';
		} else {
			selectedOverlayColor = 'rgba(0, 0, 0, 0.233)';
		}

		selectedBox.style.backgroundColor = selectedOverlayColor;
	}
}
