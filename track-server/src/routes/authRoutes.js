const express = require('express');
const mongoose = require('mongoose');
const User = mongoose.model('User');

const router = express.Router();

router.post('/signup', (req, res) => {
    console.log(req.body);
    res.send('You mase a post request');
});

module.exports = router;