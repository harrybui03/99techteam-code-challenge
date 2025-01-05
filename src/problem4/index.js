// Problem 4: Three ways to sum to n
// Input: n - any integer
// Assuming this input will always produce a result lesser than Number.MAX_SAFE_INTEGER
// Output: return - summation to n
// i.e. sum_to_n(5) === 1 + 2 + 3 + 4 + 5 === 15
// Requirement:
// Provide 3 unique implementations of the following function in TypeScript.
// Comment on the complexity or efficiency of each function.
// Time Complexity: O(n)
// Space Complexity: O(n)
// Less efficiency due to stack memory usage; avoid for large input to prevent stack overflow error
function sum_to_n_b(n) {
    if (n == 0) {
        return 0;
    }
    return 1 + sum_to_n_b(n - 1);
}
// Time Complexity: O(n)
// Space Complexity: O(1)
// Easy to approach, but not efficient for large input
function sum_to_n_a(n) {
    var result = 0;
    for (var i = 1; i <= n; i++) {
        result += i;
    }
    return result;
}
// Time Complexity: O(1)
// Space Complexity: O(1)
// This way is the most efficient due to constant time and space efficiency.
function sum_to_n_c(n) {
    return n * (n + 1) / 2;
}
// Test
var input = 1000;
console.log("Sum using recursion for n=".concat(input, " is: ").concat(sum_to_n_a(input))); // Sum using recursion for n=1000 is: 500500
console.log("Sum using loop for n=".concat(input, " is: ").concat(sum_to_n_b(input))); // Sum using loop for n=1000 is: 500500
console.log("Sum using formula for n=".concat(input, " is: ").concat(sum_to_n_c(input))); // Sum using formula for n=1000 is: 500500
