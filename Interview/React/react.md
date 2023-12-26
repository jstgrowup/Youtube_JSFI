## What is react?

- React is an opensource frontend JS library that is used for building user Interfaces
- It is used to make single-page application

# Major features of React

- It uses Virtual DOM instead of Real DOM because Real DOM maniplations are expensive
- It follows unidirectional data flow (concept of props)
- It uses the concept of components which are reusable/composable

## What is the difference between State and Props?

# State

- It is an object that holds some information that may change over lifetime of the components.
- The state is a built in object that is used to contain data the component, A component state can change over
- State cannot be accessed by child components
- States can be used for rendering dynamic changes with the component
- Stateless component cannot have State
- State cannot make components reusable

# Props

- Props are inputs to components
- they are single values or objects containing a set of values that are passed to components on creation using a naming convention similar to HTML-tag attributes
- The primary use of props is to pass custom data to your component ,trigger state changes,
- Props are read only
- props are immutable
- props can be accessed by the child component
- Props makes components reusable
- Props are used to communicate between components

# What is Conditional rendering

- the conditional rendering is a term to describe the ability to render different user interface(UI) markup if a condition is true or false
- In react it allows us to render different elements or components based on a condition

## What is Life cycle Diagram/Phases(Hooks)

- The component lifecycle has three distinct lifecycle phases

# Mounting Phase-

- the component is ready to mount in the browser DOM . The phase covers initialization from constructor(),render() and componentDidMount() lifecycle method

# Updating Phase

- The next phase in the lifecycle is when a component is updated.
- A component is updated whenever there is a change in the component's state or props either from setState(), render(), componentDidMount()

# UnMounting Phase

