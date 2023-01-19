const fs = require("node:fs");
fs.readFile("./file.txt", () => {
  console.log("this is readfile 1");
  setImmediate(() => console.log("setImmediate"));
});
process.nextTick(() => console.log("I am next tick"));
Promise.resolve().then(() => console.log("Promise resolved"));
setTimeout(() => {
  console.log("I am settimeout");
}, 0);
