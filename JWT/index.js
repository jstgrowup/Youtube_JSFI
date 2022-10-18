const express = require("express")
const jwt = require("jsonwebtoken")
const app = express()
app.use(express.json())

app.post("/", async (req, res) => {
    const { name } = req.body
    const token = jwt.sign({ name: name }, "Mainscret",{expiresIn:"5 mins"})
    res.send(token)
})
app.post("/token", (req, res) => {
    const { token } = req.body
    const user = jwt.verify(token, "Mainscret")
    res.send(user)
})

app.listen(8080, () => console.log("sever started"))