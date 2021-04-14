import { UI } from './UI';
import { Game } from './Game';

export type Symbols = 'X' | 'O' | undefined;

export interface Player {
	you: Symbols;
	friend: Symbols;
}

export class Options extends UI {
	player: Player = {
		you: undefined,
		friend: undefined,
	};

	xButton: HTMLElement = this.getElement(
		this.UISelectors.xButton
	) as HTMLElement;
	oButton: HTMLElement = this.getElement(
		this.UISelectors.oButton
	) as HTMLElement;
	playButton: HTMLElement = this.getElement(
		this.UISelectors.playButton
	) as HTMLElement;

	options: HTMLElement = this.getElement(
		this.UISelectors.options
	) as HTMLElement;

	initializeOptions() {
		this.addButtonsEventListeners();
	}

	addButtonsEventListeners() {
		this.xButton.addEventListener('click', () => this.handleXButtonClick());

		this.oButton.addEventListener('click', () => this.handleOButtonClick());

		this.playButton.addEventListener('click', () =>
			this.handlePlayButtonClick()
		);
	}

	handleXButtonClick() {
		this.player.you = 'X';
		this.player.friend = 'O';
		this.switchActive(this.oButton, this.xButton);
	}

	handleOButtonClick() {
		this.player.you = 'O';
		this.player.friend = 'X';
		this.switchActive(this.xButton, this.oButton);
	}

	handlePlayButtonClick() {
		const sizeBoard = (this.getElement(
			this.UISelectors.sizeBoardInput
		) as HTMLInputElement).valueAsNumber;

		if (!this.player.you || !sizeBoard) return;
		const game = new Game(sizeBoard);
		game.initializationGame(this.player);
		this.options.classList.add('hide');
	}

	switchActive(off: HTMLElement, on: HTMLElement) {
		off.classList.remove('active');
		on.classList.add('active');
	}
}
