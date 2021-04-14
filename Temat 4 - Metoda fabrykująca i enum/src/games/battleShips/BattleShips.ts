import { Game } from '../../ts/game.model';

export class BattleShips implements Game {
	name: string;

	constructor() {
		this.name = 'Battle Ships';
	}

	getGameElement(): HTMLElement {
		const div = document.createElement('div');
		div.appendChild(document.createTextNode('Hello BattleShips'));
		return div;
	}

	getGameLogic() {}
}
