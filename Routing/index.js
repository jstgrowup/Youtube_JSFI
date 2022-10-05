const express = require("express");
const app = express();
const usersRoutes = require("./routes/users.route");
const auth = require("./middlewares/Auth")
app.use("/users", usersRoutes);

app.use(auth)
app.listen(8080, (req, res) => {
  console.log("server started");
});
