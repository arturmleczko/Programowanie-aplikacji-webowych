export interface Game {
	name: string;
	disabled: boolean;
	getGameElement(): HTMLElement;
	getGameLogic(): void;
}
