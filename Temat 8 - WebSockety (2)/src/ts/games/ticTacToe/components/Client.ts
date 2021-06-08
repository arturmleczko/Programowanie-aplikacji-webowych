import { Symbols } from '../symbols.type';

export class Client {
	socket: WebSocket | null = null;

	initializeClient(): void {
		this.buildWebSocket();
	}

	buildWebSocket(): void {
		this.socket = new WebSocket('ws://localhost:8080');
	}

	provideGameData(
		size: number,
		gameState: Symbols[],
		currentPlayer: Symbols
	): void {
		const dataToSent = { size, gameState, currentPlayer };
		const dataToSentAsJSON = JSON.stringify(dataToSent);

		this.socket.send(dataToSentAsJSON);
	}
}
