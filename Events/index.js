const EventsClass = require("events")
// you can register an even
// you can create an event
// you can listen to an event
const button = new EventsClass()
// listenning to the event 
button.on("npmClick", () => {
    console.log("clicked on the button");
})
// triggering an event 
button.emit("npmClick")

