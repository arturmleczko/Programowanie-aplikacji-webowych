import { Calculator } from './calculator';

describe('Calc', () => {
	let calc: Calculator;

	beforeEach(() => {
		calc = new Calculator();
	});

	it('should return correct sum of two number', () => {
		expect(calc).toBeInstanceOf(Calculator);
		expect(calc.Add(2, 2)).toEqual(4);
	});

	it('should return the correct result of subtracting two numbers', () => {
		expect(calc).toBeInstanceOf(Calculator);
		expect(calc.Substract(6, 2)).toEqual(4);
	});

	it('should return the correct result of multiplying two numbers', () => {
		expect(calc).toBeInstanceOf(Calculator);
		expect(calc.Multiply(3, 2)).toEqual(6);
	});

	it('should return the correct result of dividing two numbers', () => {
		expect(calc).toBeInstanceOf(Calculator);
		expect(calc.Divide(6, 2)).toEqual(3);
	});
});
