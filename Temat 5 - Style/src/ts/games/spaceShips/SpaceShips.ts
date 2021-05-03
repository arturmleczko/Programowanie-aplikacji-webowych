import { Game } from '../../game.model';

export class SpaceShips implements Game {
	name: string;

	constructor() {
		this.name = 'Space Ships';
	}

	getGameElement(): HTMLElement {
		const div = document.createElement('div');
		div.appendChild(document.createTextNode('Hello SpaceShips'));
		return div;
	}

	getGameLogic(): void {}
}
