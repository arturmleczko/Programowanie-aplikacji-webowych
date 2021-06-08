import { UI } from './UI';

import { Emotion } from '../emotion.enum';

export class ResetButton extends UI {
	element: HTMLButtonElement | null = null;

	initializeResetButton(): void {
		this.handleResetButton();
	}

	handleResetButton(): void {
		this.element = <HTMLButtonElement>(
			this.getElement(this.UISelectors.resetButton)
		);
	}

	changeEmotion(emotion: Emotion): void {
		const emotionImage = (<HTMLImageElement>(
			this.getElement(this.UISelectors.emotion)
		)) as HTMLImageElement;

		const emotionAsString: string = emotion.toString();
		emotionImage.src = emotionAsString;
	}
}