- The next phase is the lifecycle is when a component is removed from the DOM or unmounting
- The phase includes componentWillUnmount() lifecycle method.
  [diagram](https://wavez.github.io/react-hooks-lifecycle)

## What is VDOM and How does it work?

- So DOM stands for Document object model which is a structured representation of all the HTML elements of our web document . Its a tree data structure and all the HTML elements are nodes of this data structure
- we can manipulate the DOM using javascript
- But the thing is everytime there is any update in the DOM the whole UI is rerendered again but including this all the styles, attributes will also rerender again which is a really tedious work when it comes to a case where there are large number of nodes in the DOM
- Virtual DOM is a copy of the real DOM . So the virtual DOM is not reponsible for any change in the UI but the real DOM is
- Every element that exists in the DOM there will be a virtual copy of it in the react's virtual DOM
- So now if there is any change in the UI first the VDOM will be updated and than the Real DOM
- React actually creates a copy of the entire DOM in a virtual DOM tree now when there is a change in the UI a new virtual DOM is ceated
- this new virtual DOM will be compared to the previous VDOM tree and whatever the difference is it makes a note of it.
- Now these changes are reflected is the real DOM by the best ways possibles and rerenders only the updated elements instead of the entire DOM
- This process is known as `Reconciliation`

# React Fiber

- Fiber is a reconsiliation engine or reimplementation of core algorithm in React v16
- The goal is to increase its suitability for areas like animation, layout, gestures ability to pause , abort and assign priority to different types of updates
- The goal is to increase its sustainibility for areas like animation, layout and gestures etc
- its headline feature is `Incremental rendering` the ability to split rendering work into chunks and spread it out over multiple frames

# What are keys in React?
- Keys help React identify which items have changed / added/ removed , 
- Keys whould be given to the elements inside the array to give the elements a stable identity
- You should not use indexes as keys if the order of items changes than it will effect the performance and could lead some unstable component behaiviour 
# What is memoization in React?
- Its an Optimization technique for accelerating computer programs by caching the results of heavy function calls and returning them
# useMemo and React.memo() difference?
- `React.memo()`
- is a higher-order component that we can use to wrap components that we do not want to re-render unless the props within them change 
- `useMemo`
- It is a react Hook that we can use to wrap functions within a component 
- we can use this to ensure that the values within that function are re-computed only when one of its dependencies change 
```
 const [text, setText] = React.useState('')
  const [search, setSearch] = React.useState('')

  const handleText = (event) => {
    setText(event.target.value)
  }

  const handleSearch = () => {
    setSearch(text)
  }

  // useMemo Hooks
  const filteredUsers = React.useMemo(
    () =>
      users.filter((user) => {
        console.log('Filter function is running ...');
        return user.name.toLowerCase().includes(search.toLowerCase());
      }),
    [search]
  );

```
If the search changes than only memo will run 
- React memo accepts a function which returns the values and then that function is only called when the value needs to be retreived
# useEffect
- useEffect hook essentially is to allow sideeffects within the functional component 
- In class components there are lifecycle methods like componentDidMount,componentDidUpdate and componentWillUnmount are all handled by useEffect hook in functional components
- It recieves two parameters 
  - the first parameter is the callback function to be executed 
  - the second parameter takes an array containing any variables that are to be tracked 
# How does Routing work in react?
- Routing helps us adding new screens and flows to our application incredibly quickly
# what are pure components?
- Pure components are the components which do not rerender when the value of the state and props has been updated with the same values.
- Pure components restricts the re-rendering ensuring the higher perforemance of the component
# Difference between React.PureComponent and React.Component?

- Pure component handles the `shouldComponentUpdate()` method 
- The major difference is that PureComponent does a shallow comparision on state change , it means that while comparing objects it compares only references which helps to improve the performance of the app
- A normal component rerenders everytime its parent rerenders , regardless of whether the component props and state have changed or not but in case of purecomponent it wont rerender it its parent rerenders unless the props or the state of the pure component have changed 
```
// Regular class component
class App extends React.Component {
  render() {
    return <h1>Component Example !</h1>
  }
}

// React Pure class component
class Message extends React.PureComponent {
  render() {
    return <h1>PureComponent Example !</h1>
  }
}
``` 
# useCallback
- Hooks can be used to optimize the rendering behaiviour of your react function components.
- useCallback returns a memoized version of the callback that only changes if one of the depedecies has changed
# What are useRefs?
- useref creates a plain JS object by creating a .current property
- useRef doenst notify you when its content changes Therefore mutating the .current property doesnt cause a rerender
- It permits creating a refernce to the DOM element directly within the functional component
# How Context API works ? What does it solves
- The react context API allows to easuly access data at different levels of the component tree without having to pass data down the `props`
- Before using context we have to pass the JSX as children
- Used in theming,current account,Routing and also managing state
- React passes data to child components via props from the top to bottom.
- while there are few props or child components it is easy to manage and pass down data but when the application grows we need context which solves the issue it pass data to all of the components in the tree without writing them manually in each of them.
# What does the useReducer do?
- It accepts a reducer function with the application initial state returns the current application state then dispatches a function 
- when we click the incement button it will dispatch an action which updates the count and the updated count will be displayed 
- It helps in readability(when the applicaiton gets bigger and bigger this api helps us to seperate the how of the update logic from the what happened of the event handlers)
- Helps in debugging
# How do you use Profiler?
- the profiler measures how often a react application renders and what is the cost of rendering is . Its purpose is to help identify parts of an application that are slow and may be benefit from optimization techniques
- Profiler can be added anywhere in the react tree to measure the cost of rendering that part of the tree 
- It takes two props an `id` and an `onRender` callback which React calls any time a component within the tree "commits" an update
```
render(
  <App>
    <Profiler id="Navigation" onRender={callback}>
      <Navigation {...props} />
    </Profiler>
    <Main {...props} />
  </App>
);
```
- The callback gives 
```
function onRenderCallback(
  id, // the "id" prop of the Profiler tree that has just committed
  phase, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
  actualDuration, // time spent rendering the committed update
  baseDuration, // estimated time to render the entire subtree without memoization
  startTime, // when React began rendering this update
  commitTime, // when React committed this update
  interactions // the Set of interactions belonging to this update
) {
  // Aggregate or log render timings...
}
```
[Link](https://reactjs.org/docs/profiler.html#:~:text=The%20Profiler%20measures%20how%20often,disabled%20in%20the%20production%20build.)
- `It is just a chrome extention tool you will find in the react dev tools`
# What is dispatcher?
- dispatcher is a single object that broadcasts actions/events to all registered stores
- Stores need to register for events when the application starts
# What is Flux architecture ?
- Redux derives its ideas from the Flux architecture  
- Flux is a replacement for the traditional MVC pattern
- Flux is a JS architecture or pattern for UI which runs on a unidirectional data flow and has a centralized store
- It is useful when your project has a dynamic data and and you need to keep the data updated in an effective manner 
- It Has following components
     1. `Store/Stores`: Serves as a container for the app state and logic
     2. `Action`: Enables data passing to the dispatcher 
     3. `View`: Same as the view in MVC architecture, but in the context of React Components
     4. `Dispatcher`: Coordinates actions and updates to stores  
- When the user clicks on something the view creates actions.
- Action can create new data and send it to the dispatcher 
- The dispatcher then dispatches the action result to the appropriate store
- The store updates the state based on the result and sends an update to the view
![image](https://static.javatpoint.com/tutorial/reactjs/images/react-flux-concept.png)

# What is redux?
- Redux is a state management tool 
- While it is mostly used with React it can be used with any other JS framework 
- The state of the application is kept in a store and each component can access that it needs from the store
- The reducer updates the centralized store with new data based on the kind of action it recieves 
- Store creates a new state and sends an update to view 
`Core principles of redux`:
    - `Single source of truth`:The state of the whole application is stored in a single store
    - `State is read-only`:The only way to change the state is to emit an action (an object describing what happend along with the data or the payload if any) this actually ensures that no one can mutate the state directly 
    - `Changes are made with pure functions`: To specify how the state tree is transformed by actions we write reducers which are nothing but pure functions that take the previous state and an actions as parameters and return teh next state
# What are reducers?
- Reducers are just pure functions that take the current state if an application perform an action and return a new state
- These states are stored as objects and they specify how the state of an application changes in response to an action sent to the store
# What are actions ?
- These are just plain JS objects or paylaods of information that send data from the application to the store
- They are only source of information of the store
- Actions wil have a type property that indicates the type of action being performed and a payload which will have the new data that will be stored in the store 
# What are dispatcher?
- The dispatcher dispatched the action result to the sppropriate store and the store updates the state based on the result and sends an update to the view 
# What are side effects in React?
- Date fetching , setting up a subscription and manually changing the DOM in React components are some the side effects in React
# What are combine reducers?
- It is a helper function turns an object whose values are different reducing functions into single reducing function you can pass to createStore
```
const rootReducers = combineReducer(reducer1, reducer2)
```
# What are thanks? Why do you need them ?
- NA 
# Write how you would write an API request in redux thunks
- Thunk is a middleware that lets us call action creators that return a function instead of an action 
- The thunk can be used to delay the dispatch of an action or to dispatch only if a certain condition is met lets say only after the network call is made
```
import { applyMiddleware, combineReducers, createStore } from 'redux'

import thunk from 'redux-thunk'

// actions.js
export const addRepos = repos => ({
  type: 'ADD_REPOS',
  repos,
})

export const clearRepos = () => ({ type: 'CLEAR_REPOS' })

export const getRepos = username => async dispatch => {
  try {
    const url = `https://api.github.com/users/${username}/repos?sort=updated`
    const response = await fetch(url)
    const responseBody = await response.json()
    dispatch(addRepos(responseBody))
  } catch (error) {
    console.error(error)
    dispatch(clearRepos())
  }
}

// reducers.js
export const repos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_REPOS':
      return action.repos
    case 'CLEAR_REPOS':
      return []
    default:
      return state
  }
}

