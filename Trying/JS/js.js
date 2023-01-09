// "use strict"
// const myset = new Set();
// myset.add(1);
// myset.add(3);
// myset.add("Some random text");
// myset.has(3); // true
// myset.size; //3
// myset.delete(3);
// console.log(myset);
// for (const item of myset) {
// console.log(item);
// }
// const myArr = Array.from(myset);
// console.log("myArr:", myArr);
// const mySet2 = new Set([1, 2, 2, 3, 4]);
// console.log(mySet2.size); // 4
// console.log([...mySet2]); // [1, 2, 3, 4]
// console.log(
//   [1, , 3].map((x, index) => {
//     console.log(`Visit ${index}`);
//     return x * 2;
//   })
// );
// localStorage.setItem("yo","sdfas")
// console.log('x:', x)
// x=23
/////////////////////////////////////////////////////////////////
// const func = (function (a) {
//   delete a;
//   // delete method is a way of deleting a key from the object but here a is a local variable so delete wont affect anything

//   return a;
// })(4);

//////////////////////////////////////////////////////////////////
// console.log("func:", func);
// const user = {
//   name: "Side",
//   "Like me": 23,
//   // if you want to keep spaces in the key than just make it a string
// };
// console.log("user:", user["Like me"]);
// delete user["Like me"]
//////////////////////////////////////////////////////////////////
const obj = {
  a: "one",
  b: "two",
  a: "three",
};
console.log(obj);
// here two keys have the same name therefore the the second key will considered while printing the value of the second a will be considered but in the first position

/////////////////////////////////////////////////////////////////
// write a function which takes an object and multiplies 2 with all the keys in the object
let nums = {
  a: 100,
  b: 200,
  title: "subham",
};
multiplyNumeric(nums);
function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] *= 2;
    }
  }
}
console.log(nums);
////////////////////////////////////////////////////////////////
const a = {};
const b = { key: "b" };
const c = { key: "c" };
a[b] = 123;
a[c] = 234;
// whats the Output
console.log("a:", a); //here the {[object Object]: 234} this is O/p because if we are assigning an object as a key than  because the key is not a string
// it will be like {[object Object]: 123,[object Object]: 234} so now because there are two keys of same name the frist key will be replaced
console.log("a[b]:", a[b]); // therefore we get a[b]: 234 as the output
///////////////////////////////////////////////////////////////
// op?
console.log([..."subham"]); //spread operator it helps us to spread the properties of an object ,array but here we have a string so here it will spread the characters of the string and put it into an array
///////////////////////////////////////////////////////////////
const user = { name: "subham", age: 23 };
const admin = { admin: true, ...user };
console.log("admin:", admin);
//here the admin object will be having all the properties of user and the admin
///////////////////////////////////////////////////////////////
const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius,
};
console.log(shape.diameter()); // this will give you 20
console.log(shape.perimeter()); // this will give NaN because in objects the arrow functions points to the window object so basically this points to the window object but the normal function this points to the object
///////////////////////////////////////////////////////////////
function getItems(fruitList, favuriteFruit, ...args) {
  return [...fruitList, ...args, favuriteFruit];
}
console.log(["banana", "apple", "pear", "orange"]); //['banana', 'apple', 'pear', 'orange'] will be the output
//////////////////////////////////////////////////////////////
let x = { greeting: "hey" };
let d;
d = c;
c.greeting = "subham";
console.log(d.greeting); //subham
///////////////////////////////////////////////////////////////
console.log({ a: 1 } === { a: 1 }); //false even if both are the same but they are in different spaces they are in different memory deosnt matter == or ===
///////////////////////////////////////////////////////////////
//object referencing
let person = { name: "subahm" };
const members = [person];
person = null;
console.log(members); //we are giving person to members[0] so members array wont be affected and we will get the output as array
console.log(person); // this would be null
///////////////////////////////////////////////////////////////
const value = { number: 12 };
const multiply = (x = { ...value }) => {
  console.log((x.number *= 2));
};
multiply();
multiply();
multiply(value);
multiply(value);
