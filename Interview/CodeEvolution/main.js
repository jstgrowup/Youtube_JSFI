const path = require("path");

function greet(name) {
  return name + "sdfsdf";
}
function greetSubham(fn) {
  const name = "subham";
  const huru = fn(name);
  console.log("huru:", huru);
}
greetSubham(greet);
