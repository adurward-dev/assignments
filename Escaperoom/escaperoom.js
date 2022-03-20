const readline = require("readline-sync");
const name = readline.question("What is your name? ")

var welcomeMessage = `${name}, Welcome to the room you must eacape to survive!`;
console.log(welcomeMessage);

var isAlive = true;
var hasKey = false;

//while(isAlive){
//    const action = readline.keyIn("There are three things you can do to get out of this situation, [p] put your hand in the hole, [f] find the key, [o] open the door", {limit: "pfo"})
//
//    if (action = "p") {
//        put()
//    } else if (action = "f") {
//        find()
//    } else if (action = "o") {
//        open()
//    }
//}
while(isAlive){
    const action = readline.keyIn(`${name}, There are three things you can do to get out of this situation, [p] Put you hand in a hole, [f] Find the key, or [o] Open the door?`, {limit: 'pfo'})


    if (action === 'p') {
        put()
    } else if (action === 'f') {
        find()
    } else if (action === 'o') {
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

function youAreDead() {
    console.log("You are dead because you are an idiot!!");
    isAlive = false
}

function find() {
    var random = Math.ceil(Math.random()*6)
    if (random === 4) {
    foundKey()
    } else {
        console.log("Where is this darn key?!")
    }

}

function foundKey() {
    console.log("I have found that for which I am looking for!! The KEY!!")
    hasKey = true
}

function open() {
    if (hasKey = true) {
    console.log("I have won my freedom! Congradulations!! You win")
    isAlive = false
    } else {
    console.log("I can't open the door until I find that meddlesome key.")
    isAlive = true
    }

}