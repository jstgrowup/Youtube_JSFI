## ES modules

- The file name should have an extension of mjs to use ES modules
- ES modules are the ECMAScript standard for modules it was introduced in 2015
- instead of module.exports, we use the export keyword
- export can be default or named
- we import the exported variables of functions using the import keyword
- if it is a default export we can assign any name while importing
- if it is a named export the import name must be the same

```
 const add = (a, b) => {
   return a + b;
 };
 ---------------------------
 export default add
 export default (a, b) => {
   return a + b;
 };
 ----------------------------
const add = (a, b) => {
  return a + b;
};
const subtract = (a, b) => {
  return a - b;
};
export default {
  add,
  subtract,
};
```

# Importing JSON and Watch Mode

- for importing json data we dont have to export the data Node will automatically parse the data
- watch mode is a node V18 feature and it was implemented to track the changes in the files
- `node --watch main.js`

## Modules

- there are three types of modules Local modules,Built-in Modules,Third Party modules

## Built in modules

- modules that nodejs ships with
- ALso referred to as core modules
- import the module before you can use it
- examples - path,events,fs,stream,http

## Path Module

- The path module provides utilities for working with file and directory paths
- `const path = require("path")`
- basename

```
console.log(path.basename(__filename));
//last portion of the filename
console.log(path.basename(__dirname));
//last portion of the directory name
```

- extname

```
console.log(path.extname(__filename));
//extension name here it is js
```

- parse

```
console.log(path.parse(__filename)); //returns an object which returns significant elements of the path
// {
//     root: 'C:\\',
//     dir: 'C:\\Users\\Dell\\OneDrive\\Desktop\\youtube\\Interview\\CodeEvolution',
//     base: 'main.js',
//     ext: '.js',
//     name: 'main'
//   }
```

- isAbsolute

```
console.log(path.isAbsolute(__filename));
//checks whether the path is absolute or not here it is true so returns true

```

- join

```
console.log(path.join("folder1", "folder2", "index.js"));
//it will just join everything and make it a path here it will be like folder1\folder2\index.js
console.log(path.join(__dirname, "data.json"));
C:\Users\Dell\OneDrive\Desktop\youtube\Interview\CodeEvolution\data.json

```

## Callback pattern

- In JS functions are the first class objects
- A function can be passed as an argument to a function
- A function can also be returned as values from other functions

```
function greet(name) {
  return name + "sdfsdf";
}
function greetSubham(fn) {
  const name = "subham";
  const huru = fn(name);
  console.log("huru:", huru);
}
greetSubham(greet);
```
here the greet function is a callback function and greetSubham is a higher order function 
## Events module 
- The events module allows us to work with events in Node js 
- An event is an action or an occurence that has happened in our application that we can respond to 
- Using the events module we can dispatch our own custom events and respond to those custom events in a non-blocking manner 
```

const EventEmitter = require("node:events");
const emitter = new EventEmitter();
emitter.on("Order-pizza", (size, topping) => {
  console.log(`Started the backing ${size} ${topping}`);
});
emitter.emit("Order-pizza", "large", "medium");
//Started the backing large medium 
// this is known as event driven programming in Node js 
```
## Character sets 
- Binary data 
 - Computers store and represent data in binary format which is a collection of 0s and 1s
 - here each 0 or 1 is known as a bit 
 - to work with a piece of data a computer needs to convert that data into its binary 
 - But what about strings or character?
  - Computers will first convert the character to a number then convert that number to its binary representation 
  - let say V 
  - it will be first converted to a number that represents V
  - `"V".charCodeAt` will give us 86 that means 86 represents V
- Character Sets
 - But how does the computer knows that V is 86 
 - Here the concept of character sets comes into picture 
 - Character sets are predefined lists of characters represents by numbers
 - Some of the popular ones are `Unicode` and `ASCII`
 - Unicode character set dictates that 86 should represent character V
- Character Encoding 
 - Now the thing is if we say 86 is directly converted to V thats partially true 
 - Here the concept of Character Encoding comes into picture
 - Character encoding dictates how to represent a number in a character set as binary data before it can be stored in a computer
 - It dictates how many bits to use to represent the number 
 - for example one of the character encoding system is UTF-8
 - `UTF-8` states that characters should be encoded in bytes(8 bits)
 - Eight 1s or 0s should be used to represent the code of any character in binary
 - examples
  - 4 => 100 => 00000100
  - V => 86 => 01010110
- Similar guidelines also exists on how images and videoes should be encoded and stored in binary format

## Streams and Buffer
# Steams
- A stream is a sequence of data that is being moved from one point to another over time 
- Ex
 - a stream of data over the internet being moved from one computer to another 
 - a stream of data being transferred from one file to another within the same computer 
- Process streams of data in chunks as they arrive inetead of waiting for the entire data to be avaiable before processing 
 - while we transfer file contents from A to B the data arrives in chunks 
- Prevents the data downloads and memory usage 
- So its a sequence of data that is moved over time 

