const { Router } = require("express");
const users = Router();
users.get("/", (req, res) => {
  res.send("users home route");
});
users.get("/get", (req, res) => {
  res.send("gettting users");
});
users.post("/post", (req, res) => {
  res.send("posting users");
});
users.delete("/delete", (req, res) => {
  res.send("deleting users");
});
users.patch("/patch", (req, res) => {
  res.send("patching users");
});
module.exports = users;
