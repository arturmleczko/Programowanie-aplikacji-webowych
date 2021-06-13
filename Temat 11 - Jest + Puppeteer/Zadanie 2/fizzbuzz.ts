export class FizzBuzz {
	fizzBuzz(num: number): string | number {
		if (num % 3 === 0) {
			return 'Fizz';
		}

		if (num % 5 === 0) {
			return 'Buzz';
		}

		if (num % 15 === 0) {
			return 'Fizz Buzz';
		}

		return num;
	}
}
