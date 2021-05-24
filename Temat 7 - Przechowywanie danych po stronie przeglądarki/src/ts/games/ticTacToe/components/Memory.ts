import { Symbols } from './Options';
import { UI } from './UI';

export class Memory extends UI {
	sessionStorageKey: string = 'gameState';

	ctx: CanvasRenderingContext2D = null;
	gameState: Symbols[] = null;

	setMemoryProperties(ctx: CanvasRenderingContext2D, gameState: Symbols[]) {
		this.ctx = ctx;
		this.gameState = gameState;
	}

	saveGame(): void {
		sessionStorage.setItem(
			this.sessionStorageKey,
			JSON.stringify(this.gameState)
		);
	}

	readGame() {
		const readStateGame = JSON.parse(
			sessionStorage.getItem(this.sessionStorageKey)
		);

		return readStateGame;
	}

	clearSavedGame() {
		sessionStorage.removeItem(this.sessionStorageKey);
	}

	convertOneDArrayToTwoDArray(oneDArray: any, size: number) {
		const twoDArray: Symbols[] = [];

		console.log(oneDArray);
		while (oneDArray.length) {
			twoDArray.push(oneDArray.splice(0, size));
		}

		return twoDArray;
	}
}
