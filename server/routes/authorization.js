const Joi = require('joi');
const bcrypt = require('bcrypt');
const {User} = require('../models/user');
const express = require('express');
const router = express.Router();
const schema = Joi.object({
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(1024).required(),
});

function validate(req) {
    return schema.validate(req);
}

router.post('/', async (req, res)=> {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message)
    
    let user = await User.findOne({email: req.body.email})
    if(!user) return res.status(400).send('invalid email or password');
    
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if(!validPassword) return res.status(400).send('invalid email or password');
    const token = user.generateAuthToken(); 
    
    res.send(token);
    res.send('Received POST request to /api/auth')
});



module.exports = router;