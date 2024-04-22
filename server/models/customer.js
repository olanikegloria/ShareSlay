const Joi = require("joi");
const mongoose = require("mongoose");

const schema = Joi.object({
    name: Joi.string().min(5).max(50).required(),
    phone: Joi.string().min(5).max(50).required(),
    isGold: Joi.boolean(),
  });
  
  function validateCustomer(customer) {
    return schema.validate(customer);
  }

const customerSchema = mongoose.Schema({
    name: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50,
    },
    phone: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50,
    },
    isGold: {
      type: Boolean,
      default: false,
    },
  });
  
  const Customer = new mongoose.model("customer", customerSchema);

  exports.Customer = Customer;
  exports.validateCustomer = validateCustomer;