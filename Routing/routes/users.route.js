const { Router } = require("express");
const users = Router();
const { body, validationResult } = require('express-validator');
users.get("/", (req, res) => {
  res.send("users home route");
});

users.post("/",
  body('id').isNumeric().withMessage('is is not a number'),
  body('first_name').isString().isLength({ min: 3, max: 20 }).withMessage('first name must be from 8 to 20 chars'),
  body('last_name').isString().isLength({ min: 3, max: 20 }).withMessage('first name must be from 8 to 20 chars'),
  body('dob').isDate(),
  body('gender').isString(),
  body('email').isEmail().withMessage('Incorrect Email').bail()
  ,
  body('password').isLength({ min: 8 }).withMessage('password must be between 8 to 12 chars.').bail(),

  (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    res.send(req.body)
  },

);


users.delete("/", (req, res) => {
  res.send("deleting users");
});
users.patch("/", (req, res) => {
  res.send("patching users");
});
module.exports = users;
