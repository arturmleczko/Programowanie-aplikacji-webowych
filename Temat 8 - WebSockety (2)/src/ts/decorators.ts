import { Symbols } from './games/ticTacToe/symbols.type';

export const Disabled = (constructorFn: Function): void => {
	constructorFn.prototype.disabled = true;
};

export const RunningGame = (
	target: object,
	propKey: string,
	descriptor: PropertyDescriptor
) => {
	const originalFn = target[propKey];
	const gameName = target.constructor.name;

	descriptor.value = function () {
		console.log(`The ${gameName} game has started`);
		return originalFn.call(this);
	};
};

export const SymbolPositionOnBoard = (
	target: object,
	propKey: string,
	descriptor: PropertyDescriptor
) => {
	const originalFn = target[propKey];

	descriptor.value = function (currentPlayer: Symbols, i: number, j: number) {
		const whichRow = i + 1;
		const whichColumn = j + 1;

		console.log(
			`Symbol ${currentPlayer} is in the ${whichRow} row and ${whichColumn} column`
		);
		return originalFn.call(this, currentPlayer, i, j);
	};
};
