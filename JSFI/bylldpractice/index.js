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

// console.log(y); // Error: y is not defined (outside the block)
// if (true) {
//   var y = 20;
//   //   console.log(y); // 20
// }

// name()
// // js()
// function name() {
//   console.log("name");
// }
// console.log('js:', js)
// var js = "js";

// function Person(name, age, gender) {
//   this.name = name;
//   this.age = age;
//   this.gender = gender;
// }

// var person1 = new Person("Vivek", 76, "male");
// console.log(person1);

// var person2 = new Person("Courtney", 34, "female");
// console.log(person2);
// const fun = (...args) => {

//   console.log("args",);
// };
// fun(1, 2, 3, 4, 5, 6);

// Traditional Function
// function Person1() {
//   this.age = 0;
//   setInterval(function growUp() {
//     this.age++; // This refers to the global object, not the Person object
//   }, 1000);
// }

// // Arrow Function
// function Person2() {
//   this.age = 0;
//   setInterval(() => {
//     this.age++; // 'this' refers to the Person object
//   }, 1000);
// }
// const p1 = new Person1();
// console.log("p1:", p1);
// const p2 = new Person2();
// console.log("p2:", p2);

// Traditional Function
// function sum1() {
//   // console.log('arguments:', arguments.length)
//   let total = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     console.log('arguments[i]:', arguments[i])
//     total += arguments[i];
//   }
//   return total;
// }

// // Arrow Function
// const sum2 = (...args) => args.reduce((acc, val) => acc + val, 0);

// console.log(sum1([1, 2, 3, 4, 5]));
// console.log(sum2([1, 2, 3, 4, 5]));

// let user = {
//   firstname: "subham",
//   lastname: "dey",
// };
// let printfullName = function (hometown, state) {
//   console.log(this.firstname, hometown, state);
// };

// let name2 = {
//   firstname: "sachin",
//   lastname: "Tendulkar",
// };
// printfullName.call(user, "nagaon", "assam");
// printfullName.apply(name2, ["assam", "india"]);
// const bindedObject = printfullName.bind(name2, "assam", "india");
// // bindedObject()
// bind makes a copy of the printfullname and binds it tot the user and returns a function
// console.log('bindedObject:', bindedObject())

// call function borrowing
// "use strict"
// console.log(x);
// var x=10

// function a() {
//   c();
//   function c() {
//     console.log('b:', b)
//     var b = 100;
//     console.log(b); // 100
//   }
// }
// var b = 10;
// a();
// (function () {
//   var a = (b = 3);
// })();
// console.log(typeof a);
// console.log(typeof b);
// console.log("hellp");

// function fo0() {
//   return {
//     name: "anil",
//   };
// }
// console.log(fo0());

// console.log(+"2"+1);

// var a = 0;
// function b() {
//   a = 10;
//   return;

// }
// b();
// console.log(a);

// console.log({} == {});//here memory location is compared
// function test() {
//   function foo() {
//     return 100;
//   }
//   return foo();
//   function foo() {
//     return 10;
//   }
// }
// console.log(test());
// test()
// function test(){
//   console.log("test fun called");
// }

// Prototypes are the mechanism by hwich JS objects inherit features from one another

// let users = {
//   getfullname: function () {
//     return this.name + this.lastname;
//   },
//   getAge: function () {
//     return new Date().getFullYear() - this.birth;
//   },
// };

// let student = {
//   name: "subham",
//   lastname: "dey",
//   birth: 2000,
// };
// let teacher = {
//   name: "albert",
//   lastname: "sebastian",
//   birth: 1980,
// };
// teacher.__proto__=users

// student.__proto__=users

// console.log(student.getfullname());
// console.log(student.getAge());

// console.log(teacher.getfullname());
// console.log(teacher.getAge());

// const arrnUm = [1, 2, 3, 4, 5, 6, 9, 10];
// const missValue = [];
// const minValue = Math.min(...arrnUm);
// const maxValue = Math.max(...arrnUm);
// for (let i = minValue; i < maxValue; i++) {
//   if (arrnUm.indexOf(i) < 0) {
//     missValue.push(i);
//   }
// }
// console.log("missValue:", missValue);

// function fact(num) {
//   if (num === 1) return;
//   num *= num;
//   fact(num);
// }
// console.log(fact(5));
// let a=10;
// let b=32;
// [a,b]=[b,a]
// console.log('b:', b)
// console.log('a:', a)

// var obj = {
//   name: "vivek",
//   getName: function () {
//     console.log(this.name);
//   },
// };

// var getName = obj.getName;

// var obj2 = { name: "akshay", getName };
// obj2.getName();

// const _ = require("lodash");

// function priceCalculator(order) {
//   const pizzaPrices = { small: 10, medium: 15, large: 20 };
//   const pastaPrice = 20;
//   const saladPrice = 15;

//   const deliveryFees = {
//     Manhattan: 5,
//     Brooklyn: 6,
//     "The Bronx": 6,
//     Queens: 4,
//     "Staten Island": 10,
//   };

//   const promoCodes = {
//     "30-OFF": 0.3,
//     "HALF-OFF-PIZZA": 0.5,
//     FREEDELIVERY: 1,
//   };

//   const deliveryDiscounts = {
//     Weekdays: 2,
//     Thursday: 3,
//   };

//   const seniorDiscount = 2;
//   const studentDiscount = 1;
//   const largeOrderDiscount = 0; // Large orders (8 items or more) are free
//   const largeAmountDiscount = 0; // Large orders ($100 or more) are free

//   let total = 0;

//   order.forEach((item) => {
//     if (item.type === "pizza") {
//       total += pizzaPrices[item.size] * item.quantity;
//     } else if (item.type === "pasta") {
//       total += pastaPrice * item.quantity;
//     } else if (item.type === "salad") {
//       total += saladPrice * item.quantity;
//     }
//   });

//   const deliveryFee = deliveryFees[order[0].borough];
//   const promoCodeDiscount = promoCodes[order[0].promoCode] || 0;
//   const deliveryDiscount = deliveryDiscounts[order[0].deliveryDay] || 0;
//   const tipPercentage =
//     order[0].tipType === "percentage" ? order[0].tip / 100 : 0;
//   const isSenior = order[0].age > 65;
//   const isStudent = order[0].age <= 65 && order[0].studentId;
//   const isLargeOrder = _.sumBy(order, "quantity") >= 8;
//   const isLargeAmountOrder = total >= 100;

//   Apply discounts and calculate total
//   total = total * (1 - promoCodeDiscount);
//   total = total - deliveryDiscount + deliveryFee;
//   if (isLargeOrder || isLargeAmountOrder) {
//     total = 0; // Large orders are free
//   } else {
//     if (isSenior) total = total - seniorDiscount;
//     if (isStudent) total = total - studentDiscount;
//   }

//   // Calculate tax (10% on the total before gratuity and delivery fee)
//   const tax = 0.1 * total;

//   // Calculate tip
//   const tip = tipPercentage * (total + tax);

//   // Add tax and tip to the total
//   total = total + tax + tip;

//   return total;
// }
const classDetails = {
  strength: 78,
  benches: 39,
  blackBoard: 1,
};

const { ...item } = classDetails;

console.log("item:", item);
// console.log(classStrength); // Outputs 78
// console.log(classBenches); // Outputs 39
// console.log(classBlackBoard); // Outputs 1
