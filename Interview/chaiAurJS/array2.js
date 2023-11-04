const marvel = ["1", "2", "3"];
const dc = ["a", "b", "c"];
// marvel.push(dc);
// [ '1', '2', '3', [ 'a', 'b', 'c' ] ]
// here the array is itself acting like an element it will be  2D array
let newArr = marvel.concat(dc);
console.log("newArr:", newArr);
// [ '1', '2', '3', 'a', 'b', 'c' ]

let spreadedArr = [...marvel, ...dc];
console.log("spreadedArr:", spreadedArr);
// [ '1', '2', '3', 'a', 'b', 'c' ]
const anotherArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
// if you get this type of situation where you need all the elements of all the levels into a single array than you can use flat all the subarrays
let flatedArr = anotherArr.flat(Infinity);
// you can mention the depth and the levels of the deapth
console.log("flatedArr:", flatedArr);
// flatedArr: [
//   1, 2, 3, 4, 5,
//   6, 7, 6, 7, 4,
//   5
// ]
console.log(Array.isArray("Subham"));
// false
console.log(Array.from("subham"));
// this will convert the string to the array and it will put all the elements into one array
console.log(Array.from({ name: "hitesh" }));
// this will return [] because it it as not able to convert the object to array
let a = {yo:10};
let b = [20];
let c = 30;
console.log(Array.of(a, b, c));
// it will make an array out of all the elements

