import { FizzBuzz } from './fizzbuzz';

describe('Calc', () => {
	let frizzBuzz: FizzBuzz;

	beforeEach(() => {
		frizzBuzz = new FizzBuzz();
	});

	it('should return the same number if it is not divisible by 3, 5, or 15', () => {
		expect(frizzBuzz).toBeInstanceOf(FizzBuzz);
		expect(frizzBuzz.fizzBuzz(1)).toEqual(1);
	});

	it('should return the string "Fizz" if the number is divisible by 3', () => {
		expect(frizzBuzz).toBeInstanceOf(FizzBuzz);
		expect(frizzBuzz.fizzBuzz(3)).toEqual('Fizz');
	});

	it('should return the string "Buzz" if the number is divisible by 5', () => {
		expect(frizzBuzz).toBeInstanceOf(FizzBuzz);
		expect(frizzBuzz.fizzBuzz(5)).toEqual('Buzz');
	});

	it('should return the string "Fizz Buzz" if the number is divisible by 3 and 5', () => {
		expect(frizzBuzz).toBeInstanceOf(FizzBuzz);
		expect(frizzBuzz.fizzBuzz(15)).toEqual('Fizz Buzz');
	});
});
