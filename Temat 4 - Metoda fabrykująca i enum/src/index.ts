import { Games } from './games.enum';
import { Game } from './game.model';
import {
	TicTacToeCreator,
	BattleShipsCreator,
	SpaceShipsCreator,
} from './gameCreator';
import {
	createMenuContainerDOM,
	createReferenceToGame,
} from './menuContainerDOM';
import './main.scss';

class App {
	GAME: Game;
	constructor() {
		this.init();
	}

	init(): void {
		const { menu, gamesContainer } = createMenuContainerDOM();
		const gameContainer = <HTMLDivElement>document.createElement('div');
		gameContainer.className = 'game-container';

		this.createMenuContainer(gamesContainer, gameContainer);
		// menuContainer.appendChild(list);
		document.body.appendChild(menu);
		document.body.appendChild(gameContainer);
	}

	createMenuContainer(
		gamesContainer: HTMLUListElement,
		gameContainer: HTMLDivElement
	) {
		for (const game in Games) {
			if (isNaN(Number(game))) return;

			const selectedGame: Game = this.selectGame(parseInt(game));
			const nameSelectedGame: string = selectedGame.name;

			const li = createReferenceToGame(nameSelectedGame);
			gamesContainer.appendChild(li);
			li.addEventListener('click', () =>
				this.handleGameClick(selectedGame, gameContainer)
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

	handleGameClick(selectedGame: Game, gameContainer: HTMLDivElement) {
		while (gameContainer.firstChild) {
			gameContainer.removeChild(gameContainer.firstChild);
		}

		const gameElement = selectedGame.getGameElement();
		gameContainer.appendChild(gameElement);
		selectedGame.getGameLogic();
	}
}

new App();
