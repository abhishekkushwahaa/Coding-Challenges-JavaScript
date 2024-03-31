// Implement a function that returns an array of values of a given object's properties.

function customObjectValues(obj) {
  const values = [];
  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      values.push(obj[key]);
    }
  }
  return values;
}

// Example usage
const obj = { a: 1, b: 2, c: 3 };
const values = customObjectValues(obj);
console.log(values); // Output: [1, 2, 3]
