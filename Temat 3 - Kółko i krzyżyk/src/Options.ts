import { UI } from './UI';
import { Game } from './Game';

export enum Opponent {
	Computer = 'computer',
	Friend = 'friend',
}

export type Symbols = 'X' | 'O' | undefined;

export interface Player {
	man: Symbols;
	computer: Symbols;
	friend: Symbols;
}

export class Options extends UI {
	game = new Game();

	opponent: Opponent;
	player: Player = {
		man: undefined,
		computer: undefined,
		friend: undefined,
	};

	computerButton = this.getElement(
		this.UISelectors.computerButton
	) as HTMLElement;
	friendButton = this.getElement(
		this.UISelectors.friendButton
	) as HTMLElement;
	xButton = this.getElement(this.UISelectors.xButton) as HTMLElement;
	oButton = this.getElement(this.UISelectors.oButton) as HTMLElement;
	playButton = this.getElement(this.UISelectors.playButton) as HTMLElement;

	options = this.getElement(this.UISelectors.options) as HTMLElement;

	initializeOptions() {
		this.addButtonsEventListeners();
	}

	addButtonsEventListeners() {
		this.computerButton.addEventListener('click', () =>
			this.handleComputerButtonClick()
		);

		this.friendButton.addEventListener('click', () =>
			this.handleFriendButtonClick()
		);

		this.xButton.addEventListener('click', () => this.handleXButtonClick());

		this.oButton.addEventListener('click', () => this.handleOButtonClick());

		this.playButton.addEventListener('click', () =>
			this.handlePlayButtonClick()
		);
	}

	handleComputerButtonClick() {
		this.opponent = Opponent.Computer;
		this.switchActive(this.friendButton, this.computerButton);
	}

	handleFriendButtonClick() {
		this.opponent = Opponent.Friend;
		this.switchActive(this.computerButton, this.friendButton);
	}

	handleXButtonClick() {
		this.player.man = 'X';
		this.player.computer = 'O';
		this.player.friend = 'O';
		this.switchActive(this.oButton, this.xButton);
	}

	handleOButtonClick() {
		this.player.man = 'O';
		this.player.computer = 'X';
		this.player.friend = 'X';
		this.switchActive(this.xButton, this.oButton);
	}

	handlePlayButtonClick() {
		if (!this.opponent || !this.player.man) return;

		this.game.initializationGame(this.player);
		this.options.classList.add('hide');
	}

	switchActive(off: HTMLElement, on: HTMLElement) {
		off.classList.remove('active');
		on.classList.add('active');
	}
}
