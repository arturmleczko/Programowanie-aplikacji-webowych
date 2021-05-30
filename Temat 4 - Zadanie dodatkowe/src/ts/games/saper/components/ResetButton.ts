import { UI } from './UI';

import { HTMLElementOrNull } from '../types/types';
import { Emotion } from '../enums/Emotion';

export class ResetButton extends UI {
	element: HTMLElementOrNull = null;

	initializeResetButton(): void {
		this.handleResetButton();
	}

	handleResetButton(): void {
		this.element = this.getElement(this.UISelectors.resetButton);
	}

	changeEmotion(emotion: Emotion): void {
		const emotionImage = this.getElement(
			this.UISelectors.emotion
		) as HTMLImageElement;

		const emotionAsString: string = emotion.toString();
		emotionImage.src = emotionAsString;
	}
}
