// Synchronous or blocking
// - line by line execution  --> The line written first will be executed first

// Asynchronous or non-blocking
// - line by line execution not guaranteed
// - callbacks will fire  --> 

const fs = require("fs");
fs.readFile("ama.txt", "utf-8", (err, data)=>{   //Here this whole function takes place
    console.log(data);                           //and while it is doing do the program moves forward
});                                              //and executes codes in next line and when its over 
console.log("This is a message");                //it shoews output of the function
//Example of Asynchronous or non-blocking function
//This executed line by line but the output of the complex part comes later