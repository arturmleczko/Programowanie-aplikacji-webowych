import { UI } from './UI';
import { Game } from './Game';

import { IPlayer, IElements } from '../interfaces/options.interfaces';

import { Symbol } from '../symbol.enum';

export class Options extends UI {
	player: IPlayer = {
		you: null,
		friend: null,
	};

	elements: IElements = {
		options: null,
		xButton: null,
		oButton: null,
		playButton: null,
	};

	initializeOptions(): void {
		this.handleElements();
		this.addButtonsEventListeners();
	}

	handleElements(): void {
		this.elements.options = <HTMLDivElement>(
			this.getElement(this.UISelectors.options)
		);

		this.elements.xButton = <HTMLButtonElement>(
			this.getElement(this.UISelectors.xButton)
		);

		this.elements.oButton = <HTMLButtonElement>(
			this.getElement(this.UISelectors.oButton)
		);

		this.elements.playButton = <HTMLButtonElement>(
			this.getElement(this.UISelectors.playButton)
		);
	}

	addButtonsEventListeners(): void {
		this.elements.xButton.addEventListener('click', () =>
			this.handleXButtonClick()
		);

		this.elements.oButton.addEventListener('click', () =>
			this.handleOButtonClick()
		);

		this.elements.playButton.addEventListener('click', () =>
			this.handlePlayButtonClick()
		);
	}

	handleXButtonClick(): void {
		this.player.you = Symbol.X;
		this.player.friend = Symbol.O;
		this.switchActive(this.elements.oButton, this.elements.xButton);
	}

	handleOButtonClick(): void {
		this.player.you = Symbol.O;
		this.player.friend = Symbol.X;
		this.switchActive(this.elements.xButton, this.elements.oButton);
	}

	handlePlayButtonClick(): void {
		const sizeInput = <HTMLInputElement>(
			this.getElement(this.UISelectors.sizeBoardInput)
		);

		const sizeBoard: number = sizeInput.valueAsNumber;

		if (!this.player.you || !sizeBoard) return;

		const game: Game = new Game(sizeBoard);
		game.initializeGame(this.player);

		this.elements.options.classList.add('hide');
	}

	switchActive(off: HTMLButtonElement, on: HTMLButtonElement): void {
		off.classList.remove('active');
		on.classList.add('active');
	}
}
