import { Game } from '../../game.model';
import { DOM } from './components/DOM';
import { Options } from './components/Options';

import { RunningGame } from '../../decorators';

export class TicTacToe implements Game {
	name: string;
	disabled: boolean;

	constructor(disabled: boolean) {
		this.name = 'Tic Tac Toe';
		this.disabled = disabled;
	}

	@RunningGame
	getGameElement(): HTMLElement {
		const dom = new DOM();
		const div = dom.createDOM();
		return div;
	}

	getGameLogic(): void {
		const options = new Options();
		options.initializeOptions();
	}
}
