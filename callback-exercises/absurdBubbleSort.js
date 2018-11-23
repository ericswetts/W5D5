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
    outerBubbleSortLoop(madeAnySwaps);
     // console.log("In outer bubble sort");
  }
}

function absurdBubbleSort(arr, sortCompletionCallback){
  function outerBubbleSortLoop(madeAnySwaps){
    if (madeAnySwaps) {
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    }
    else{
      console.log(`look @ this shiz its SORTED ${arr}`);
      sortCompletionCallback(arr);
    }
  }
  outerBubbleSortLoop(true);
}

absurdBubbleSort([3, 2, 1], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});
