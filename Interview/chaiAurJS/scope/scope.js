let a = 10;
const b = 20;
var c = 30;
if (true) {
  let a = 10;
  const b = 34;
  var c = 301;
}
console.log("c", c);
function one() {
  const username = "subham";
  function two() {
    const website = "dey";
    console.log(username);
  }
  //   console.log(website);
  two();
}
one();

function name(num) {
  return num + 1;
}

const addTwo = function (num) {
    return num + 2;
};
addTwo(5)
// function expression

