// full duplex system
const { createServer } = require("http")
const express = require("express")
const app = express()
const { Server } = require("socket.io")
const mainServer = createServer(app)
const io = new Server(mainServer, {
    cors: {
        origin: "*"
    }
})
app.get("/", (req, res) => {
    res.send("hey")
})
io.on("connection", (user) => {
    console.log("user connected");
    user.on("newMessage", (data) => {
        io.emit("newMessage", data)
    })
    user.on("disconnected", () => {
        console.log("user disconnected");
    })
})
mainServer.listen(8080, () => {
    console.log("server started");
})