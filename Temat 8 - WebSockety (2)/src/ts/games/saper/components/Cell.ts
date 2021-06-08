import { UI } from './UI';

export class Cell extends UI {
	x: number | null = null;
	y: number | null = null;

	value: number = 0;

	isMine: boolean = false;
	isReveal: boolean = false;
	isFlagged: boolean = false;

	selector: string | null = null;
	element: HTMLDivElement | null = null;

	constructor(x: number, y: number) {
		super();
		this.x = x;
		this.y = y;
		this.selector = `[data-x="${this.x}"][data-y="${this.y}"]`;
	}

	createElement(): string {
		const element = `<div class="cell border border--concave" data-cell data-x="${this.x}" data-y="${this.y}"></div>`;
		return element;
	}

	revealCell(): void {
		this.isReveal = true;
		this.element.classList.remove('border--concave');
		this.element.classList.add('border--revealed');

		if (this.isMine) {
			this.element.classList.add('cell--is-mine');
			return;
		}

		if (this.value) {
			const valueAsString: string = this.value.toString();
			this.element.textContent = valueAsString;
			this.element.classList.add(`cell-info-${this.value}`);
		}
	}

	toggleFlag(): void {
		this.isFlagged = !this.isFlagged;
		this.element.classList.toggle('cell--is-flag');
	}

	addMine(): void {
		this.isMine = true;
	}
}
