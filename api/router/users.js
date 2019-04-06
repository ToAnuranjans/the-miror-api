const User = require("../../model/user-model");

const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  User.find().then(docs => res.send(docs));
});

router.post("/", (req, res) => {
  let model = req.body;
  const user = new User(model);
  user.save((err, newUser) => {
    if (err) return res.send(err).status(400);
    res.status(200).json(newUser);
  });
});

module.exports = router;
