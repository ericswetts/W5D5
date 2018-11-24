/*

  const board = [[], [], []]
  let input = 

*/

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Game{
  

  // constructor
  constructor (){
    // for(let i = height-1; i >= 0; i--){
    // 
    // }
    
    this.towers = [[3,2,1], [], []];
  }
  
  promptMove() {
    console.log(this.towers);
    reader.question('Select start and end tower positions?>??? ', (res) => {
      debugger;
      let response = JSON.parse("[" + res + "]");
      let [startTowerIdx, endTowerIdx] = [response[0], response[1]];
      callback(startTowerIdx, endTowerIdx);
    });
  }
  
}

function callback(startTowerIdx, endTowerIdx){
  // if (this.isValidMove(startTowerIdx, endTowerIdx)) {
    this.towers[endTowerIndex].push(this.towers[startTowerIdx].pop);
  // }
}

const g = new Game();
g.promptMove();