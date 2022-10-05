const express = require("express");
const app = express();
const usersRoutes = require("./routes/users.route");

app.use("/users", usersRoutes);

// app.use((req, res, next) => {
//   if (req.headers.token == "123") {
//     next()

//   }
//   else {
//     res.send(400)
//   }



// })
// app.use((req, res, next) => {
//   if (req.headers.token === "123") {

//     next()
//   }
//   else {
//     res.send(500)
//   }
// }, (req, res, next) => {

//   next()
// })



// app.get("/", (req, res) => {
//   res.send("Homepage")
// })
app.listen(8080, (req, res) => {
  console.log("server started");
});
