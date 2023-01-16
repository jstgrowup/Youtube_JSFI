const http = require("node:http");
const fs = require("node:fs");
console.log("first");
fs.readFile("./file.txt", "utf-8", (er, data) => {
  if (er) {
    console.log(er);
  } else {
    console.log(data);
  }

});
console.log("last");
// here readfile is an async operation but how the node js is doing this 
// with the help of libuv Thread pool
// 
