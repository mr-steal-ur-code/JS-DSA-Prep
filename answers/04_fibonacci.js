// Fibonacci till n
const fibonacciSequence = (n) => {
	let fib = [0, 1]; // Initialize the Fibonacci sequence with the first two numbers

	while (true) {
		// Calculate the next Fibonacci number
		let nextFib = fib[fib.length - 1] + fib[fib.length - 2];
		// Stop if the next number exceeds n
		if (nextFib > n) break;
		// Add the next Fibonacci number to the array
		fib.push(nextFib);
	}
	// Return the Fibonacci sequence up to n
	return fib.filter((num) => num <= n);
};

const fib = (n, result = [0, 1]) => {
	// Base case: If the last element in the result is greater than n, return the array up to that point
	if (result[result.length - 1] > n) {
		result.pop(); // Remove the last element if it's greater than n
		return result;
	}
	// Recursive case: Add the next Fibonacci number to the array
	result.push(result[result.length - 1] + result[result.length - 2]);

	// Recursive call
	return fib(n, result);
};

console.log(fib(10));
console.log(fibonacciSequence(10));
