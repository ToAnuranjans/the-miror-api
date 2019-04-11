const mongoose = require("mongoose");

const CONNECTION_STRING = "mongodb://localhost:27017/theMirror";

mongoose.connect(CONNECTION_STRING, { useNewUrlParser: true }).then(() => {
  console.log("Local mongodb connected");
});

module.exports = mongoose;
