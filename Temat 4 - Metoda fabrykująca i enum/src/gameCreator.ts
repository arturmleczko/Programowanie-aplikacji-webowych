import { Game } from './game.model';
import { TicTacToe } from './TicTacToe/TicTacToe';
import { BattleShips } from './battleships/battleships';

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
