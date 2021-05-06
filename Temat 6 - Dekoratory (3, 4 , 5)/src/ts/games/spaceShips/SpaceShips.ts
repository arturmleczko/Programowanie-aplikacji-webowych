import { Game } from '../../game.model';

import { RunningGame } from '../../decorators';

export class SpaceShips implements Game {
	name: string;
	disabled: boolean;

	constructor(disabled: boolean) {
		this.name = 'Space Ships';
		this.disabled = disabled;
	}

	@RunningGame
	getGameElement(): HTMLElement {
		const div = document.createElement('div');
		div.appendChild(document.createTextNode('Hello SpaceShips'));
		return div;
	}

	getGameLogic(): void {}
}
