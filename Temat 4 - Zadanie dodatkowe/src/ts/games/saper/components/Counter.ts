import { UI } from './UI';

import { NumberOrNull, HTMLElementOrNull } from '../types/types';

export class Counter extends UI {
	value: NumberOrNull = null;
	element: HTMLElementOrNull = null;

	initializeCounter(): void {
		this.handleCounter();
	}

	handleCounter(): void {
		this.element = this.getElement(this.UISelectors.counter);
	}

	setValue(value: number) {
		this.value = value;
		this.updateValue();
	}

	updateValue(): void {
		const valueAsString: string = this.value.toString();
		this.element.textContent = valueAsString;
	}

	increment(): void {
		this.value++;
		this.updateValue();
	}

	decrement(): void {
		this.value--;
		this.updateValue();
	}
}
