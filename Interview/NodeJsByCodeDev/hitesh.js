const express = require("express");
const app = express();
app.get("/twitter", (req, res) => {
  res.send("get");
});
app.listen(4000, () => {
  console.log("started the server");
});
