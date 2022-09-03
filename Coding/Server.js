const { createServer } = require("http");
const fs = require("fs");
const html = fs.readFileSync("./index.html", { encoding: "utf-8" });
const app = createServer((req, res) => {
  if (req.url === "/") {
    res.end(html);
  } else if (req.url === "/products") {
    res.end("welcome to product page");
  }
});
app.listen(8000, () => {
  console.log("sever has started ");
});

const func = require("express");
const expressapp = func();
expressapp.get("/", (req, res) => {
  res.send(html);
});
expressapp.get("/products", (req, res) => {
  res.send("<h1>welcome to products</h1>");
});
expressapp.listen(8001, () => {
  console.log("express server has started");
});
