import { Symbols } from '../types/types';

export class LocalStorage {
	localStorageKey: string = 'gameState';

	saveGame(gameState: Symbols[]): void {
		localStorage.setItem(this.localStorageKey, JSON.stringify(gameState));
	}

	readGame(): Symbols[] {
		const readStateGame: Symbols[] = JSON.parse(
			localStorage.getItem(this.localStorageKey)
		);

		return readStateGame;
	}

	clearSavedGame(): void {
		localStorage.removeItem(this.localStorageKey);
	}
}
