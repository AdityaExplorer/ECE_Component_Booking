const mongoose = require("mongoose");

const connection = mongoose.connect(
  "mongodb+srv://vermaaditya0707:0707@cluster0.i8ihmzs.mongodb.net/ecommerce"
);

module.exports = {
  connection,
};