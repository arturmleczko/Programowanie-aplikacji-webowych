import { IGame } from '../../game.model';
import { DOM } from './components/DOM';
import { Game } from './components/Game';

import { RunningGame } from '../../decorators';

export class Saper implements IGame {
	name: string;
	disabled: boolean;

	constructor(disabled: boolean) {
		this.name = 'Saper';
		this.disabled = disabled;
	}

	@RunningGame
	getGameElement(): HTMLElement {
		const dom = new DOM();
		const div = dom.createDOM();
		return div;
	}

	getGameLogic(): void {
		const game = new Game();
		game.initializeGame();
	}
}
