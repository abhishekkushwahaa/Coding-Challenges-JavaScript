// Custom Last IndexOf Implementation in JavaScript

function customLastIndexOf(array, searchElement, fromIndex = array.length - 1) {
  const length = array.length >>> 0;

  let index =
    fromIndex >= 0 ? Math.min(fromIndex, length - 1) : length + fromIndex;

  for (; index >= 0; index--) {
    if (index in array && array[index] === searchElement) {
      return index;
    }
  }

  return -1;
}

// Example Uses
const array = [1, 2, 3, 4, 3, 5];
const index = customLastIndexOf(array, 3);
console.log(index); // Output: 4
