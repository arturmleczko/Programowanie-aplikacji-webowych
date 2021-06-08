import { DOM } from './components/DOM';

import { IGame } from '../../interfaces/game.interface';

import { RunningGame } from '../../decorators';

export class Tetris implements IGame {
	name: string;
	disabled: boolean;

	constructor(disabled: boolean) {
		this.name = 'Tetris';
		this.disabled = disabled;
	}

	@RunningGame
	getGameElement(): HTMLElement {
		const dom = new DOM();
		const main = dom.createDOM();
		return main;
	}

	getGameLogic(): void {}
}
