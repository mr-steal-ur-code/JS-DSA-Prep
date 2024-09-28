// Factorial of no using recursion
const factorial = (n) => {
	if (n <= 1) return 1;
	return n * factorial(n - 1);
};

// Factorial of no using memoization (BEST in efficiency)
const factorialMemoized = (() => {
	const cache = {};
	const fact = (n) => {
		if (n < 0) throw "Cannot compute factorial of negative num";
		if (n <= 1) return 1;
		if (cache[n]) {
			console.log("getting from cache");
			return cache[n];
		}
		cache[n] = n * fact(n - 1);
		return cache[n];
	};
	return fact;
})();
console.log(factorial(5));
console.log(factorialMemoized(5));
console.log(factorialMemoized(10));
console.log(factorialMemoized(150));
