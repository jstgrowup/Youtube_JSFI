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
