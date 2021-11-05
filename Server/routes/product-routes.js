const express = require("express");
const router = express.Router();
const Product = require("../models/Products");

// get all products
router.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).send("server error");
  }
});

// create a product
router.post("/products", async (req, res) => {
  try {
    const product = new Product({
      brand,
      itemType,
      sizes,
      colors,
      price,
      description,
    });

    // add to DB
    await product.save();
    res.status(200).json({ product });
  } catch (err) {
    res.status(500).send("server error");
  }
});

// update product
router.put("/editproduct/:id", async (req, res) => {
  const { brand, itemType, sizes, colors, price, description } = req.body;
  const { id } = req.params;

  try {
    const product = await Product.findByIdAndUpdate(id, {
      brand,
      itemType,
      sizes,
      colors,
      price,
      description,
    });
    res.status(200).json({ product });
  } catch (err) {
    res.status(500).send("server error");
  }
});

module.exports = router;
