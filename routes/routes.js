const express = require("express");
const router = express.Router();
const Product = require("../models/products");

router.get("/productos", async (req, res) => {
  let products = await Product.find().lean();
  return res.render("products", { products });
});

module.exports = router;
