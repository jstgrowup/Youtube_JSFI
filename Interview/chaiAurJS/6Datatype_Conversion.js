let score = 33;
console.log(typeof score);
let valueInNumber = Number(score);
console.log("valueInNumber:", typeof valueInNumber);
// so lets say if we have the value of score as 33abc
// now on doing Number(score) it will convert it to NaN Not a number and the type of NaN is also number
// WHILE CONVERTING
// "33"=>33
// "33abc"=>NaN
// true=>1 ; false => 0
let isLooggedIn = 1;
let booleanIsLoggedIn = Boolean(isLooggedIn);
console.log("booleanIsLoggedIn:", booleanIsLoggedIn);
// this will give me true



let someNumber = 33;
let stringNumber = String(someNumber);
console.log("stringNumber:",typeof stringNumber);
