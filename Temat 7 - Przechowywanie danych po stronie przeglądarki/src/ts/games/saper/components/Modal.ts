import { UI } from './UI';

import { HTMLElementOrNull } from '../types/types';

export class Modal extends UI {
	buttonText: string = '';
	infoText: string = '';

	element: HTMLElementOrNull = null;
	button: HTMLElementOrNull = null;
	heading: HTMLElementOrNull = null;

	initializeModal(): void {
		this.handleElements();
	}

	handleElements(): void {
		this.element = this.getElement(this.UISelectors.modal);
		this.button = this.getElement(this.UISelectors.modalButton);
		this.heading = this.getElement(this.UISelectors.modalHeading);
	}

	toggleModal = (): void => {
		this.element.classList.toggle('hide');
	};

	setText(): void {
		this.heading.textContent = this.infoText;
		this.button.textContent = this.buttonText;
	}
}
