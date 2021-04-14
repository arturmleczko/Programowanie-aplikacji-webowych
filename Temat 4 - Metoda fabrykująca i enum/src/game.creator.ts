import { Game } from './game.model';

import { TicTacToe } from './TicTacToe/TicTacToe';
import { BattleShips } from './BattleShips/BattleShips';
import { SpaceShips } from './SpaceShips/SpaceShips';

export interface GameCreator {
	getGame(): Game;
}

export class TicTacToeCreator implements GameCreator {
	getGame(): Game {
		return new TicTacToe();
	}
}

export class BattleShipsCreator implements GameCreator {
	getGame(): Game {
		return new BattleShips();
	}
}

export class SpaceShipsCreator implements GameCreator {
	getGame(): Game {
		return new SpaceShips();
	}
}
