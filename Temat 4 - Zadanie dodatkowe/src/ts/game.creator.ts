import { IGame } from './game.model';

import { TicTacToe } from './games/ticTacToe/TicTacToe';
import { BattleShips } from './games/battleShips/BattleShips';
import { Saper } from './games/saper/Saper';

import { Disabled } from './decorators';

export interface GameCreator {
	disabled: boolean;
	getGame(): IGame;
}

// @Disabled
export class TicTacToeCreator implements GameCreator {
	disabled: boolean;

	getGame(): IGame {
		return new TicTacToe(this.disabled);
	}
}

export class BattleShipsCreator implements GameCreator {
	disabled: boolean;

	getGame(): IGame {
		return new BattleShips(this.disabled);
	}
}

export class SaperCreator implements GameCreator {
	disabled: boolean;

	getGame(): IGame {
		return new Saper(this.disabled);
	}
}
