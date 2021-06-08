import { Symbols } from '../../symbols.type';
export const convertOneDArrayToTwoDArray = (oneDArray: any, size: number) => {
	const twoDArray: Symbols[] = [];

	while (oneDArray.length) {
		twoDArray.push(oneDArray.splice(0, size));
	}

	return twoDArray;
};
