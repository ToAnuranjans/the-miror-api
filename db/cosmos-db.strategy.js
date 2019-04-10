const mongoose = require("mongoose");
require("dotenv").config();


mongoose
  .connect(
    `mongodb://${process.env.COSMOSDB_USER}:${process.env.COSMOSDB_PASSWORD}@${
      process.env.COSMOSDB_HOST
    }.documents.azure.com:10255/?ssl=true`
  )
  .then(() => console.log("Connection to CosmosDB successful"))
  .catch(err => console.error(err));

module.exports = mongoose;
