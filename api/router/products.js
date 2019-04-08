const Product = require("../../model/product-model");

const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  }
});

const upload = multer({
  storage: storage
});

router.get("/", (req, res) => {
  Product.find().then(docs => res.status(200).json(docs));
});

router.post("/", upload.single("image"), (req, res, next) => {
  let model = req.body;
  model.imageUrl = getImageUrl(req);
  const product = new Product(model);
  product.save((err, newProduct) => {
    if (err) return res.send(err).status(400);
    res.status(200).json(newProduct);
  });
});

function getImageUrl(req) {
  const imageUrl =
    req.protocol + "://" + req.get("host") + "/images/" + req.file.filename;
  return imageUrl;
}

module.exports = router;
