const { Router } = require("express");
const users = Router();
const { body, validationResult } = require('express-validator');
users.get("/", (req, res) => {
  res.send("users home route");
});

users.post("/post",
  [body('name').isLength({ min: 3 }),
  body('email').isEmail(),
  body('password').isLength({ min: 5 })],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    res.send("users created")
  },
);


users.delete("/", (req, res) => {
  res.send("deleting users");
});
users.patch("/", (req, res) => {
  res.send("patching users");
});
module.exports = users;
