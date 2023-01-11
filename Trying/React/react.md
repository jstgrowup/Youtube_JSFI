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



