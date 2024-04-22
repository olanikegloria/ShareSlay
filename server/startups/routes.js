const express = require('express');
const clothes = require('../routes/clothes');
const borrowing = require('../routes/borrowing');
const users = require('../routes/users')
const auth = require('../routes/authorization');
const categories = require('../routes/categories')
const customers = require('../routes/customers')

module.exports = function(app) {
app.use(express.json());
app.use('/api/users', users) 
app.use('api/auth', auth);
app.use('/api/clothes', clothes)
app.use('/api/borrowing', borrowing)
app.use('/api/categories', categories)
app.use('/api/customers', customers)
}