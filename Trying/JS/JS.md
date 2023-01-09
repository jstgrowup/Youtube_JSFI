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
- - pros
- Search engines can crawl the site for better SEO,The initial page laod is faster, good for statis sites
- - Cons
- Frequent server requests, An overall slow page rendering, While changing the routes the whole page reloads.
  ![serverSide](https://user-images.githubusercontent.com/40628582/211241757-e12a72ed-59e0-40e9-a66f-7c51c646c382.png)
