// Custom IndexOf Implementation in JavaScript

function customIndexOf(array, searchElement, fromIndex = 0) {
  const length = array.length >>> 0;

  let index = fromIndex >= 0 ? fromIndex : Math.max(0, length + fromIndex);

  for (; index < length; index++) {
    if (index in array && array[index] === searchElement) {
      return index;
    }
  }

  return -1;
}

// Example usage
const array = [1, 2, 3, 4, 5];
const index = customIndexOf(array, 3);
console.log(index); // Output: 2
