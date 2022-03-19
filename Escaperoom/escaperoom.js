const readline = require("readline-sync");
const name = readline.question("What is your name? ")

var welcomeMessage = "${playerName}, welcome to the room you must eacape to survive!";
console.log(welcomeMessage);

var isAlive = true;
var hasKey = false;

