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

# Buffers

- Area where people wait is nothing but the buffer
- Node js cannot control the pace at which the data arrives in the stream
- It can only decide when is the right time to send the data for processing
- If there is data already processed or too little data to process
  Node puts the arriving data in a buffer
- It is an intentionally small area that Node maintains in the runtime to process a stream of data
- Example
- If your internet connection is fast enough the speed of the stream will be fast enough to instantly fill up the buffer and send it out for processing
- That will repreat till the stream is finished
- If your connection is slow after processing the first chunk of data that arrived the video player will display a loading spinner which indicates it is waiting for more data to arrive
- once the buffer is filled up and the data is processed , the video player shows the video

```
const buffer = new Buffer.from("subham");
console.log("buffer:", buffer);
  <Buffer 73 75 62 68 61 6d>
  a buffer contains raw binary data Node js prints the hexadecimal of base 16 notation of the number as priniting 8 bits binary will flood our terminal
  [Link](https://www.rapidtables.com/convert/number/hex-to-binary.html)
console.log("buffer:", buffer.toJSON());
  { type: 'Buffer', data: [ 115, 117, 98, 104, 97, 109 ] }
  here each number here is the UNICODE character code for the character in the string subham
console.log(buffer.toString());
  subham
buffer.write("dey"); //deyham
  because buffers have limited memory
  do dome of the characters gets overrided
```

## Asynchronous Javascript

- JS is a synchronous , blocking , single-threaded language
- Synchronous 
 - Code executes top down with only one line executing at any given time 
- Blocking 
 - No matter how long a previous process takes the subsequent process wont kick off until the former is completed 
- Single-threaded 
 - A thread is simply a process that your JS program can use to run the task 
 - and Each thread can do one task at a time 
 - JS has just one thread called the main thread for executing any code 
 - But the problem is that if there is an anyschronous task 
 - According to the definition JS will simply proceed to the next line without waiting 
- `So to encounter this issue` we need some external power which can help JS to do asynchronous tasks 
- So in FE browsers are the one which helps the JS and in Backend its the nodejs which helps JS 
- Web browsers and Node js define functions and APIs that allow us to register functions that should not be executed synchronously and should be innvoked asynchronously when some kind of event occurs 
- Example
  - setTimeout/ setnterval
  - callback
  - Promises and async-await 
## fs Module
```
const fs = require("node:fs");
const filecontent = fs.readFileSync("./file.txt", "utf-8");
// fs module internally uses buffers
// here sync means the file is reading will be synchronous way of reading the file JS will wait till the content of the file is readed before proceeding to the next line
console.log("filecontent:", filecontent);
fs.readFile("./file.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
fs.writeFileSync("./huru.txt", "hello");
fs.writeFile("./huru.txt", "yooo", (er) => {
  if (er) {
    console.log(er);
  } else {
    console.log("File written ");
  }
});
```

## fs Promise Module
```
const fs = require("node:fs/promises");
async function readfile() {
  try {
    const data = await fs.readFile("file.txt", "utf-8");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
readfile()
fs.readFile("file.txt", "utf-8")
  .then((data) => console.log(data))
  .catch((er) => console.log(er));
// this is a promise based approach to read file
// the callback approach is more preferrable than the promise based approach 
// but promise based approach is easily readable than the callback approach 
```
## Streams 
- The idea is to work with data in chunks instead of waiting for the entire data to be avaiable at once 
```
const fs = require("node:fs");
const readable = fs.createReadStream("./file.txt", {
  encoding: "utf-8",
  highWaterMark:2
  <!-- how many bites here it will be 2 bytes -->
  <!-- hello code has 9 bits we are telling the node that read 2 bytes in each and every chunk-->
});
// here we are creating streams
const writable = fs.createWriteStream("./file1.txt");
readable.on("data", (chunk) => {
  console.log(chunk);
  writable.write(chunk);
});
```
## Pipes
- It is a simpler way to handle Streams 
- It is just like a pipe it takes the data from the readable stream and put it into the writable stream 
- 
```
const fs = require("node:fs");
const readable = fs.createReadStream("./file.txt", {
  encoding: "utf-8",
  highWaterMark: 2,
});

const writable = fs.createWriteStream("./file1.txt");
readable.pipe(writable);
<!-- here we are actually creating a pipe and passing the data from file.txt to file1.txt-->
```
## http module
- COmputers conneted to the internet are called clients and servers
- clients are internet-connected devices such as computers or mobile phones along with web-accessing software available on those devices such as a web browsers 
- Servers are computers that store webpages , sites or apps
- But lets say what if the request is not understandable by the server or the response is not client friendly 
- To solve this issue we have HTTP stands for hypertext Transfer Protocol
   - It is a protocol that defines a format for clients and servers to speak to each other 
   - The client sends a HTTP request and the server responds with an HTTP response 
