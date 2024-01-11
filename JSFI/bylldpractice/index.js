// function outer() {
//   function inner() {
//     console.log(x);
//   }
//   let x = 10;
//   inner();
//   console.log(x);
//   if (true) {
//     let x = 5;
//     console.log(x);
//   }
//   console.log(x);
// }
// outer();

// let x = 0;
// function increment() {
//   x++;
//   console.log(x); //1
//   if (x < 3) {
//     let x = 0;
//     increment();
//   }
// }
// increment();

// const arr = [1, 2, 3];
// for (let i = 0; i < arr.length; i++) {
//   const x = arr[i];
//   setTimeout(function () {
//     console.log(x);
//   }, i * 1000);
// }

// function sayHi() {
//   console.log(name);
//   console.log(age);
//   var name = "Lydia";
//   let age = 21;
// }

// sayHi();

// const shape = {
//   radius: 10,
//   diameter: function () {
//     return this.radius * 2;
//   },
//   perimeter: () => 2 * Math.PI * this.radius,
// };

// console.log(shape.diameter());
// console.log(shape.perimeter());

// class Chameleon {
//   static colorChange(newColor) {
//     this.newColor = newColor;
//     return this.newColor;
//   }

//   constructor({ newColor = "green" } = {}) {
//     this.newColor = newColor;
//     console.log(Chameleon.colorChange('orange'));
//   }

// }

// const freddie = new Chameleon({ newColor: "purple" });
// console.log(freddie.colorChange("orange"));

// let c = { greeting: "Hey!" };
// let d;

// d = c;
// c.greeting = "Hello";
// console.log(d.greeting);

// function bark() {
//   console.log("Woof!");
// }

// bark.animal = "dog";
// console.log('bark:', bark.prototype)

// function getAge(...args) {

//   console.log(typeof args);
// }

// getAge(21);

// function getAge() {
//   "use strict";
//   age = 21;
//   console.log(age);
// }

// getAge();

// const a = {};
// const b = { key: "b" };
// const c = { key: "c" };

// a[b] = 123;
// console.log("a:", a);

// a[c] = 456;
// console.log("a:", a);

// console.log(a[b]);

// const foo = () => console.log("First");
// const bar = () => setTimeout(() => console.log("Second"));
// const baz = () => console.log("Third");

// bar();
// foo();
// baz();

// (() => {
//   let x, y;

//   try {
//     throw new Error();
//   } catch (x) {

//     (x = 1), (y = 2);
//     console.log(x);
//   }
//   console.log(x);
//   console.log(y);
// })();

// const data = [
//   [0, 1],
//   [2, 3],
// ].reduce(
//   (acc, cur) => {
//     return acc.concat(cur);
//   },
//   [1, 2]
// );
// console.log(data);

// const data = [1, 2, 3].map((num) => {
//   if (typeof num === "number") return;
//   return num * 2;
// });
// console.log(data);

// function greeting() {
//   throw "Hello world!";
// }

// function sayHi() {
//   try {
//     const data = greeting();
//     console.log("It worked!", data);
//   } catch (e) {
//     console.log("Oh no an error:", e);
//   }
// }

// sayHi();

// What's the output?
// function Car() {
//   this.make = "Lamborghini";
//   return { make: "Maserati" };
// }

// const myCar = new Car();
// console.log(myCar.make);

// (() => {
//   let x = (y = 10);
// })();

// console.log(typeof x);
// console.log(typeof y);

// const value = { number: 10 };

// const multiply = (x = { ...value }) => {
//   console.log((x.number *= 2));
// };

// multiply();
// multiply();
// multiply(value);
// multiply(value);

// async function getData() {
//   return await Promise.resolve("I made it!");
// }

// const data = getData();
// console.log(data);
// "use strict"
// const box = { x: 10, y: 20 };

// Object.freeze(box);

// const shape = box;
// shape.x = 100;

// console.log(shape);

// const add = () => {
//   const cache = {};
//   return (num) => {
//     if (num in cache) {
//       return `From cache! ${cache[num]}`;
//     } else {
//       const result = num + 10;
//       cache[num] = result;
//       return `Calculated! ${result}`;
//     }
//   };
// };

// const addFunction = add();
// console.log(addFunction(10));
// console.log(addFunction(10));
// console.log(addFunction(5 * 2));

// function giveLydiaPizza() {
//   return "Here is pizza!";
// }

// const giveLydiaChocolate = () =>
//   "Here's chocolate... now go hit the gym already.";
// console.log("giveLydiaChocolate:", giveLydiaChocolate);

// console.log(giveLydiaPizza.prototype);
// console.log(giveLydiaChocolate.prototype);

// const one = false || {} || null;
// const two = null || false || "";
// const three = [] || 0 || true;

// console.log(one, two, three);

// const myPromise = () => Promise.resolve("I have resolved!");
// function firstFunction() {
//   myPromise().then((res) => console.log(res));
//   console.log("second");
// }
// async function secondFunction() {
//   console.log(await myPromise());
//   console.log("second");
// }
// firstFunction();
// secondFunction();

// function compareMembers(person1, person2 = person) {
//   if (person1 !== person2) {
//     console.log("Not the same!");
//   } else {
//     console.log("They are the same!");
//   }
// }

// const person = { name: "Lydia" };

// compareMembers(person);

// const randomValue = 21;
// function getInfo() {
//   console.log(typeof randomValue);
//   const randomValue = "Lydia Hallie";
// }

// getInfo();

