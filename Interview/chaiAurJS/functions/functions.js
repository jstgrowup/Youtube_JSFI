console.log("ok");
function sayMyName(number1, number2) {
  console.log(number1 + number2);
}
sayMyName(3, 5);
// functions take parameters and we send arguments
function sayMyName2(number1, number2) {
  return number1 + number2;
}
let result = sayMyName2(3, 5);
console.log("result:", result);
// here you will get undefined because funciton is not returning anything
function loginUserMessage(username) {
    if(username===undefined){

    }
  return `${username} just logged in`;
}
loginUserMessage("subham")

