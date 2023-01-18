const fs = require("node:fs");
const file = fs.readFileSync("./file.txt", "utf-8");
console.log("file:", file);
setTimeout(() => {
  console.log("I am settimeout");
}, 0);
process.nextTick(() => console.log("I am next tick"));
Promise.resolve().then(() => console.log("Promise resolved"));

setImmediate(() => console.log("setImmediate"));
