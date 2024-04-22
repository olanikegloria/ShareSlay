const Joi = require('joi');
const mongoose = require('mongoose');
const {categorySchema} = require('./category');

const schema = Joi.object({
    title: Joi.string().min(5).max(50).required(),
    categoryId: Joi.string().required(),
    numberInStock: Joi.number().min(0).required(),
    dailyBorrowingRate: Joi.number().min(0).required()
});

function validateClothe(clothe) {
    return schema.validate(clothe);
}

const clotheSchema =  mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        minlength: 5,
        maxlength: 255
    },
    category: {
        type: categorySchema,
        required: true,
    },
    numberInStock: {
        type: Number,
        required: true,
        min: 0,
        max: 255
    },
    dailyBorrowingRate: {
        type: String,
        required: true,
        min: 0,
        max: 255
    }
});

const Clothe = new mongoose.model('clothes', clotheSchema);

exports.Clothe= Clothe;
exports.validateClothe= validateClothe;