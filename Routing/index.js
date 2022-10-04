const express = require("express");
const app = express();
const usersRoutes = require("./routes/users.route");
app.use("/users", usersRoutes);
app.use("/cart")
app.use("/products")
app.use("/FAQ")
app.listen(8080, (req, res) => {
  console.log("server started");
});
