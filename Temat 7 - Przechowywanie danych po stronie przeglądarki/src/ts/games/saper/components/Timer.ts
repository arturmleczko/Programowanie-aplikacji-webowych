import { UI } from './UI';

import { HTMLElementOrNull } from '../types/types';

export class Timer extends UI {
	element: HTMLElementOrNull = null;
	intervalIndex: ReturnType<typeof setInterval>;

	numberOfSeconds: number = 0;
	maxNumberOfSeconds: number = 999;

	initializeTimer(): void {
		this.handleTimer();
	}

	handleTimer(): void {
		this.element = this.getElement(this.UISelectors.timer);
	}

	startTimer(): void {
		this.intervalIndex = setInterval(() => this.updateTimer(), 1000);
	}

	stopTimer(): void {
		clearInterval(this.intervalIndex);
	}

	resetTimer(): void {
		this.numberOfSeconds = 0;
		this.setTimerValue();
		this.stopTimer();
		this.startTimer();
	}

	updateTimer(): void {
		this.numberOfSeconds++;

		if (this.numberOfSeconds <= this.maxNumberOfSeconds) {
			this.setTimerValue();
		} else {
			this.stopTimer();
		}
	}

	setTimerValue() {
		const numberOfSecondsAsString: string = this.numberOfSeconds.toString();
		this.element.textContent = numberOfSecondsAsString;
	}
}
