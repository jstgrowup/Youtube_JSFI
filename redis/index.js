const express = require('express')
const app = express()
const jwt = require("jsonwebtoken")
const Redis = require("redis")
const clientRedis = Redis.createClient(6379, "127.0.0.1");
clientRedis.connect()
clientRedis.on("connect", function (err) {
    console.log("connected to redis")
})
app.use(express.json())
app.post("/", (req, res) => {


    clientRedis.set("token", req.body)
    res.send("kay")
})
app.listen("8080", () => {
    console.log("server started");
})