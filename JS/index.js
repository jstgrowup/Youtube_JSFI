// function declarations
function name(params) {}
// function expression
// const square = function () {};
// function s as frist class functions
// functions that cna be passed as a variable to an another function
// IIFE
(function (x) {
  return (function (y) {
    console.log(x);
  })(2);
})(1);
// 1
// functions are hoisted differently while the hoisting phase the functions are copied directly
//  params Vs arguments
function square(num) {
  // num is param
  console.log(num);
}
square(4);
// the 4 is argument
// -- spread and rest
function multiply(...arr) {
  // here this is called as rest operator
  console.log(arr);
}
var arr = [5, 6];
multiply(...arr);
// this is called the spread operator
// callback functions
// this keyword in both the different conditions
let user = {
  username: "Roadside coder",
  rc1: () => {
    console.log("subscribe", this.username);
  },
  rc2() {
    console.log("subscribe", this.username);
  },
};
user.rc1();
user.rc2();
function createBase(num) {
  return function (innersum) {
    console.log(innersum + num);
  };
}
var addSix = createBase(6);
addSix(10);
addSix(15);