// const myPromise = Promise.resolve("Woah some cool data");

// (async () => {
//   try {
//     console.log(await myPromise);
//   } catch {
//     throw new Error(`Oops didn't work`);
//   } finally {
//     console.log("Oh finally!");
//   }
// })();

// class Counter {
//   constructor() {
//     this.count = 0;
//   }

//   increment() {
//     this.count++;
//   }
// }

// const counterOne = new Counter();
// console.log('counterOne:', counterOne)
// counterOne.increment();
// counterOne.increment();
// // 2
// const counterTwo = counterOne;
// console.log('counterTwo:', counterTwo)
// counterTwo.increment();

// console.log('counterOne:', counterOne)
// console.log(counterOne.count);

// const myPromise = Promise.resolve(Promise.resolve("Promise"));
// console.log('myPromise:', myPromise)

// function funcOne() {
//   console.log("inside 1");
//   setTimeout(() => console.log("Timeout 1!"), 0);
//   myPromise.then((res) => res).then((res) => console.log(`${res} 1!`));
//   console.log("Last line 1!");
// }

// async function funcTwo() {
//   console.log("inside 2`");
//   const res = await myPromise;
//   console.log(`${res} 2!`);
//   setTimeout(() => console.log("Timeout 2!"), 0);
//   console.log("Last line 2!");
// }

// funcOne();
// funcTwo();

// const person = {
//   name: "Lydia Hallie",
//   hobbies: ["coding"],
// };

// function addHobby(hobby, hobbies = person.hobbies) {
//   hobbies.push(hobby);
//   return hobbies;
// }

// addHobby("running", []);
// addHobby("dancing");
// addHobby("baking", person.hobbies);

// console.log(person.hobbies);

// const promise1 = Promise.resolve("First");
// const promise2 = Promise.resolve("Second");
// const promise3 = Promise.reject("Third");
// const promise4 = Promise.resolve("Fourth");

// const runPromises = async () => {
//   const res1 = await Promise.all([promise1, promise2]);
//   const res2 = await Promise.all([promise3, promise4]);
//   return [res1, res2];
// };

// runPromises()
//   .then((res) => console.log(res))
//   .catch((err) => console.log("err",err));

// console.log(x);

// if (true) {
//   console.log(y);
//   var x = 5;
//   let y = 10;
// }

// let x = 0;
// function increment() {
//   let x = 0;
//   x++;
//   return function () {
//     x++;
//     console.log(x);
//   };
// }
// const inc = increment();
// inc();
// inc();

// let x = 0;
// function increment() {
//   x++;
//   console.log(x);
//   if (x < 3) {
//     let x = 0;
//     increment();
//   }
// }
// increment();

// var a = 1;
// (function () {
//   console.log(a);
//   var a = 2;
//   console.log(a);
// })();
// console.log(a);

// const arr = [1, 2, 3];
// const [a, ...rest] = arr;
// console.log(a, rest);

// let counter = 0;
// const arr = [1, 2, 3];

// function increment() {
//   counter++;
//   console.log("Counter:", counter);
// }

// const [a, b, c] = arr;

// setTimeout(() => {
//   console.log("a:", a);
//   increment();
//   setTimeout(() => {
//     console.log("b:", b);
//     increment();
//     setTimeout(() => {
//       console.log("c:", c);
//       increment();
//     }, 1000);
//   }, 2000);
// }, 3000);
// 1
// 1
//

// let count = 0;
// const data = {
//   a: [1, 2, 3],
//   b: [4, 5, 6],
//   c: [7, 8, 9],
// };

// function increment() {
//   const [arr1, arr2, arr3] = Object.values(data);
//   console.log('arr3:', arr3)
//   console.log('arr2:', arr2)
//   console.log('arr1:', arr1)
//   setInterval(() => {
//     console.log(arr1[count], arr2[count], arr3[count]);
//     count++;
//   }, 1000);
// }

// increment();

// const obj = {
//   a: 1,
//   b: 2,
//   c: {
//     d: 3,
//     e: 4,
//   },
// };
// const arr = [5, 6, [7, 8]];
// let result = [];
// const myFunc = ({ a, b }, [x, y, [z, w]], { c: { d, e } }) => {
//   const temp = [a, b, x, y, z, w, d, e];
//   result.push(temp);
// };

// myFunc(obj, arr, obj);
// console.log(result);

// const promise1 = Promise.resolve("One");
// const promise2 = new Promise((resolve) => setTimeout(() => resolve("Two"), 1000));
// const promise3 = Promise.reject("Three");
// Promise.allSettled([promise1, promise2, promise3]).then((results) =>console.log(results));

// const object1 = {
//   a: 10,
//   b: 20,
//   c: function () {
//       console.log('this:', this)
//     console.log(this.a + this.b);
//     console.log('this.a + this.b:', this.a + this.b)
//   },
// };
// const func = object1.c;
// console.log("func:", func);
// func();

// const arr = [10, 12, 15, 21];
// for (var i = 0; i < arr.length; i++) {
//   console.log('arr.length:', arr.length)

//   setTimeout(function () {
//     console.log("The index of this number is: " + i);
//   }, 3000);
// }

// function doSomething() {
//   x = 33;
//   console.log(x);
//   var x;
// }
// doSomething();

// const array=[1,2,3,4,5]
// const slicedArray=array.slice(1,3)
// console.log('slicedArray:', slicedArray)

console.log(y); // Error: y is not defined (outside the block)
if (true) {
  var y = 20;
  //   console.log(y); // 20
}
