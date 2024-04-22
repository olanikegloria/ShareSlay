const {Clothe} = require('../models/clothe');
const express = require("express");
const router = express.Router();
const Fawn = require('fawn');
const {Customer} = require('../models/customer');
const {Borrowing, validateBorrowing} = require('../models/borrowing');


Fawn.init('mongodb://localhost/shareSlay');

router.get("/", async (req, res) => {
  const borrowings = await Clothe.find().sort("-dateOut");
  res.send(borrowings);
});

router.post("/", async (req, res) => {
  const { error } = validateBorrowing(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const customer = await Customer.findById(req.body.customerId);
  if (!customer) return res.status(404).send("The customer is not found");

  const clothe = await Clothe.findById(req.body.clotheId);
  if (!clothe) return res.status(404).send("The customer is not found");

  let borrowing = new Borrowing({
    customer: {
        _id: customer._id,
        name: customer.name,
        phone: customer.phone
    },
    clothe: {
        _id: clothe._id,
        title: clothe.title,
        dailyBorrowingRate: clothe.dailyBorrowingRate
    },
  });
try {
    new Fawn.Task()
   .save('borrowings', borrowing)
   .update('clothes', {_id: clothe._id}, {
     $inc: { numberInStock: -1}
   })
   .run();
}
catch(ex) {
  res.status(500).send('Something failed')
}
  res.send(borrowing);
});

router.get("/:id", async (req, res) => {
  const borrowing = await Borrowing.findById(req.params.id);
  if (!borrowing) return res.status(404).send("The -clothe not found");
  res.send(borrowing);
});

module.exports = router;
