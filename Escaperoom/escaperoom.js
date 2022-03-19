const readline = require("readline-sync");
const name = readline.question("What is your name? ")

var welcomeMessage = "${name}, welcome to the room you must eacape to survive!";
console.log(welcomeMessage);

var isAlive = true;
var hasKey = false;

while(isAlive == true){
    const action = readline.keyIn("${name}, there are three things you can do to get out of this situation, [p] put your hand in the hole, [f] find the key, [o] open the door", {limit: "pfo"})

    if (action = "p") {
        put()
    } else if (action = "f") {
        find()
    } else if (action = "o") {
        open()
    }
}

function put() {
    var random = Math.ceil(Math.random()*2)
    if(random === 1) {
        youAreDead()
    } else {
        console.log("Bugs, I hate bugs! Decide last minute to pull your hand away")
    }
}

function find() {
    hasKey = true
}