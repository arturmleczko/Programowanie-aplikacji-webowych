import { Game } from '../game.model';
import { DOM } from './ts/DOM';
import { Options } from './ts/Options';

export class TicTacToe implements Game {
	name: string;

	constructor() {
		this.name = 'Kółko i krzyżyk';
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
