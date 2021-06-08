import { UI } from './UI';

export class Counter extends UI {
	value: number | null = null;
	element: HTMLDivElement | null = null;

	initializeCounter(): void {
		this.handleCounter();
	}

	handleCounter(): void {
		this.element = <HTMLDivElement>(
			this.getElement(this.UISelectors.counter)
		);
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
