import { HTMLElementOrNull } from '../types/types';

export class UI {
	UISelectors = {
		board: '[data-board]',
		cell: '[data-cell]',
		counter: '[data-counter]',
		timer: '[data-timer]',
		emotion: '[data-emotion]',
		resetButton: '[data-button-reset]',
		easyButton: '[data-button-easy]',
		normalButton: '[data-button-normal]',
		modal: '[data-modal]',
		modalHeading: '[data-modal-heading]',
		modalButton: '[data-modal-button]',
	};

	getElement(selector: string): HTMLElementOrNull {
		return document.querySelector(selector);
	}

	getElements(selector: string): NodeListOf<HTMLElement> | null {
		return document.querySelectorAll(selector);
	}
}
