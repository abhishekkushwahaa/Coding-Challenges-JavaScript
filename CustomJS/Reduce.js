// Custom implementation of the reduce function

function customReduce(arr, reducer, initialValue) {
    if (!Array.isArray(arr) || typeof reducer !== 'function') {
        throw new Error('Invalid input');
    }

    let accumulator = initialValue !== undefined ? initialValue : arr[0];
    let startIndex = initialValue !== undefined ? 0 : 1;

    for (let i = startIndex; i < arr.length; i++) {
        accumulator = reducer(accumulator, arr[i], i, arr);
    }

    return accumulator;
}

// Example usage
const numbers = [1, 2, 3, 4, 5];

// Summing up all numbers using custom reduce function
const sum = customReduce(numbers, (acc, curr) => acc + curr, 0);
console.log("Sum:", sum); // Output: Sum: 15