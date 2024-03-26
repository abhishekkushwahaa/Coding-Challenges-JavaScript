// Custom implementation of the map function

function customMap(arr, callback) {
  if (!Array.isArray(arr) || typeof callback !== "function") {
    throw new Error("Invalid input");
  }

  const mappedArray = [];

  for (let i = 0; i < arr.length; i++) {
    mappedArray.push(callback(arr[i], i, arr));
  }

  return mappedArray;
}

// Example usage
const numbers = [1, 2, 3, 4, 5];

// Doubling each element using custom map function
const doubledNumbers = customMap(numbers, (num) => num * 2);
console.log("Doubled numbers:", doubledNumbers); // Output: Doubled numbers: [2, 4, 6, 8, 10]
