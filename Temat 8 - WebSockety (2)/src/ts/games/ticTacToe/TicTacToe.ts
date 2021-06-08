import { DOM } from './components/DOM';
import { Options } from './components/Options';

import { IGame } from '../../interfaces/game.interface';

import { RunningGame } from '../../decorators';

export class TicTacToe implements IGame {
	name: string;
	disabled: boolean;

	constructor(disabled: boolean) {
		this.name = 'Tic Tac Toe';
		this.disabled = disabled;
	}

	@RunningGame
	getGameElement(): HTMLElement {
		const dom = new DOM();
		const main = dom.createDOM();
		return main;
	}

	getGameLogic(): void {
		const options = new Options();
		options.initializeOptions();
	}
}
