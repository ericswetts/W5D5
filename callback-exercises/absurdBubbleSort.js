const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askIfGreaterThan (el1, el2, callback){
  reader.question(`Is ${el1} greater than ${el2}? `, (ans) => {
    if (ans === "yes"){
      callback(true);
    }
    else{
      callback(false);
    }
  });
}

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  if (i < arr.length - 1) {
    askIfGreaterThan(arr[i], arr[i+1], function(isGreaterThan) {
      if (isGreaterThan) {
        [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
        madeAnySwaps = true;
      }
      innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop);
    });
  }
  else if (i == (arr.length - 1)) {
    // outerBubbleSortLoop(madeAnySwaps)
     console.log("In outer bubble sort");
  }
}

// const array = [1,2,4,3,2];
// innerBubbleSortLoop(array, 0, false);
// 
