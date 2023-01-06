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
