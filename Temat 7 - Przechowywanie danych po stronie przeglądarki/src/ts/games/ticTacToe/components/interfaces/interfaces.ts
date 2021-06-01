import { Symbols } from '../types/types';

export interface IPlayer {
	you: Symbols;
	friend: Symbols;
}

export interface ISymbolsImage {
	xImage: HTMLImageElement;
	oImage: HTMLImageElement;
}

export interface ICellIndexes {
	i: number;
	j: number;
}

export interface IMemoryAccess {
	localStorageAccess: boolean;
	sessionStorageAccess: boolean;
}
