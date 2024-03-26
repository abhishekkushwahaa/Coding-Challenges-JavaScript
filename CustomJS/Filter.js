// Custom implementation of the filter function

function customFilter(arr, callback) {
  if (!Array.isArray(arr) || typeof callback !== "function") {
    throw new Error("Invalid input");
  }

  const filteredArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      filteredArray.push(arr[i]);
    }
  }

  return filteredArray;
}

// Example usage
const numbers = [1, 2, 3, 4, 5];

// Filtering even numbers using custom filter function
const evenNumbers = customFilter(numbers, (num) => num % 2 === 0);
console.log("Even numbers:", evenNumbers); // Output: Even numbers: [2, 4]
