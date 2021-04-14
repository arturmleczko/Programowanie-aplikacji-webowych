import { Game } from './game.model';

import { TicTacToe } from '../games/ticTacToe/TicTacToe';
import { BattleShips } from '../games/battleShips/BattleShips';
import { SpaceShips } from '../games/spaceShips/SpaceShips';

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
