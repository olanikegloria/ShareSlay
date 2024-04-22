const mongoose = require('mongoose');
const logger = require('./logger');

mongoose.connect('mongodb://localhost/shareSlay')
    .then(() => {
        logger.info('Connected to MongoDB');
    })
    .catch((error) => {
        logger.error('Failed to connect to MongoDB', error);
    });

    // 👗💫SʜᴀʀᴇSʟᴀʏ💫👠