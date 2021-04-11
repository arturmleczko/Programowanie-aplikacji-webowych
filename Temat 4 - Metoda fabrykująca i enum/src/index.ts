import { Games } from './games.enum';
import { Game } from './game.model';
import { TicTacToeCreator, BattleShipsCreator } from './gameCreator';
import { Options } from './TicTacToe/ts/Options';
import './main.scss';

class App {
	GAME: Game;
	constructor() {
		this.init();
	}

	init(): void {
		const menuContainer = <HTMLDivElement>document.createElement('div');
		const gameContainer = <HTMLDivElement>document.createElement('div');
		const list = document.createElement('ul');

		this.createMenuContainer(list, gameContainer);

		menuContainer.appendChild(list);
		document.body.appendChild(menuContainer);
		document.body.appendChild(gameContainer);
	}

	createMenuContainer(list: HTMLUListElement, gameContainer: HTMLDivElement) {
		for (const game in Games) {
			if (isNaN(Number(game))) return;

			const selectedGame: Game = this.selectGame(parseInt(game));
			const nameSelectedGame: string = selectedGame.name;

			const li = document.createElement('span');
			const divInLi = document.createElement('div');
			const spanInLi = document.createElement('span');
			spanInLi.textContent = nameSelectedGame;

			li.appendChild(divInLi);
			li.appendChild(spanInLi);
			list.appendChild(li);

			li.addEventListener('click', () =>
				this.handleGameClick(selectedGame, gameContainer)
			);
		}
	}

	selectGame(game: Games): Game {
		let selectedGame: Game | undefined;
		const { TicTacToe, BattleShips } = Games;

		if (game === TicTacToe) {
			const gameCreator = new TicTacToeCreator();
			selectedGame = gameCreator.getGame();
		}

		if (game === BattleShips) {
			const gameCreator = new BattleShipsCreator();
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