- # HTTP and Node
   - We can create a web servers using nodejs
   - Node js has access to operating system functionality like networking 
   - Node has an eventloop to run tasks asynchronously and is perfect for creating web server that can handle large volumes of requests
   - the node server we create still respect the HTTP format
   - The HTTP module allows creation of web servers that can transfer data over HTTP
```
const http = require("node:http");
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello world");
});

server.listen(3000, () => {
  console.log("Listening");
});
```
## JSON Response
- Javascript object notation is a data interchange format we can use with HTTP
- Node gives us the power of JSON.stringify
```
const http = require("node:http");
const server = http.createServer((req, res) => {
  const payload = {
    firstname: "subham",
    lastName: "Dey",
  };
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(payload));
});
server.listen(3000, () => {
  console.log("Listening");
});
```
## HTML Response
- we have to let the browser know that the content type is html 
- for that we have to tell tha its text/html
```
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  const html = fs.readFileSync("./index.html", "utf-8");
  res.end(html);
  //if in case the html file is very large i want it to stream the data
  fs.createReadStream(__dirname + "/index.html").pipe(res);
});
```
## HTTP routing 
```
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead({ "Content-Type": "text/plain" });
    res.end("Home Page");
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("About page");
  } else if (req.url === "/api") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        firstnName: "Subham",
        lastName: "Dey",
      })
    );
  } else {
    res.writeHead(404);
    res.end("Page not found");
  }
});
```
- This is HTTP routing where we can extract the route using req.url
## Web Framework
- A framework simply abstracts the lower level code allowing you to focus on the requirements than the code itself
- React etc 
- There are frameworks to build web or mobile applications without having to rely on the HTTP module in nodejs
- Ex
  - expressjs
  - nest 
  - hapi
  - sails
- They are build on top of the HTTP module making it easier for you to implement all the features 
## Node Runtime
- Node runtime is an enviroment which provides all the necessary components in order to use and run JS code outside the browser 
- At its core it contains three major components 
  - external dependencies
    - V8
    - crypto
    - libuv
    - zlib
  - C++ features
    - fs access
    - neteorking 
  - JS library
    - functions and utilities to tap into the C++ features fromthe JS code 
- Asynchronous JS
 - synchronous,blocking and single-threaded language
- If JS is a single threaded language than how it is handling fs module which is a async operation here the nodejs takes the help of libuv which is one of a dependency in the runtime 
## libuv (Nodejs dependency)
- What?
  - libuv is a cross platform open source library written in C language
- Why?
  - it helps node js to handle asynchronous nonblocking operations in Node js
- How?
  - It uses `Thread pool` and `Event Loop`

```
const fs = require("node:fs");
console.log("first");
fs.readFile("./file.txt", "utf-8", (er, data) => {
  if (er) {
    console.log(er);
  } else {
    console.log(data);
  }

});
console.log("last");
// here readfile is an async operation but how the node js is doing this 
// with the help of libuv Thread pool
```
- This is how the conversation will look like
  - `Main Thread`: ***hey libuv i need to read file contents but that is a time consuming task . i dont want to block further code from being executed during this time. can i offload this task to you?*** 
  - `Libuv` : ***Sure main thread unlike you who is single threaded i have a pool of threads that i can use to run some of these time consuming tasks. When the task is done the file contents are retireved and the associated callback function can be run***

