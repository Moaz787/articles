const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
  title: String,
  content: String,
  writer: String,
  pages: Number,
  price: Number,
});

module.exports = mongoose.model("article", articleSchema);
