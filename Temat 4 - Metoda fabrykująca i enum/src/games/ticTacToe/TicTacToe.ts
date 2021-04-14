import { Game } from '../../ts/game.model';
import { DOM } from './ts/DOM';
import { Options } from './ts/Options';

export class TicTacToe implements Game {
	name: string;

	constructor() {
		this.name = 'Tic Tac Toe';
	}

	getGameElement(): HTMLElement {
		const dom = new DOM();
		const div = dom.createDOM();
		return div;
	}

	getGameLogic() {
		const options = new Options();
		options.initializeOptions();
	}
}
