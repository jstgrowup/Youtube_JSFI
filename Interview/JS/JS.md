## What is the difference between Fetch and Axios?

- Axios has URL in the request object whereas Fetch has no url in the request object
- Axios is a thirdparty package whereas fetch is provided by the browser API itself
- Axios performs automatic transformation of JSON data whereas Fetch is a two-step process when handling JSON data first to make the actual request than call .json() method on the response
- Axios has the ability to cancel the request and request timeout whereas Fetch by default doesnt provides anything like this
- Axios has a built in support for Download progress whereas Fetch doesnt have support for upload progress
- Axios GET call ignores the data content wherease Fetch GET call can have body content

## What is API?

- API stands for `Application programming Interface` The API can be seen as a simple interface between the application offering it and other items such as software ,
- In web its generally a set of code features that a developer can use in their apps for interacting with with users web browsers or other software in the users computer,
- it is a way in which two or more computer communicate with each other ,
- One purpose of API is to hide the internal details of how a system works , exposing only those parts a programmer will find useful and keeping them consistent even is the internal details later change.

## Set and Map

# Map

- The Map object holds key-value pairs please refer to the docs

# Set

- The set Object lets you store unique values of any type whether primitive values or object references , these are the collections of values whereas the value may occur only once .
- The insertion order corrsponds to the order in which each element was inserted into the set by the method called `add()`
-

```
const myset=new Set()
myset.add(1)
myset.add(3)
myset.add("Some random text")
myset.has(3) // true
myset.size //3
myset.delete(3)
```

- if you want to find the unique elements in an array

```
const myset= new set([1,2,2,3,4,5])
console.log([...myset]) //[1,2,3,4,5]
```

```
const Arr = [2,3,4,4,2,3,3,4,4,5,5,6,6,7,5,32,3,4,5]
console.log([...new Set(Arr)])
// [2, 3, 4, 5, 6, 7, 32]
```

## HOF's (Map,Filter and Reduce)

# Map

- The map method creates a new array populated with the results of calling provided function on every element in the calling array
- Map takes a callback function as an argument and that callbackfunction takes element , Index and the array
- It returns an array
-

```
// Same as above, but using the concise arrow function syntax
["1", "2", "3"].map((str) => parseInt(str)); // [1, 2, 3]

// A simpler way to achieve the above, while avoiding the "gotcha":
["1", "2", "3"].map(Number); // [1, 2, 3]

// But unlike parseInt(), Number() will also return a float or (resolved) exponential notation:
["1.1", "2.2e2", "3e300"].map(Number); // [1.1, 220, 3e+300]

// For comparison, if we use parseInt() on the array above:
["1.1", "2.2e2", "3e300"].map((str) => parseInt(str)); // [1, 2, 3]

```

so to handle exponential or float value parseInt is a better option

# Reduce

- The reduce method executes the first time that the calback is run there is no return value of previous calculations if supplied an initial value may be used in its place otherwise it will use the first element of the array
- the callback accepts accumulator, current value, current index , and the array as there parameters.

## Session Storage , Local storage and Cookies

Web storage is an API that provides a mechanishm by which browsers can store key/value pairs locally within the users browsers it provides two mechanism

- Local storage and session storage

# Cookie

A cookie is a piece of data that is stored on the computer to be accessed by your browser. Cookies are also saved as key/value pairs

```
document.cookie="username=subham"
```

You can set an expiry date as well as well as you can delete a cookie

- Storage capacity ~4kb
- you can store 20 cookies per domain
- cookie contains the information as a string generally

```
document.cookie="usename=subham;expires=Thu, 18 Dec 2023 12:00:00 UTC"
deleting a cookie
document.cookie="usename=;expires=Thu, 18 Dec 2023 12:00:00 UTC;path=/;"
```

# Session Storage

- The session storage is almost like a localstorage whereas the data it stores is only present one single session
- The data is deleted when the user closes the specific browser tab
  `sessionStorage.setItem(key,value)`
  `sessionStorage.getItem(key)`
