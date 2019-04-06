const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  isAvailable: { type: Boolean },
  price: { type: Number },
  discount: { type: Number },
  imageUrl: { type: String },
  rating: { type: Number },
  category: {
    type: String,
    ref: "ProductCategorySchema",
    required: true
  }
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
