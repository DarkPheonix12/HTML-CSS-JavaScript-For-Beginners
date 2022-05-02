
//This is how you create and import a module to run on your browser

// const mod = require("./mod");     //(./) is imp before mod name     //We have commented it to use function after importing it
// const average = require("./mod");     // But module still remains ./mod    //to summon that function  
const mod = require("./mod");
console.log(mod.avg([3,4,5]))
console.log("This is index.js");
console.log(mod.name);