- A few async methods like fs.readFile and crypto.pbkdf2 run on a seperate thread in libuv's thread pool.
- They do run synchronously in their own thread but as far as the main thread is concerned it appears as if the method is running asynchronously
## Thread Pool Size
- libuv thread pool is of size 4 thread that means it can only do 4 tasks at a same time 
- the fifth task takes the fifth thread will only get the chance of running when any of the thread gets empty 
- please checout the video 
## Network I/O
```
const https = require("node:https");
const MAX_CALLS = 12;
const start = Date.now();
for (let i = 0; i < MAX_CALLS; i++) {
  https
    .request("https://www.google.com", (res) => {
      res.on("data", () => {});
      res.on("end", () => {
        console.log(`Request ${i + 1}`, Date.now() - start);
      });
    })
    .end();
}
```
- In this experiment we get the same time even if we are running 1 call or more 
-  we can say that although both crypto and https.request are asynchronous https.request method does not seem to use the thread pool
- https.request does not seem to be affected by the either
- https.request is  a network input/output and not a CPU bond operation 
## Event Loop
- JS is a synchronous, blocking and single-threaded language 
- To make async programming possible we need the help of libuv
![Image](https://user-images.githubusercontent.com/40628582/212689344-9e7564e8-03fd-4ef4-98cb-f440c3dc56a6.png)

- The V8 engine which executes the code it has a memory heap and a call stack 
- Whenevr we declare a variable it takes the space in the memory heap and the function is executed it will be in the call stack and when it is executed it will be popped of from the call stack 
- whenever we execute an async method it is offloaded to the libuv it will run the task using native async mechanism of the OS and if not possible it will utilize its thread pool to run that task ensuring the main thread is not blocked
```
console.log("first")
console.log("seccond")
console.log("third")
```
lets say we have this piece of code to run 
- CHeck the video 42
- `Event Loop` is just a C program and is part of libuv
- A design pattern that orchestrates or coordinates the execution of synchronous and asynchronous code in Nodejs
![image](https://user-images.githubusercontent.com/40628582/212695194-1c14ae26-2e3b-4b44-b5b4-0201538076d7.png)
- Event loop is a loop that is alive as long as your node js application is up and running 
- In every iteration of the loop we come accross 6 different queues each queue holds one or more callback functions that need to be eventually executed in the event call stack 
- Types of callback functions are different for each queue
- first we have the time queue this contains callbacks associated with settimeout and setinterval 
- second we have I/O queue this contains callbacks associated with async methods we have seen example - fs and https modules 
- third we have the check queue this contains the callbacks associated with a function called setImmediate callbacks
- fourth we have the close queue it contains callbacks associated with the close event of an async task 
- And finally we have the microtask queue it is actually two seperate queues 
  - the first queue is called nextTick queue and contains callbacks associated with a function called process.nextTick 
  - second quueu is the promise queue which contains callbacks that are associated with the native promise in JS 
- all the other queueus other than the micortask queue is the part of libuv but the microtask queue is not the part of libuv 
# Execution Loop - Execution Order
 - User written synchronous JS code takes priority over async code that the runtime would like to execute 
 - That means only after the call stack is empty the event loop comes into picture 
 - within Event Loop there are rules 
    1. Any callbacks in the microtask queues are executed.First tasks in the nextTick queue and only then tasks in the promise queue
    2. All callbacks in the timequeue are executed
    3. Callbacks in the microtask queues if present are executed. Again,first tasks in the nextTick queue and then tasks in the promise queue
    4. All the callbacks within the I/O queue are executed 
    5. Callbacks in the microtask queues if present are executed. Again,first tasks in the nextTick queue and then tasks in the promise queue
    6. All the callbacks in the check queue are executed 
    7. Callbacks in the microtask queues if present are executed. Again,first tasks in the nextTick queue and then tasks in the promise queue
    8. All the callbacks in the close queue is executed 
    9. Callbacks in the microtask queues if present are executed. Again,first tasks in the nextTick queue and then tasks in the promise queue

 - If all the callbacks are executed and there is no more code to process the event loop exits 

 - `question`
 - If two async takes such as setTimeout and readFIle complete at the same time how does Node decide which callback function to run first on the call stack?
    - Timer callback are executed before I/O callbacks even  is both are ready at the exact same time 
## Microtask Queues
# Experiment to test the microtask queue
```
console.log("log1");
process.nextTick(() => console.log("This is next tick 1"));
// this will queue up the callback to the nextTick queue of the microtask queue 
console.log("log2");
```
all the user written synchronous JS code takes priority over async code that the runtime would like to eventually execute 
# Experiment to test the Promise queue
```
Promise.resolve().then(() => console.log("This is promise resolve 1"));
process.nextTick(() => console.log("this is nexttick queue"));
// op
// this is nexttick queue
// This is promise resolve 1
```
- All callbacks in nextTick queu are executed before callbacks in promise queue because its how the source code is written
# Timer queue
- To queue a function into the timer queue we have to use either the setTimeout function of the setInterval function
```
setTimeout(() => {
  console.log("settimeout");
}, 0);
Promise.resolve().then(() => console.log("This is promise resolve 1"));
process.nextTick(() => console.log("this is nexttick queue"));

// op
// this is nexttick queue
// This is promise resolve 1
// settimeout
```
- callbacks in the microtask queue are executed before callbacks in the timer queue
- `Priotity`: nextTick -> Promise queue -> Timer queue
- Timer queue callbacks are executed in FIFO order 
# I/O queue
- To queue a callback into the I/O queue 
- Most of the async methods from the built-in modules queue the callback function in the I/O queue
- Example
  - fs.readFile()
```
const fs = require("node:fs");
fs.readFile(__filename, () => {
  console.log("reading the file");
});
process.nextTick(() => console.log("this is firsttick"));
Promise.resolve().then(() => console.log("I am the promise"));
Op=>
// this is firsttick
// I am the promise
// reading the file

```
- By this experiment we unsderstand that callbacks in the microtask queue are executed before callbacks in the I/O queue
- Example 2
```
fs.readFile(__filename, () => {
  console.log("reading the file");
});
setTimeout(() => {
  console.log("I am settimeout");
}, 0);
op=>
// I am settimeout
// reading the file
might be when you run the experiment several times
op=>
// reading the file
// I am settimeout
```
- by this exeperiment we know that setTimeout with delay of 0ms and an I/O async method the order of execution can never beb gauranteed
- Experiment 3
```
fs.readFile(__filename, () => {
  console.log("reading the file");
});
setTimeout(() => {
  console.log("I am settimeout");
}, 0);
process.nextTick(() => console.log("I am next tick"));
Promise.resolve().then(() => console.log("Promise resolved"));
op=>
// I am next tick
// Promise resolved
// I am settimeout
// reading the file
```
- the O/P makes sense because the timer queue > I/O queue because its a loop 
- I/O queue callbacks are executed after Microtask queues callbacks and Timer queue callbacks 
# I/O Polling
- To queue a callback function into a check queue we can use a function called setImmediate
```
setImmediate(()=>{
  log("this is setImmediate")
})
```
example
```
fs.readFile(__filename, () => {
  console.log("reading the file");
});
setTimeout(() => {
  console.log("I am settimeout");
}, 0);
process.nextTick(() => console.log("I am next tick"));
Promise.resolve().then(() => console.log("Promise resolved"));
// as we know that check queue gets executed after the I/O callback so now
setImmediate(() => console.log("setImmediate"));
 op=>
 I am next tick
 Promise resolved
 I am settimeout
 setImmediate
 reading the file
- but the O/P says something else here the I/O callback is executed after the setimmediate here the concept of I/O polling comes into picture 
```

- I/O events are polled and callback functions are added to the I/O queue only after the I/O is complete 
- So thats why the eventloop checks the check queue and it sees that we have a callback there therefore the callback executes first rather and than in the second iteration it sees we have a callback in the I/O callback and it gets executed after that  
- `but wait there is gotcha`
```
const file = fs.readFileSync("./file.txt", "utf-8");
console.log("file:", file);
setTimeout(() => {
  console.log("I am settimeout");
}, 0);
process.nextTick(() => console.log("I am next tick"));
Promise.resolve().then(() => console.log("Promise resolved"));

setImmediate(() => console.log("setImmediate"));
```
- what do you think the O/P will be 
- yes you guessed it right because now we are reading the file synchronously 
```
file: hello codesdsdsd
I am next tick  
Promise resolved
I am settimeout 
setImmediate
```
- This is the O/P
# Check Queue
- Check queue callbacks are executed after Microtask queue callbacks 
- Timer queue callbacks and I/O queue callbacks are executed 
# Close Queue
- Close queue callbacks are executed after all the other queues callbacks in a given iteration of the event loop
# Summary 
1. event loop is C program that orchestrates or coordinates the execution of synchronous and asynchronous code in Node.js
2. It coordinates the execution of callbacks in six different queues
3. They are nextTick, Promise ,timer,I/O,check and close queues
4. we use process.nextTick() method to queue into the nextTick queue
5. we resolve or reject a Promise to queue into the promise queue
6. we use setTimeout or setInterval to queue into the timer queue
7. execute an async method to queue into the I/O queue
8. use setImmediate function to queue into the check queue and finally 
9. Attach close event listeners to queue into the close queue
## npm
- npm is the worlds largest software library
  - npm is a library or a registry which contains code packages written by various developers
  - it is large public database pf JS code that developers from all over the world can use to share and borrow code
- npm is a software package manager 
- there are other package managers like pnpm and Yarn
- npm is the default package manager for Node.js and it is installed when we install nodeJs
- when building enterprise scale applications we often need to rely on code written by other developers we need npm 
# package.json
- it is the npm's configuration file
- it is a json file that typically lives in the root directory of our package and holds various metadata relevant to the package 
- it is the central place to configure and describes how to interact with and run our packages 
```
"name":"greet",
"version":"1.0.0",
"description":"this is subhams first package",
"keywords":["subham","dey"],
"main":"index.js",
```
# dependencies
- semantic versioning 
 - is one of the most widely adopted versioning systems
 - A simple set of rules and requirements that dictate how version numbers are assigned and incremented
 - it is crucial to keep a semantic and historical track of changes 
 - version numbers and the way they change convey meaning about the underlying code and what has been modified from one version 
 - 
# Global Package
- 
# npm scripts
- An npm script is a convinient way to bundle common commands for use in a project 
- They are typically entered in the command line in order to do something with the application 
- npm scripts are stored in a projects package.json file giving access to everyone who has access to the codebase
- They also ensure that everyone is using the same command with the same options 
- command use cases for npm scripts include building your project starting a development server compiling CSS,linting, minifying etc 
- npm scripts are executed using the command npm run <script_name>
# CLI tools
- CLI stands for command Line interface
- A program that you can run from the terminal
- example
  - npm
  - git
- 