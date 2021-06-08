import { ResetButton } from './components/ResetButton';

interface IDifficultLevel {
	rows: number;
	cols: number;
	mines: number;
}

export interface IConfig {
	easy: IDifficultLevel;
	normal: IDifficultLevel;
}

export interface IButtons {
	easy: HTMLButtonElement | null;
	normal: HTMLButtonElement | null;
	modal: HTMLButtonElement | null;
	reset: ResetButton;
}
