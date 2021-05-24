import { Game } from '../../game.model';

import { RunningGame } from '../../decorators';

export class BattleShips implements Game {
	name: string;
	disabled: boolean;

	constructor(disabled: boolean) {
		this.name = 'Battle Ships';
		this.disabled = disabled;
	}

	@RunningGame
	getGameElement(): HTMLElement {
		const div = document.createElement('div');
		div.appendChild(document.createTextNode('Hello BattleShips'));
		return div;
	}

	getGameLogic(): void {}
}
