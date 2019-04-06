const Product = require("../../model/product-model");

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  Product.find().then(docs => res.status(200).json(docs));
});

router.post("/", (req, res) => {
  let model = req.body;
  const product = new Product(model);
  product.save((err, newProduct) => {
    if (err) return res.send(err).status(400);
    res.status(200).json(newProduct);
  });
});

module.exports = router;
