// Custom Object Keys Implementation in JavaScript

function customObjectKeys(obj) {
  const keys = [];
  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      keys.push(key);
    }
  }
  return keys;
}

// Example Uses
const obj = { a: 1, b: 2, c: 3 };
const keys = customObjectKeys(obj);
console.log(keys); // Output: ['a', 'b', 'c']
