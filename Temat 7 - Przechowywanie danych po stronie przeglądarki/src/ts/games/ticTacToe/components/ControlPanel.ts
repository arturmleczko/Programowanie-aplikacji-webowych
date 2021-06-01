import { UI } from './UI';

export class ControlPanel extends UI {
	controlPanel: HTMLElement = null;
	saveButton: HTMLElement = null;
	loadButton: HTMLElement = null;
	undoButton: HTMLElement = null;

	initializeControlPanel() {
		this.handleElements();
		this.displayControlPanel();
	}

	handleElements(): void {
		this.controlPanel = this.getElement(this.UISelectors.controlPanel);
		this.saveButton = this.getElement(this.UISelectors.saveButton);
		this.loadButton = this.getElement(this.UISelectors.loadButton);
		this.undoButton = this.getElement(this.UISelectors.undoButton);
	}

	displayControlPanel(): void {
		this.controlPanel.classList.remove('hide');
	}

	hideControlPanel(): void {
		this.controlPanel.classList.add('hide');
	}

	displayUndoButton(): void {
		this.undoButton.classList.remove('hide');
	}

	hideUndoButton(): void {
		this.undoButton.classList.add('hide');
	}

	displayLoadButton(): void {
		this.loadButton.classList.remove('hide');
	}

	hideLoadButton(): void {
		this.loadButton.classList.add('hide');
	}
}
