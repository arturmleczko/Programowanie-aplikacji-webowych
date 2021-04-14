import { Games } from './games.enum';
import { Game } from './game.model';
import {
	TicTacToeCreator,
	BattleShipsCreator,
	SpaceShipsCreator,
} from './game.creator';

import { GameMenu } from './GameMenu';

export class GamePortal extends GameMenu {
	constructor() {
		super();
		this.initializeGamePortal();
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

			const selectedGame: Game = this.selectGame(parseInt(game));
			const nameSelectedGame: string = selectedGame.name;

			const gameNavigator = this.createReferenceToGame(nameSelectedGame);
			this.gameNavigation.appendChild(gameNavigator);
			gameNavigator.addEventListener('click', () =>
				this.handleGameClick(selectedGame, gameWindow)
			);
		}
	}

	selectGame(game: Games): Game {
		let selectedGame: Game | undefined;
		const { TicTacToe, BattleShips, SpaceShips } = Games;

		if (game === TicTacToe) {
			const gameCreator = new TicTacToeCreator();
			selectedGame = gameCreator.getGame();
		}

		if (game === BattleShips) {
			const gameCreator = new BattleShipsCreator();
			selectedGame = gameCreator.getGame();
		}

		if (game === SpaceShips) {
			const gameCreator = new SpaceShipsCreator();
			selectedGame = gameCreator.getGame();
		}

		return selectedGame as Game;
	}

	handleGameClick(selectedGame: Game, gameWindow: HTMLDivElement): void {
		while (gameWindow.firstChild) {
			gameWindow.removeChild(gameWindow.firstChild);
		}

		const gameElement = selectedGame.getGameElement();
		gameWindow.appendChild(gameElement);
		selectedGame.getGameLogic();
	}
}
