const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  street: { type: String },
  city: { type: String },
  state: { type: String },
  country: { type: String }
});

const userTypeSchema = new mongoose.Schema({
  name: {
    type: String,
    enum: ["guest", "admin", "standard", "premium"],
    default: "guest"
  }
});

const userSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  mobile: { type: String, required: true },
  name: { type: String, required: true },
  type: { type: String, ref: "UserType", required: true },
  address: addressSchema
});

const UserType = new mongoose.model("UserType", userTypeSchema);

const Address = new mongoose.model("Address", addressSchema);

const User = new mongoose.model("User", userSchema);

module.exports = User;
