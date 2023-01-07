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
* So in JS the order in which the events are recieved on the web page so if there are some nested elements than the deep nested or the target element will be triggered first and than the events will bubble up the hirarchy in DOM
* There are two types of event flow 
- Top to bottom (event capturing)
- Bottom to top (event bubbling)
# Event Delegation
- It is a technique for listening to events where we delegate a parent element as the listener for all of the events that happen inside 
# Event bubbling 
- It is a type of event propagation where the event first triggers on the innermost target element and than keeps triggering the parents of the target element till it reaches the outermost DOM element
# Event Capturing 
- it is a type of event propagation where the event is first captured