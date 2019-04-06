const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  products: [
    {
      quantity: { type: Number },
      price: { type: Number },
      productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" }
    }
  ]
});

const Order = new mongoose.model("Order", orderSchema);

module.exports = Order;