- Session storage is scoped on a per-window basis two browser tabs from same origin have the seperate session storage

# LocalStorage

- Local storage is a read only property of the window interface allows you to access a storage object fr the document origin the data is stored saved accross browser sessions
- No expiration date or time it will be there until and unless you manually dont delete it

## Event Loop

- The Event loop is a queue of callback functions.when an async function executes the callback function into the queue. The JS engine doesnt start start processing the event loop until the async function has finished executing the code
- Event Loop is a single thread , loop that is almost infinite and its always running and doing the job
- Its job is to check whether the call stack is empty or not or whether it has space.

## Execution Context

- Everything in JS happens inside the execution context its just like a sealed off container inside which the JS runs.
- The container the first component is the memory component and the 2nd one is the code component
- The memory component is where all the variables and functions are stored and in the code component where the code is executed one line at a time
- The code component is also known as Thread of Execution and the Memory component is also known as variable component

# Global Execution context

- it is the default or the first execution context that is created by the JS engine before any code is executed all the global code that is not inside a function or object will be executed indside this global execution context.

## Debouncing

- These are the ways to optimize event handling in JS
- It limits the execution of a function call and waits for a certain amount of time before running it again.
- It allows delaying execution of some piece of code until a specified time to avoid unnecessary API calls to improve performance
- It makes sure that your code is only triggered once per user input
- so if there is any events that is triggered between the timeline than the clearTimeout will be triggered

```
  HTML
  <input type="text" id="query" oninput="debounceFunction(main,1000)" />
  <div id="movies"></div>
  JS
  let id;
  let movies_div = document.querySelector("#movies");
  async function searchMovies(q) {
    try {
      let url = `http://www.omdbapi.com/?s=${q}&apikey=cc21903c&s`;
      let res = await fetch(url);
      let data = await res.json();
      return data.Search;
    } catch {
      alert("something is wrong");
    }
  }
  function appendMovies(movies) {
    movies_div.innerHTML = null;
    if (movies === undefined) {
      return false;
    }
    movies.forEach(function (el) {
    let p = document.createElement("p");
    p.innerHTML = el.Title;
      movies_div.append(p);
    });
  }
  async function main() {
    let query = document.querySelector("#query").value;
    let response = searchMovies(query);

    let data = await response;
    appendMovies(data);
  }
   function debounceFunction(func, delay) {
    if (id) {
      clearTimeout(id);
    }
    id = setTimeout(function () {
      func();
    }, delay);
  }
```

## Throttling

- The aim is the same which is to limit the execution of an event handler function even when this event triggers continously due to user actions.
- The common use case are browsers use case are like window scrolling etc
- so lets say there is an event where the event has to be triggered on every scroll so now what throttling will do is no matter how much you scroll the event will be triggered only after that certain time lets say 100 ms
- excluding the first event

```
const throttle = (func, limit) => {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};
window.addEventListener("scroll", () => {
    <!-- now in every scroll you are invoking the function throttle which will take a cb and the time -->
  throttle(handleScrollAnimation, 100);
});
```

## Event bubbling and Event capturing

# Events

- So in JS the order in which the events are recieved on the web page so if there are some nested elements than the deep nested or the target element will be triggered first and than the events will bubble up the hirarchy in DOM
- There are two types of event flow

* Top to bottom (event capturing)
* Bottom to top (event bubbling)

# Event Delegation

- It is a technique for listening to events where we delegate a parent element as the listener for all of the events that happen inside

# Event bubbling

- It is a type of event propagation where the event first triggers on the innermost target element and than keeps triggering the parents of the target element till it reaches the outermost DOM element

# Event Capturing

- it is a type of event propagation where the event is first captured by the outermost element and then successfully triggers on the childrens of the target element in the same hierarchy till it reaches the bottom most or the inner most element of the DOM.

## Shallow Copy and Deep Copy

# Shallow Copy

- SHallow copy of an object is a copy whose properties share the same references , the new object that has an exact copy of the values in the original object
- if any of the fields of the object are references to other objects just the reference addresses are copied therefore if we change anything in the copied object than it mutates the real object as well

```
let emp={
  name:"subham"
  expertise:"SDE"
}
const shallowcopy=emp
shallowcopy.name="dey"

