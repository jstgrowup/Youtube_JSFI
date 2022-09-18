const { Schema, connect, model } = require("mongoose");
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const schema = new Schema({
  id: Number,

  full_name: String,
  age: Number,

  gender: String,
  balance: Number,

  native: String,
  relocate_to: String,
  family_members: Number,
});
const Usermodel = model("users", schema);
app.get("/", async (req, res) => {
  let u = await Usermodel.find();
  res.send(u);
});
app.listen(8080, async () => {
  await connect("mongodb://127.0.0.1:27017/assignwednesday");
  console.log("server started");
});
