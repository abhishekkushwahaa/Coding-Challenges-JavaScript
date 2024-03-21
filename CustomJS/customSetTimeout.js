// Custom SetTimeout function

// Most Important for Interview

function customSetTimeout(callback, delay) {
  const startTime = Date.now();

  function checkTime() {
    const currentTime = Date.now();
    const newTime = currentTime - startTime;
    if (newTime >= delay) {
      callback();
    } else {
      setTimeout(checkTime, 0);
    }
  }

  setTimeout(checkTime, 0);
}

// Example usage
console.log("Start");
customSetTimeout(() => {
  console.log("This will be executed after 5000 milliseconds.");
}, 5000);
