// Custom Slice Implementation for Array in JavaScript

function customSlice(array, start, end) {
  const newArray = [];
  const length = array.length >>> 0;
  let relativeStart =
    start < 0 ? Math.max(length + start, 0) : Math.min(start, length);
  let relativeEnd =
    end === undefined
      ? length
      : end < 0
      ? Math.max(length + end, 0)
      : Math.min(end, length);

  for (let i = relativeStart; i < relativeEnd; i++) {
    newArray.push(array[i]);
  }

  return newArray;
}

// Example

const array = [1, 2, 3, 4, 5];
const slicedArray = customSlice(array, 1, 3);
console.log(slicedArray); // Output: [2, 3]
