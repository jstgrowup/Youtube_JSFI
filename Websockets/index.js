const { WebSocketServer } = require("ws")
const wss = new WebSocketServer({
    port: 8080
})
wss.on("connection", (client) => {
    client.send("server says hi")
    client.on("message", (message) => {
        console.log(message.toString("utf-8"));
    })


    
    console.log(`new client connection established ${Date.now()}`);
})
wss.on("listening", () => console.log("server started"))