export const reducers = combineReducers({ repos })

// store.js
export function configureStore(initialState = {}) {
  const store = createStore(reducers, initialState, applyMiddleware(thunk))
  return store
}

export const store = configureStore()
```
# What is lazy loading mean?
- Its a function that lets you load components lazily through 
- It makes possible for us to dynamically import components but they are rendered like regular components
- React.lazy() takes a function that returns a promise as its argument the function returns a promise by calling import() to load the content 
- returned promise resolves to a module with a default conatining the react component
```
// Without Lazy
import MyComponent from './MyComponent';
 
// With Lazy
const MyComponent = React.lazy(() => import('./MyComponent'));
```
[Check_Docs_For_More_Info](https://reactjs.org/docs/code-splitting.html#:~:text=The%20React.lazy%20function%20lets,import%20as%20a%20regular%20component.)
-The lazy component should then be rendered inside a Suspense component, which allows us to show some fallback content (such as a loading indicator) while we’re waiting for the lazy component to load.
```
import React, { Suspense } from 'react';

const OtherComponent = React.lazy(() => import('./OtherComponent'));

function MyComponent() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <OtherComponent />
      </Suspense>
    </div>
  );
}
```
- The fallback prop accepts any React elements that you want to render while waiting for the component to load.
- You can place the Suspense component anywhere above the lazy component.
- You can even wrap multiple lazy components with a single Suspense component.
# What does Webpack do?
- Webpack has two sets of functinality
- Loaders and Plugins
  - Loaders
    - Loaders transforms the source code of a module
    - style-loader adds CSS to DOM using style tags
    - sass-loader compiles SASS files to CSS
    - babel-loader traspiles JS code 
  - Plugins are the core of webpack they can do things that loaders cant 
    - UglifyJS that minifies and uglifies the output of webpack.
[Please_read_this](https://github.com/jstgrowup/NamasteReact/blob/main/Day3/Assignments/assignment.md) 
most of the feature of parcel and webpack are same and offers almost same features like tree shaking HMR etc
# What does babel do?
- Babel is a transpiler that converts new JS code into old ones 
- It is very flexible too in terms of transpiling 
- One can easily add presents such as es2015,es2016,es2017 so that babel compiles them to ES5
- Babel allows us to have a clean, maintainable code using the latest JS specifications without needing to worry about browser support
# Can you write react without JSX?
- Yes we can because JSX is just a syntactical sugar of react.createElement()




# Hooks
 - 