// Implement a function that will reverse an array without using the built-in reverse method.

function customReverse(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Invalid input");
  }

  const reversedArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArray.push(arr[i]);
  }

  return reversedArray;
}

// Example
const originalArray = [1, 2, 3, 4, 5];
const reversedArray = customReverse(originalArray);
console.log(reversedArray); // Output: [5, 4, 3, 2, 1]
