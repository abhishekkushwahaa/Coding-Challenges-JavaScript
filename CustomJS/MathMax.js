// Implementation of Custom Math.max() function

function customMax(...args) {
  if (args.length === 0) {
    return -Infinity;
  }

  let max = args[0];
  for (let i = 1; i < args.length; i++) {
    if (args[i] > max) {
      max = args[i];
    }
  }
  return max;
}

// Example usage
const maxNumber = customMax(10, 20, 5, 30);
console.log(maxNumber); // Output: 30
