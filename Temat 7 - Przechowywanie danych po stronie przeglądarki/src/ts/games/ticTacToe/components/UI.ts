export class UI {
	UISelectors = {
		options: '[data-options]',
		controlPanel: '[data-control-panel]',
		saveButton: '[data-save-button]',
		undoButton: '[data-undo-button]',
		loadButton: '[data-load-button]',
		gameOverElement: '[data-game-over]',
		sizeBoardInput: '[data-size-board-input]',
		xButton: '[data-button-x]',
		oButton: '[data-button-o]',
		playButton: '[data-button-play]',
	};

	getElement(selector: string): HTMLElement | null {
		return document.querySelector(selector);
	}
}