```

here the real object will also get mutated

# Deep Copy

- A deep copy copies all fields and makes copies of dynamically allocated memory pointed to by the fields
- A deep copy copies all the fields and makes copies of dynamically allocated memory pointed to by the fields .
- the deep copy occurs when an object is copied along with the object to which it refers to

```
let emp={
  name:"subham"
  expertise:"SDE"
}
const deep={
  name:emp.name
}
```

now if we change the deep copy than it wont affect the emp object

## Scope chaining

- when a variable is used in JS the JS engine will try to find the variabls's value in the current scope if it could not find the variable it will look into the outer scope and will continue to do so until it finds the variable or reaches global scope
- If it couldnt find the variable and if there isnt any strict mode it will declare the variable in the global scope else it will throw a runtime error
  [Link](https://blog.bitsrc.io/understanding-scope-and-scope-chain-in-javascript-f6637978cf53)

## Scope

- Scope is the accessibility of the variables , functions and objects in some particular part of your code during runtime
- Scope determines the visibility of variables and other resources in areas of your code
- The main benefit of scope is security using scope we can avoid unintended modifications to the variables from other parts of the program
- it also reduces the namespace collisions

## Lexical enviroment

- Lexical in general means in hierarchy or in sequence . whenevr a new execution context is created a new lexical enviroment is created and it is referenced in local EC in memory
- LE = Local memory + Lexical Enviroment of its parent
- So in short a lexical enviroment is place where variables and functions live or physically present during the program execution

## Destructuring

- Destructuring helps us to unpack values from arrays or properties from objects into distinct variables.

```
let [one,two,three]=["jan","feb","mar"]
console(one)
console(two)
console(three)
const {name,age}={name:"subham",age:"23"}
log(name)
log(age)
```

## What is Module Pattern

- Modules are refrerd to small units of independent , reusable code and also act as the foundation of many JS design patterns
- we need modules because it helps in Maintainibility, reusability and Namespacing
- Module pattern is a design pattern used for improving the reusability and maintainibility of the code by creating public and private access levels.
- Module pattern keeps the privacy of the state and organizes using closures
- The module pattern is quite similar to IIFE but module always returns an object instead of a function

```
const MP=(function(){
  const name="subham"
  const age=23
  return {
     name
     age
  }
})()
MP.name
MP.age

