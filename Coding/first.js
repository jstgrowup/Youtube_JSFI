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

console.log(undefined == null);
console.log(undefined === null);
