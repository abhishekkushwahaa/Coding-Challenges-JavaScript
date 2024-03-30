// Custom Includes Implementation in JavaScript

function customIncludes(array, searchElement, fromIndex = 0) {
  const length = array.length >>> 0;

  let index = fromIndex >= 0 ? fromIndex : Math.max(0, length + fromIndex);

  for (; index < length; index++) {
    if (array[index] === searchElement) {
      return true;
    }
  }

  return false;
}

// Example Uses
const array = [1, 2, 3, 4, 5];
const isPresent = customIncludes(array, 3);
console.log(isPresent); // Output: true
