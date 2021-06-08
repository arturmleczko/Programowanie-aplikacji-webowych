import { Symbols } from '../symbols.type';

export interface IPlayer {
	you: Symbols;
	friend: Symbols;
}

export interface IElements {
	options: HTMLDivElement | null;
	xButton: HTMLButtonElement | null;
	oButton: HTMLButtonElement | null;
	playButton: HTMLButtonElement | null;
}
