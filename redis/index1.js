const axios = require('axios')
const express = require('express')
const app = express()
const cors = require("cors")
const jwt = require("jsonwebtoken")
const { default: mongoose } = require('mongoose')
const Redis = require("redis")
const userModel = require("./model")
const clientRedis = Redis.createClient();
clientRedis.connect()
clientRedis.on("connect", function (err) {
    console.log("connected to redis")
})
app.use(express.json())
app.use(cors())
app.post("/signup", async (req, res) => {

    clientRedis.set("user", JSON.stringify({ name: req.body.name }))
    let userdata = await userModel.create({ name: req.body.name })
    res.send(userdata)
})
app.post("/login", async (req, res) => {
    let getCahceddata = await clientRedis.get("user")
    if (getCahceddata !== null) {
        getCahceddata = JSON.parse(getCahceddata)
        res.send(getCahceddata)
    }
    else {
        let data = await userModel.findOne({ name: req.body.name })

        if (!data) {
            res.status(401).send("user not found")
        }
        else {

            res.send(data)
        }
    }
})
app.get("/data", async (req, res) => {
    let getCahceddata = await clientRedis.get("posts")
    if (getCahceddata) {
        getCahceddata = JSON.parse(getCahceddata)
        res.send(getCahceddata)
    }
    else {
        const data = await axios.get("https://jsonplaceholder.typicode.com/posts").then((respo) => respo.data).catch((er) => res.send("err"))
        clientRedis.set("posts", JSON.stringify(data))
        res.send(data)
    }
})
// mongoose.connect("mongodb://localhost:27017/redis").then(() => {
app.listen("8080", () => {
    console.log("server started");
})
// }).catch(err => console.error(err))