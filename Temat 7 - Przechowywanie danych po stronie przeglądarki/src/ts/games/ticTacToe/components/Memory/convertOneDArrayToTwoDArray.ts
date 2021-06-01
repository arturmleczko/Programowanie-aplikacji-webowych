import { Symbols } from '../types/types';
export const convertOneDArrayToTwoDArray = (oneDArray: any, size: number) => {
	const twoDArray: Symbols[] = [];

	while (oneDArray.length) {
		twoDArray.push(oneDArray.splice(0, size));
	}

	return twoDArray;
};
