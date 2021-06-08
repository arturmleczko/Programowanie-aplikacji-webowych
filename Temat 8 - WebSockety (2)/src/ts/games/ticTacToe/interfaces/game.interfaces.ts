import { LocalStorage } from '../components/Memory/LocalStorage';
import { SessionStorage } from '../components/Memory/SessionStorage';

import { Symbols } from '../symbols.type';

export interface ICanvasElements {
	canvas: HTMLCanvasElement | null;
	ctx: CanvasRenderingContext2D | null;
}

export interface IMemory {
	sessionStorage: SessionStorage;
	localStorage: LocalStorage;
}

export interface IMemoryAccess {
	sessionStorageAccess: boolean;
	localStorageAccess: boolean;
}

export interface IParameters {
	size: number | null;
	spaceSize: number;
}

export interface ISymbolsImage {
	xImage: HTMLImageElement;
	oImage: HTMLImageElement;
}

export interface ICellIndexes {
	i: number;
	j: number;
}