```

The code outside the module scope cant access the value of age, and thats how the module pattern helps us to make the values of age as private

## Server side rendering

# Client side

- In CSR the browser gets a preety empty document with link to the JS files.
- In SSR the user can start viewing the page while all the rendering is happening whereas in CSR we need to wait until the everything loads and than the VDOM moved to teh browser DOM for the page to be viewable
- In the CSR we get all the HTML and JS files bare bones and its the job of the browser to render the rest.
- So our website wont be loaded until all the JS is downloaded to the browser
- Everything is handled by the client side JS library like react etc.
- On the initial render the server request a single HTML file and the server will deliver it without any content until you fetch all the JS and let the browser compile everything before rendering the content
- - Pros
- Rich site interactions, Fast website rendering after the initial load, Robust selection of JS libraries
- - Cons
- Low SEO if not implemented correctly, Initial Load might require more time , In most cases requires an external library
  ![clientside](https://user-images.githubusercontent.com/40628582/211241734-f0d9e572-261d-41a3-9d0b-b59161dcc8fa.png)

# Server Side

- It converts HTML files in the server into usable information for the browser
- Once the browsers request the page the server responds back with the fully rendered HTML and displays it on the screen
- If the route changes it will again make a request to the server and get the whole data of that page
- pros
- Search engines can crawl the site for better SEO,The initial page laod is faster, good for statis sites
- Cons
- Frequent server requests, An overall slow page rendering, While changing the routes the whole page reloads.
  ![serverSide](https://user-images.githubusercontent.com/40628582/211241757-e12a72ed-59e0-40e9-a66f-7c51c646c382.png)

## DOM

- DOM stands for Document Object model
- When the browser tries to render an HTML document it creates an object based on the HTML document called DOM
- It is a cross platform API that treats HTML and XML documents as a tree structure consisting of nodes
- These nodes are objects that can be programatically manipulated and visible changes made to them are reflected live in the document
- In browser this API is avaiable to JS where DOM nodes can be manipulated to change their content, styles placement as well as interacted etc
- with the help of this DOM we can manipulate or change various elements inside the HTML document

## BOM

- [Video](https://youtu.be/DIt6CbeR1Pg)
- BOM allows JS to talk to the browser it consists of the objects navigator, history, screen , location and document which are the children of the window.
- The BOM is not standardized whereas the DOM is
- BOM is a the superset of DOM
- A browsers initial object is a window
- All the var keywrods , functions, objects are actually stored in the window so we can access them with window.functionname()

## Memoization

- It is a form of caching where the return value of a function is caching where the return value of a function is cached based on its parameters
- If the parameter of that function is not changed the cached version of the function is returned
- It is usually used in the expensive functions
- A normal function

```
function addTo256(num){
  return num + 256;
}
addTo256(20); // Returns 276
addTo256(40); // Returns 296
addTo256(20); // Returns 276
```

- A cached function

```
function memoizedAddTo256(){
  var cache = {};

  return function(num){
    if(for num in cache){
      console.log("cached value");
      return cache[num]
    }
    else{
      cache[num] = num + 256;
      return cache[num];
    }
  }
}
var memoizedFunc = memoizedAddTo256();

memoizedFunc(20); // Normal return
memoizedFunc(20); // Cached return
```

in the second call it will take less time than the first call

## Currying

- It is a process of taking a function with multiple arguments and turning it into a sequence of functions each with only a single argument

```
const curryFunction=(a)=>(b)=>(c)=>a+b+c
curryFunction(1)(2)(3) //returns the number 6
```

```
function add(a){
  return function(b){
    return a+b
  }
}
add(2)(4)
```

- we are just playing with the way we are invoking the function

## Strict Mode

- SM is a feature of ES5 that allows us to write code or a function in a "strict" operating enviroment
- usually the languages is not particularly severe when it comes to throwing errors but if we use Strict mode we will get all forms of errors including silent errors so debugging becomes easy
- it is useful to write "secure" JS by notifying "Bad syntax" into real errors for example it eliminates accidentally creating a global variable by throwing an error and also throws an error for assignment to a non writable property

```
"use strict"
x=23 //this will cause an error because x is not declared
```

similarly

- Always declare the "use strict" at the top of the script

```
x=3.24
myfunction()
function myfunction(){
  "use strict"
  y=34 //this will cause an error
}
```

- What are the errors it catches?
  - Duplicate arguments
  - it wont allow you to use JS keyword as parameter or function name
  - it is supported by all the browsers
  - you wont be allowed to create glbal variables

## Pass by value and Pass by reference

# Pass by value

- It creates a new space in memory and makes a copy of a value.
- Primitives data types such as string, number , boolean etc will actually create a new copy
- and mutating the copied version wont have any effects in the real one

```
let y=123
let x=y

```

In the above example, the assign operator knows that the value assigned to y is a primitive type (number type in this case), so when the second line code executes, where the value of y is assigned to z, the assign operator takes the value of y (234) and allocates a new space in the memory and returns the address. Therefore, variable z is not pointing to the location of variable y, instead, it is pointing to a new location in the memory.

# Pass by reference

- Pass by refernce doesnt create a new space in memory but the new variable adopts a memory address of an initial variable.
- Non primitive data types such as objects, arrays and functions gets the reference of the initiable variable
- updating one value will impact the other variable

```
let user1 = {
   name: 'John',
   age: 27
};
let user2 = user1;
user2.age = 30;

