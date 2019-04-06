const Order = require("../../model/order-model");

const express = require("express");
const router = express.Router();

router.get("/:userId", (req, res) => {
  const userId = req.params.userId;
  Order.find({
    userId
  }).then(docs => res.send(docs));
});

router.get("/", (req, res) => {
  Order.find().then(docs => res.send(docs));
});

router.post("/", (req, res) => {
  let model = req.body;
  const order = new Order(model);
  order.save((err, newOrder) => {
    if (err) return res.send(err).status(400);
    res.status(200).json(newOrder);
  });
});

module.exports = router;
