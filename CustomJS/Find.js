// Custom implementation of the indexOf function
function customIndexOf(arr, searchElement, fromIndex = 0) {
  if (!Array.isArray(arr)) {
    throw new Error("Invalid input: first argument must be an array");
  }

  const len = arr.length;
  const startIndex = fromIndex >= 0 ? fromIndex : Math.max(0, len + fromIndex);

  for (let i = startIndex; i < len; i++) {
    if (arr[i] === searchElement) {
      return i;
    }
  }

  return -1;
}

// Example usage
const numbers = [1, 2, 3, 4, 5, 2];

// Finding the index of the first occurrence of 2 using custom indexOf function
const index = customIndexOf(numbers, 2);
console.log("Index of 2:", index); // Output: Index of 2: 1