console.log(user1.age, user2.age); // 30, 30
```

## var , let and const

# var

- it has a global scope, function scope,no block scope and it can be reassigned
- the variables that are declared with a var keyword in teh global scope are added to the window/global object therefore they can be accessed using window.variable name

```
var variable1 = 23;
let variable2 = 89;
function catchValues(){
  console.log(variable1);
  console.log(variable2);
// Both the variables can be accessed anywhere since they are declared in the global scope
}
window.variable1; // Returns the value 23
window.variable2; // Returns undefined
```

- var keywords do not have block scope this means a variable declared in block scope with a var in block scope {} is same as declaring a variable in the global scope

```
{
  var x=12
}
log(x) //12
{
  let x=23
}
log(x) //error
```

# let

- let has no global scope,has function scope , block scope and also can be reassigned
- let keyword has a block scope and cannot be accessed from outside of the block

# const

- const has no global scope but it has a function and a block scope and it cant be reassigned
- a variable with const keyword cannot be reassigned
- const keyword is immutable , you can declare with assignment but cant assign another value later

## Objects

- Object is a collection of properties and a property and an association between a name and a value
- A property value can be a function in which the property is known as method

# ways of creating an object

- Object constructor

```
let obj=new Object()
```

- Object create method

```
let obj=Object.create(null)
```

- object literal

```
  let obj={
  name:"sudheer",
  age:34
}
```

- Function Constructor

```
function Obj(name){
  this.name:name
  this.age=23
}
let obj=new Obj("subham")
```

- ES6 Class syntax

```
class Person{
  constructor(name){
    this.name=name
  }
}
let obj=new Person("subham")
```

# Object destructuring

- It is a way to extract elements from an object or an array

```
const classdetails={
  height:5.3,
  benches:34,
  blackbord:45
}
const {height,benches,blackbord}=classdetails
log(height,benches,blackbord)
```

Output based Questions

```
const func = (function (a) {
  delete a;
  // delete method is a way of deleting a key from the object but here a is a local variable so delete wont affect anything

  return a;
})(4);
```

```
console.log("func:", func);
const user = {
  name: "Side",
  "Like me": 23,
  // if you want to keep spaces in the key than just make it a string
};
console.log("user:", user["Like me"]);
delete user["Like me"]
```

```
const obj = {
  a: "one",
  b: "two",
  a: "three",
};
console.log(obj);
// here two keys have the same name therefore the the second key will considered while printing the value of the second a will be considered but in the first position
```

```
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
```

```
const a = {};
const b = { key: "b" };
const c = { key: "c" };
a[b] = 123;
a[c] = 234;
// whats the Output
console.log("a:", a); //here the {[object Object]: 234} this is O/p because if we are assigning an object as a key than  because the key is not a string
// it will be like {[object Object]: 123,[object Object]: 234} so now because there are two keys of same name the frist key will be replaced
console.log("a[b]:", a[b]); // therefore we get a[b]: 234 as the output
```

```
 op?
