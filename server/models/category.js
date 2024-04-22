const Joi = require('joi');
const mongoose = require('mongoose');

const schema = Joi.object({
    name: Joi.string().min(3).required()
});

function validateCategory(category) {
    return schema.validate(category);
}

const categorySchema =  mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    }
});

const Category = new mongoose.model('category', categorySchema);

exports.Category= Category;
exports.validateCategory= validateCategory;
exports.categorySchema = categorySchema;