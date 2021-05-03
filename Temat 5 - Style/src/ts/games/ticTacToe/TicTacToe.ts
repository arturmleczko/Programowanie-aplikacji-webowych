import { Game } from '../../game.model';
import { DOM } from './components/DOM';
import { Options } from './components/Options';

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

	getGameLogic(): void {
		const options = new Options();
		options.initializeOptions();
	}
}
