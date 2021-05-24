import { Game } from './game.model';

import { TicTacToe } from './games/ticTacToe/TicTacToe';
import { BattleShips } from './games/battleShips/BattleShips';
import { SpaceShips } from './games/spaceShips/SpaceShips';

import { Disabled } from './decorators';

export interface GameCreator {
	disabled: boolean;
	getGame(): Game;
}

// @Disabled
export class TicTacToeCreator implements GameCreator {
	disabled: boolean;

	getGame(): Game {
		return new TicTacToe(this.disabled);
	}
}

export class BattleShipsCreator implements GameCreator {
	disabled: boolean;

	getGame(): Game {
		return new BattleShips(this.disabled);
	}
}

export class SpaceShipsCreator implements GameCreator {
	disabled: boolean;

	getGame(): Game {
		return new SpaceShips(this.disabled);
	}
}
