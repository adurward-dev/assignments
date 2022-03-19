// // var readlineSync = require('readline-sync')
// // var userName = readlineSync.question('Hello, what is your name?  ')
// // console.log(`welcome ${userName} to my node calculator`)






// // function addTwoNumbers(num1, num2){
// //    return num1 + num2
// // }

// const readline = require('readline');
// const rl = readline.createInterface({input : process.stdin,
//                         output : process.stdout});
// let num1 = Math.floor((Math.random() * 10) + 1);
// let num2 = Math.floor((Math.random() * 10) + 1);
// let answer = num1 + num2;

// rl.question(`What is ${ num1} + ${ num2}?` /n,
// (userInput)=>{
//       console.log(userInput);
// });

var readline = require('readline-sync');


var Calculation = function(num1, num2, op) {
  this.x = parseInt(num1);
  this.y = parseInt(num2);
  this.op = op;

  this.result = function() {
    var x = this.x;
    var y = this.y;
    var op = this.op;

    if (op === "add") {
      var result = x + y;
    } else if (op === "sub") {
      var result = x - y;
    } else if (op === "div") {
      var result = x / y;
    } else if (op === "mul") {
      var result = x * y;
    } else if (op === "%") {
      var result = x % y;
    } else {
      var result = "Error!"
    }

    console.log("The Result is: " + result);
  };
}

var num1 = readline.question("Please enter a number: ");
var num2 = readline.question("Please enter another number: ");
var op = readline.question("Please enter an operator: ");

var calc = new Calculation(num1, num2, op);

calc.result();