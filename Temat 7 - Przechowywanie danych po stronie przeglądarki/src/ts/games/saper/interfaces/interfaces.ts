import { HTMLElementOrNull } from '../types/types';
import { ResetButton } from '../components/ResetButton';

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
	easy: HTMLElementOrNull;
	normal: HTMLElementOrNull;
	modal: HTMLElementOrNull;
	reset: ResetButton;
}
