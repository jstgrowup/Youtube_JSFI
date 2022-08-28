// what is react ?
// react is an opensource software made by faceboook and it is essentially an UI library or we can say a JS library to build ui interfaces
// which means it helps you making websites
// made by jordan walke
// it was initially used in notification feacture in facebook
// it was made public in 2014
// it comes with jsx which allows you to write components or basically UI components inside the component
// it helps making websites so it basically help users to make components based artitecture and basically keeps all the logic and everithing or it basically encapsulates everything within the component
// react is used in react native it also used in next js which is used for server side rendering
// virtual dom--> it is a key factor it helps improving the performance it basically creates in memory representation of the actual DOM so it is actually kept in memory and it gets updated after that only the real dom gets updated
// so we dont directly mutate the real DOM so what happens is if you keep updating the real dom every now and than it is an expnesive think=g and it actually takes time to update and ultimately makes the application slow so here react actually cerates a copy of the actual dom and decides hey something need to update here so the logic part is done by the react so after everything is done it finally updates the real DOM it is also known as react fiber
// so how to use it is you can use CRA and Vite thses actually uses two libraries first is react and second is reactDOM if you dont want to use any library than you need to install some bundlers for example webpack , babel etc babel is for jsx why bcz jsx is not a valid javascipt syntax it neeeds to be transpilled back to valid that js can undestand and that will work

// what is the diffence between state and props?
// so state is for example is a current state or the current situatioon of a particular object for example a bike fuel , km covered the dashboard in the bike it actually telling us the current state or the current situation so state can define the current state of the component or the application as such s
// so state management react gives us a hook called usestate const [state,setstate]=useState() hsere the setstae is dispatcher/updatder so anything that needs to get updated needs to go through the dispatcher function and the current state should not be mutated
// what are prop so react provides you the feacture of cerating you oun custom component because of its declarative nature so you can end up writing <Button label="hello"/> so here you are giving the button can be passed as a property  both are essentially you can catch the property for example function Button(props){console.log(props)} props are readonly so if you pass the state down to the child than it will act like a prop so here label becomes the property and in this case count pass down as a property

// DIFF BETWEEN NULL AND UNDEFINED
// var x=null
// // console.log(x);
// console.log(undefined==null);
// console.log(undefined===null);

// ARITHMATIC OPERATORS
// comparision,logical,conditional
// console.log(3 + 4 * 5);

// 20+3
// console.log(4 * 3 ** 2);
// 9*4
// console.log((a = b = 5));
// precedence
// data&&globaldata&&predencedata
// console.log((5 && 2 && 0) || (2 && 3) || (15 && 21));
// 0 || false || 21
// console.log((5 && 2 && 0) || 2 == 3 || (15 && 21));

// FUNCTIONS
// function subham(arg1, arg2, arg3, arg4) {
//   console.log(arguments);
// }
// subham(1, 2, 3, 10);

// SCOPES
// global scope , local scope and block scope
// var x = 100;
// function name() {
//   console.log(y);
//   let y = 100;
//   //   let ,const
// }
// name();
// console.log(y);
// block {}
// let can be reassigned but not re declared
// var you can do reassignment as well as redeclartation
// var x = 10;
// var x = 20;
// x = 80;
// let x = 10;
// x = 20;
// let x=100
// in const you cant redeclare as well as you cannot re assign
// const x = 10;
// x = 100;
// console.log(x);
// function text() {
//   console.log(x);
//   let x = 0;
// }
// text();
// temporal dead zone

//OBJECTS
// let obj = {
//   key1: "huru",
//   key2: "jujutsu",
// };
// console.log(obj);
// let x = Object.assign({ key1: "huru", key2: "jujutsu" });
// console.log(x);
// let y = Object.entries({ key1: "huru", key2: "jujutsu" });
// console.log(y);
// for (let [keys, values] of y) {
//   console.log(keys, values);
// }

// let x = "huru";
// let y = "jujutsu";
// let obj = {
//   x,
//   y,
// };
// console.log(obj);

// let obj = { key1: "huru", key2: "jujutsu" };
// for (let keys in obj) {
//   console.log(keys, obj[keys]);
// }

// ARRAY
// newArray()
// concat
// every
// fill

// toString
// filter
// map
// reduce
// forEach
// id value
// typeof obj arr
// st
let arr = [1, 3, 3, 4];
let arr2 = [5, 6, 7, 8, 9];
// console.log(arr.concat(arr2));
// console.log([...arr, ...arr2]);
// console.log(arr2.every((el) => el > 1));
// console.log(arr2.fill(1));
// let y = arr2.filter((el, i) => el > 7);
// console.log("y:", y);
// let x = arr2.map((el, i) => el ** 2);
// console.log("x:", x);
// let sum = 0;
// for (let i = 0; i < arr2.length; i++) {
//   sum = sum + arr2[i];
// }
// console.log(sum);
// let y = arr2.reduce((sum, el) => sum + el);
// console.log("y:", y);
// let x = arr2.forEach((el, i) => console.log(el));
// console.log("x:", x);
let obj = {
  chips: "kurkure",
};

console.log(typeof arr2 === typeof obj);
