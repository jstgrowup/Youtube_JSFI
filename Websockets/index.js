// full duplex
const { createServer } = require("http");
const { Server } = require("socket.io");

const express = require("express");
const app = express()
app.use(express.json())

const Mainserver = createServer(app)
const io = new Server(Mainserver, {
    cors: {
        origin: "*"
    }
})
io.on("connection", (user) => {
    console.log("user connected");
    user.on("newMessege", (data) => {
        user.emit("newMessge", data)

    })
    user.on("disconnected", () => {
        console.log("user disconnected");
    })
})
Mainserver.listen(8080, () => {
    console.log("sever started");

})