console.log([..."subham"]); //spread operator it helps us to spread the properties of an object ,array but here we have a string so here it will spread the characters of the string and put it into an array
```

```
const user = { name: "subham", age: 23 };
const admin = { admin: true, ...user };
console.log("admin:", admin);
//here the admin object will be having all the properties of user and the admin
```

```
const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius,
};
console.log(shape.diameter()); // this will give you 20
console.log(shape.perimeter()); // this will give NaN because in objects the arrow functions points to the window object so basically this points to the window object but the normal function this points to the object
```

```
function getItems(fruitList, favuriteFruit, ...args) {
  return [...fruitList, ...args, favuriteFruit];
}
console.log(["banana", "apple", "pear", "orange"]); //['banana', 'apple', 'pear', 'orange'] will be the output
```

```
let x = { greeting: "hey" };
let d;
d = c;
c.greeting = "subham";
console.log(d.greeting); //subham
```

```
console.log({ a: 1 } === { a: 1 }); //false even if both are the same but they are in different spaces they are in different memory deosnt matter == or ===
```

```
//object referencing
let person = { name: "subahm" };
const members = [person];
person = null;
console.log(members); //we are giving person to members[0] so members array wont be affected and we will get the output as array
console.log(person); // this would be null
```

```
const value = { number: 12 };
const multiply = (x = { ...value }) => {
  console.log((x.number *= 2));
};
multiply();
multiply();
multiply(value);
multiply(value);
```

# This keyword

- this refers to the object that the function is a property of
- It depends on the object that is invoking the function
- this keyword depends on the context we are in .
- functions are also first class objects
- Output based questions

```
let user = {
  name: "subham",
  age: 23,
  getdetails() {
    // here this is pointing to the parent object here it is the function
    console.log(this.name);
  },
  childobj: {
    newName: "subu",
    getnestedData() {
      // here this is pointing to the childobj rather than the user obj therefore we will get undefined for this.name
      // but we get subu as the newName value
      console.log(this.newName, this.name);
    },
  },
};
user.getdetails();
user.childobj.getnestedData();
```

```
let realuser = {
  name: "subham",
  getdetails: () => {
    console.log(this.name);
    // here the this is pointing to the window object and there is nothing called name in the window object
  },
  gethuru: {
    getdetails: () => {
      // no matter what this will always point to the window object
      console.log(this.name);
    },
  },
  getlastdetails() {
    // arrow function takes the this of its parent and here the parent is getdetails
    // so therefore it is taking name as subham
    const nested = () => console.log(this.name);
    nested();
  },
};
realuser.getlastdetails();
realuser.gethuru.getdetails();
```

```
class User {
  constructor(n) {
    this.name = n;
  }
  getName() {
    console.log(this.name);
  }
}
const huruser = new User("subham");
huruser.getName();
```

```
const secondUser = {
  firstname: "xyz",
  getname() {
    const firstname = "subhan";
    return this.firstname;
    // here the firstname will be referred to the objects firstname that means the parent objects firstname
    // this refers to teh parent object rather than the function
  },
};
console.log(secondUser.getname());
```

```
function makeUser() {
  return {
    name: "subham",
    ref: this,
  };
}
const Usser = makeUser();
console.log("Usser:", Usser.ref.name);
```

```
const fourthUser = {
  name: "Subhamone",
  greet() {
    return `hello ${this.name}`;
  },
  farewell: () => {
    return `Goodbye ${this.name}`;
  },
};
console.log(fourthUser.greet());
console.log(fourthUser.farewell());
// here because the this in an arrow function points to the window object therefore it will be undefined
```

```
// Tax calculator
let calculator = {
  read() {
    this.a = +prompt("a =", 0);
    this.b = +prompt("b =", 0);
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};
calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());
```

```
var length = 4;
function callback() {
  console.log(this.length);
}
const obj = {
  length: 5,
  method(fun) {
    fun();
  },
};
obj.method(callback);
// you will think here this will refer to lenght=5 but because we are passing function callback as a callback function so it willtake the lenght=4 as its this and will print 4 as the O/P
```

```
// implement calc.add(10).multiply(20).subtract(30).add(10)
const calc = {
  total: 0,
  add(a) {
    this.total += a;
    return this;
  },
  multiply(a) {
    this.total *= a;
    return this;
  },
  subtract(a) {
    this.total -= a;
    // er are returning the whole object because we want to return the whole object
    return this;
  },
};
const final = calc.add(10).multiply(20).subtract(30).add(10);
console.log("final:", final.total);
```

## Rest

- Rest parameter is an improved way to handle function parameters which allows us to represent an indefinite number of arguments as an array
- It provides an improved way of handling the parameters of a function
- any number of arguments will be converted into an array using the rest parameter

```
function total(…args){
let sum = 0;
for(let i of args){
sum+=i;
}
return sum;
}
console.log(fun(1,2)); //3
console.log(fun(1,2,3)); //6
console.log(fun(1,2,3,4)); //13
console.log(fun(1,2,3,4,5)); //15
```

```
function fun(a,b,...theArgs){

}
```

- The rest parameter should be the last argument as its job is to collect all the remaining arguments into an array

```
function fun(a, b, ...theArgs) {
  console.log("b:", b);
  console.log("a:", a);
  console.log("theArgs:", theArgs);
}
fun(1, 2, 3, 4, 5, 6);
```

## IIFE

- IIFE stands for immediately invoked function expression
- IIFE is a function that runs as soon as it is defined

```
(function(){
  console.log("hey")
})()
```

- whenever the compiler sees the word `function` it assumes that we are declaring a function in the code therefore we dont use the first set of parenthesis the compiler throws an error because it thinks we are declaring a function and by syntax of declaring a function
- to remove the error we add the first set of paranthesis that tells the compiler that the function declaration instead its a function expression
- our code should run as soon as it is defined
- function runs only when invoked

## Types of function

# function statement

```
function a(){
log("i am a function statement")
}
```

this is a function statement

# function expression

```
const a=function(){
log("I am a function expression")
}
```

# function declaration

- it is the same as function statement

# Anonymous function

```
function (){
  log("anonymous function")
}`
this will throw a syntax error saying that function should have a name
so these functions are used when the function are used as values
lets say
const x=function(){
  <!-- code -->
}
```

