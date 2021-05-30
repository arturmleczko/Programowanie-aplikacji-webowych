export interface IGame {
	name: string;
	disabled: boolean;
	getGameElement(): HTMLElement;
	getGameLogic(): void;
}
