var readlineSync = require('readline-sync');

var playerName = readlineSync.question("What is your name? ");
//var welcomeMessage = "Welcome " + playerName + " to the Escape Room";
var welcomeMessage = `Welcome ${playerName} to the Escape Room`;

console.log(welcomeMessage);

var isAlive = true;
var hasKey = false;

while (isAlive == true){
    var menuID = readlineSync.keyIn(`Press 1 to put hand in the hole \n Press 2 to find the key \n Press 3 to open the door \n`, {limit: `$<1-3>`});


if (menuID == 1){
    console.log(`${playerName}, you are pushing daisy's. `);
} else if (menuID == 2 && hasKey == false){
    console.log(`${playerName}, You found the key. Go to option 3. `);
    hasKey = true;

} else if (menuID == 2 && hasKey == true){
    console.log(`${playerName}, you have the key already! Go to option 3. `);
} else if (menuID == 3 && hasKey == false){
    console.log(`${playerName}, you must find the key.`);
} else if (menuID == 3 && hasKey == true){
    console.log(`${playerName}, congrats! You escaped the escape room. `);
    isAlive = false;
}

}



