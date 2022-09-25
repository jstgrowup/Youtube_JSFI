const { Schema, connect, model } = require("mongoose");
const express = require("express");
const app = express();

const schema = new Schema({
  name: String,
  email: String,
  gender: String,
});

const usersmodel = model("testingcollections", schema);
app.get("/", async (req, res) => {
  let use = await usersmodel.find();
  res.send(use);
});

app.listen(8080, async () => {
  await connect(
    "mongodb+srv://subham:4321@cluster0.44fea50.mongodb.net/testingdatabase"
  );

  console.log("server started");
});
