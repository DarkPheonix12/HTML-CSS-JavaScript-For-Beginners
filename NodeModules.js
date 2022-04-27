const fs = require("fs");
const text = fs.readFileSync("ama.txt","utf-8")         //Synchronously reads entire function of the file
text =text.replace("content","Rohan");
console.log("The content of the file is")
console.log(text);

console.log("Create a new file...")
fs.writeFileSync('rohan.txt',text);