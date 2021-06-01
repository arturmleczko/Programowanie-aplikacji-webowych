import { Symbols } from '../types/types';

export class SessionStorage {
	sessionStorageKey: string = 'lastMove';

	saveLastMove(gameState: Symbols[]): void {
		sessionStorage.setItem(
			this.sessionStorageKey,
			JSON.stringify(gameState)
		);
	}

	readLastMove(): Symbols[] {
		const readLastMove: Symbols[] = JSON.parse(
			sessionStorage.getItem(this.sessionStorageKey)
		);

		return readLastMove;
	}

	clearLastMove(): void {
		sessionStorage.removeItem(this.sessionStorageKey);
	}
}
