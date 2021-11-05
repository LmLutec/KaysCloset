const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: true,
  },
  itemType: {
    type: String,
    required: true,
  },
  sizes: {
    type: Array,
    required: true,
  },
  colors: {
    type: Array,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
});

module.exports = Product = mongoose.model("Product", ProductSchema);
