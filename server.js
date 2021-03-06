const products = require("./api/router/products");
const users = require("./api/router/users");
const orders = require("./api/router/orders");

const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "uploads")));

app.get("/", (req, res) => res.send("<h1>Welcome to The Mirror Api</h1>"));

app.use("/products", products);
app.use("/users", users);
app.use("/orders", orders);

app.get("**", (req, res) =>
  res.send("<h1>Resource not found</h1>").status(404)
);

let mongoose;
if (process.env.ENVIRONMENT === "production") {
  mongoose = require("./db/cosmos-db.strategy");
} else {
  mongoose = require("./db/local-mongodb.stategy");
}

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error..."));
db.once("open", () => {
  console.log("Connected to mongodb...");
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
});
