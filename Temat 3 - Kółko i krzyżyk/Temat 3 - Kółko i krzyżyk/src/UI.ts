export class UI {
	UISelectors = {
		options: '[data-options]',
		gameOverElement: '[data-game-over]',
		computerButton: '[data-button-computer]',
		friendButton: '[data-button-friend]',
		xButton: '[data-button-x]',
		oButton: '[data-button-o]',
		playButton: '[data-button-play]',
	};

	getElement(selector: string): HTMLElement | null {
		return document.querySelector(selector);
	}
}
