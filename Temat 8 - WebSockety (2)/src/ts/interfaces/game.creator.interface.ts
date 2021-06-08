import { IGame } from './game.interface';

export interface IGameCreator {
	disabled: boolean;
	getGame(): IGame;
}
