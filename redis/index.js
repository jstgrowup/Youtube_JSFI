const axios = require("axios")
const express = require("express")
const app = express()
const redis = require("redis")
app.use(express.json())
const redisclient = redis.createClient()
redisclient.connect()
redisclient.on("connect", function () {
    console.log("redis connection established");
})

app.get("/", async function (req, res) {
    const usersdata = redisclient.get("users")
    if (usersdata) {
        usersdata = JSON.parse(usersdata)
        res.send(usersdata)
    }
    else {
        const data = await axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => response.data).catch((err) => console.log(err))
        
    }
})

app.listen(8080, () => console.log("connected"))