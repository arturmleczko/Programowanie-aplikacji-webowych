import { TicTacToe } from './games/ticTacToe/TicTacToe';
import { Tetris } from './games/tetris/Tetris';
import { Saper } from './games/saper/Saper';

import { IGame } from './interfaces/game.interface';
import { IGameCreator } from './interfaces/game.creator.interface';

import { Disabled } from './decorators';

// @Disabled
export class TicTacToeCreator implements IGameCreator {
	disabled: boolean;

	getGame(): IGame {
		return new TicTacToe(this.disabled);
	}
}

export class TetrisCreator implements IGameCreator {
	disabled: boolean;

	getGame(): IGame {
		return new Tetris(this.disabled);
	}
}

export class SaperCreator implements IGameCreator {
	disabled: boolean;

	getGame(): IGame {
		return new Saper(this.disabled);
	}
}
