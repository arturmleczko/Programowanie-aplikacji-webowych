export class UI {
	UISelectors = {
		controlPanel: '[data-control-panel]',
		gameOverBox: '[data-game-over]',
		loadButton: '[data-load-button]',
		options: '[data-options]',
		oButton: '[data-button-o]',
		playButton: '[data-button-play]',
		saveButton: '[data-save-button]',
		sizeBoardInput: '[data-size-board-input]',
		undoButton: '[data-undo-button]',
		xButton: '[data-button-x]',
	};

	getElement(selector: string): HTMLElement | null {
		return document.querySelector(selector);
	}
}
