import { UI } from './UI';

export class Modal extends UI {
	buttonText: string = '';
	infoText: string = '';

	element: HTMLDivElement | null = null;
	button: HTMLButtonElement | null = null;
	heading: HTMLHeadingElement | null = null;

	initializeModal(): void {
		this.handleElements();
	}

	handleElements(): void {
		this.element = <HTMLDivElement>this.getElement(this.UISelectors.modal);

		this.button = <HTMLButtonElement>(
			this.getElement(this.UISelectors.modalButton)
		);

		this.heading = <HTMLHeadingElement>(
			this.getElement(this.UISelectors.modalHeading)
		);
	}

	toggleModal = (): void => {
		this.element.classList.toggle('hide');
	};

	setText(): void {
		this.heading.textContent = this.infoText;
		this.button.textContent = this.buttonText;
	}
}
