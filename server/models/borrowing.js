const Joi = require('joi');
const mongoose = require('mongoose');
const joiObjectId = require('joi-objectid')(Joi); 

const schema = Joi.object({
    customerId: joiObjectId().required(), 
    movieId: joiObjectId().required() 
});



function validateBorrowing(borrowing) {
    return schema.validate(borrowing);
}

const borrowingSchema =  mongoose.Schema({
    customer: {
        type: new mongoose.Schema({
            name: {
                type: String,
                required: true,
                trim: true,
                minlength: 5,
                maxlength: 50
            },
            isGold: {
                type: Boolean,
                default: false,
            },
            phone: {
                type: String,
                required: true,
                minlength: 5,
                maxlength: 50,
              },
    
        })
    },
    movie: {
        type: new mongoose.Schema({
            title: {
                type: String,
                required: true,
                trim: true,
                minlength: 5,
                maxlength: 50
            },
            dailyBorrowingRate: {
                type: String,
                required: true,
                min: 0,
                max: 255
            },
        }),
        required: true
    },
    dateOut: {
        type: Date,
        required: true,
        default: Date.now
    },
    dateReturned: {
        type: Date,
    },
    borrowingFee: {
        type: Number,
        min: 0
    }
});

const Borrowing = new mongoose.model('Borrowings', borrowingSchema);

exports.Borrowing = Borrowing;
exports.validateBorrowing = validateBorrowing;  