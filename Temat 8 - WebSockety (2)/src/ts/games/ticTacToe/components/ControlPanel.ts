import { UI } from './UI';

import { IElements } from '../interfaces/controlPanel.interfaces';

export class ControlPanel extends UI {
	elements: IElements = {
		controlPanel: null,
		saveButton: null,
		loadButton: null,
		undoButton: null,
	};

	initializeControlPanel(): void {
		this.handleElements();
		this.displayControlPanel();
	}

	handleElements(): void {
		this.elements.controlPanel = <HTMLDivElement>(
			this.getElement(this.UISelectors.controlPanel)
		);

		this.elements.saveButton = <HTMLButtonElement>(
			this.getElement(this.UISelectors.saveButton)
		);

		this.elements.loadButton = <HTMLButtonElement>(
			this.getElement(this.UISelectors.loadButton)
		);

		this.elements.undoButton = <HTMLButtonElement>(
			this.getElement(this.UISelectors.undoButton)
		);
	}

	displayControlPanel(): void {
		this.elements.controlPanel.classList.remove('hide');
	}

	hideControlPanel(): void {
		this.elements.controlPanel.classList.add('hide');
	}

	displayUndoButton(): void {
		this.elements.undoButton.classList.remove('hide');
	}

	hideUndoButton(): void {
		this.elements.undoButton.classList.add('hide');
	}

	displayLoadButton(): void {
		this.elements.loadButton.classList.remove('hide');
	}

	hideLoadButton(): void {
		this.elements.loadButton.classList.add('hide');
	}
}