# Named function expression

- It is function expression which has a name

```
  const x=function y(){
  log("i am a named function expression")
}
we have to invoke x because y is not defined outside the scope y is a local variable
```

### Functions accepts parameters

# First class functions / Functions as first class citizens

- The ability of using functions as values is known as first class functions
- The ability to use functions as an argument and return a function is known as first class functions

# Arrow functions / Lambda functions

- these are the part of ES6 or ecma script 2015
- It is a shorter syntax for a function expression and does not have its own this,super
- These functions are best suited for non-method functions and they cannot be used as constructors

```
const fun=()=>{log("I am an arrow function")}
```

## Functions

```
for(let i=0;i<10,i++){
  setTimeout(function(){
    log(i)
  },i*1000)
}
```

- Everytime the for loop runs the let keyword creates an another block scope inside it

```
Name()
function Name(){
  log("hey")
}
```

- Funtions are hoisted differently in functions the complete function is copied to the scope we dont get function name as undefined just like the variables so thats why doesnt matter where you call the function before the initialization of after initialization

```
var x=21
var fun=function(){
  log(x)
  var x=20
}
fun()

```

we will think that the local variable will shadow the global variable but that doesnt happens here the concept of closure comes into consideration so if the variable is present in the local scope it wont take the global one so now because in the local scope the variable x is hoisted and assigned as undefined we get the O/P as undefined and than after that when the variable is declared it will return the output as 20

# Spread and Rest operator

- `Spread`

```
function multiply(num1,num2,num3,num4){
  console.log(num1,num2,num3,num4)

}
const arr=[1,2,3,4]
multiply(...arr)
---OR---
function multiply(...nums){
  console.log(nums) //[1,2,3,4]

}
const arr=[1,2,3,4]
multiply(...arr)
```

```
const fn=(a,...nums,b,c){
  log(a,b,c)
}
fn(1,2,3,4,5,6,7) //this will throw error because rest parameter should always be the last parameter because it has to take all the remaining arguments
```

# Callback function

It is a function passed into another function as an argument which is than invoked inside the outer function to complete some kind of routine or action

# Higher Order functions

- HOF is a function that accepts another function as an argument or returns a function as a return value or both

```
const firstOrderFunc=()=>log("something")
const higherOrder=(func)=>func()
higherOrder(firstOrderFunc)
```

## ES6 ES2015

- It is the 6th edition of the javascript language and it was released in 2015
- It was initially known as ECMAScript(ES6) and later renamed to ECMAScript 2015
- Almost all the browsers supports ES6 but the Old browsers dont therefore they need transpilers like Babel etc

