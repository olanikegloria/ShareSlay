const {Clothe, validateClothe} = require('../models/clothe');
const express = require("express");
const router = express.Router();
const {Category} = require('../models/category');

router.get("/", async (req, res) => {
  const clothes = await Clothe.find().sort("name");
  res.send(clothes);
});

router.post("/", async (req, res) => {
  const { error } = validateClothe(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const category = await Category.findById(req.body.categoryId);
  if (!category) return res.status(404).send("The clothe not found");

  let clothe = new Clothe({
    title: req.body.title,
    category: {
        _id: category._id,
        name: category.name
    },
    numberInStock: req.body.numberInStock,
    dailyBorrowingRate: req.body.dailyBorrowingRate
  });

  clothe = await Clothe.save();

  res.send(clothe);
});

router.put("/:id", async (req, res) => {
  const { error } = validateClothe(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const clothe = await clothe.findByIdAndUpdate(
    req.params.id,
    { name: req.body.name, phone: req.body.phone, isGold: req.body.isGold },
    {
      new: true,
    }
  );
  if (!clothe) return res.status(404).send("The clothe not found");
  res.send(clothe);
});

router.delete("/:id", async (req, res) => {
  const clothe = await Clothe.findByIdAndDelete(req.params.id);
  if (!clothe) return res.status(404).send("The -clothe not found");

  res.send(clothe);
});

router.get("/:id", async (req, res) => {
  const clothe = await Clothe.findById(req.params.id);
  if (!clothe) return res.status(404).send("The -clothe not found");
  res.send(clothe);
});

module.exports = router;
