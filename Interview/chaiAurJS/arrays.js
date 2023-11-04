const arr = [];
// shallow copies and deep copies
// shallow copies are like if you change the child array than the parent array will also change they share the same refernce
const myHereos = ["hitesh", "naag"];
console.log("myHereos:", myHereos);
const num = [1, 2, 3, 4, 5];
num.unshift(0);
// Inserts new elements at the start of an array, and returns the new length of the array.
num.shift();
// Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
console.log(num.indexOf(51));
// Returns the index of the first occurrence of a value in an array, or -1 if it is not present.
// slice and splice
console.log("real", num);
const myn1 = num.slice(1, 3);
console.log("after slice", myn1);
console.log("real array after slice", num);
// 
const myn2 = num.splice(1, 3);
console.log("after splice", myn2);
console.log("real array after splice", num);
// so slice doesnt mutates the real array but splice does