# Features

- let , const
- Arrow functions
- Rest and spread parameters
- template literals
- Promises
- Classes

## OOPS

- It is a computer programming model that organizes software design around data, or objects rather than functions and logic
- OOP stops thinking in terms of individual variables and function
- Need of OOP is that it is easier to debug codes when we use objects and classes

# Class

- Classes are a way to create object instance of JS

```
class Person{
  constructor(name,age){
    this.name=name,
    this.age=age
  }
}
const obj=new Person("subham","23")
log(obj.name)  //Object
```

# Encapsulation

- This is method by which we can hide the information or data
- Private variables are avaiable only in the current scope means current function and it will not accessible outside of the function or in the global scope.

```
const Person = function(_name, _title) {
    const name = _name
    const title = _title
    return {
        details : function() {
            console.log(`${name} is a ${title}.`)
        }
    }
}
const person = new Person(‘Khan’, ‘Web developer’)
person.details()
```

- Here the name and title are only visible or accessible inside the scope of Person and details method is visible to the caller of Person
- So we can say name and title are encapsulated inside "Person"

# Abstraction

- It is a method of hiding the implementation hiding
- This is a way to hide the implementation details and show the necessary information to the caller

```
const Person=function(_name,_title){
  const name=_name
  const title=_title
  <!-- this is a Public -->
  this.getName=function(){
    return name
  }
  const details=function(){
    <!-- Private -->
    return `${name} is a ${title}`
  }
}
```

# Inheritance

- It is the ability of reusability
- It helps to create a new class using the existing class
- this means the child class resuses all fields and methods of the parent class and can implement its own
- But JS is not a class based language but its a prototype based language
- So in JS inheritance is achieved by using prototype and it is called prototype inheritance

```
class Parent {
  constructor(_name, _age) {
    this.name = _name;
    this.age = _age;
  }
  details() {
    console.log(`${this.name}`);
  }
}
class Child extends Parent {
  constructor(_name, _age, _title) {
    super(_name, _age);
    this.title = _title;
  }
}
const ptop=new Child("subham",23,"sad")
console.log(ptop);
// age: 23
// name: "subham"
// title: "sad"
// [[Prototype]]: Parent
// constructor: class Child
// [[Prototype]]: Object
// constructor: class Parent
// details: ƒ details()
// [[Prototype]]: Object
```

# Prototype

- When ever we create an new Object with a specified prototype object and properties
- It uses an existing object as the Prototype of newly created object
- It returns a new object with the specified prototype object and properties
```
const user = {
  name: "John",
  printInfo: function () {
    console.log(`My name is ${this.name}.`);
  },
};
const admin = Object.create(user);
admin.name = "Nick"; // Remember that "name" is a property set on "admin" but not on "user" object
console.log("admin:", admin);
```
## call,apply and Bind
# call
- The call method invokes a function with a given this value and arguments provided one by one 
```
let obj = { name: "subham" };
function hello(age) {
  return "Hello" + this.name + age;
  // this will point to the window object but there is not name in the wondow object
  // so the issue i want this function to point to the obj object but how will i do it
  // call is a method avaiable to all the functions in JS
  // call takes the object as its arguments and any other parameters if any that you want your function to point to
}
console.log(hello.call(obj, 3)); //Hellosubham
```
# apply
- apply is pity same just like the call but here the arguments are taken in the form of an array the arguments other than the object 
```
console.log(hello.apply(obj,[3,"subham","software engineer"]))
```
# bind
- returns a new function allowing you to pass any number of arguments
```
let obj = { name: "subham" };
function hello(age) {
  return "Hello" + this.name + age;
 
}
const bindfun = hello.bind(obj);
console.log(bindfun(23));
console.log(bindfun(34));

```
- O/P based question 

```
const age = 10;
const person = {
  name: "subham",
  age: 34,
  getAge: function () {
    return this.age;
  },
};
const person2 = { age: 54 };
console.log(person.getAge.call(person2))
```
- Here the getAge initially was pointing 