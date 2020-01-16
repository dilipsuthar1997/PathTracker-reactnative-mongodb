const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = mongoose.model('User');

const router = express.Router();

router.post('/signup', async (req, res) => {
    console.log(req.body);
    // Destructing request body --
    const { email, password } = req.body;

    // handling error here --
    try {

        const user = new User({ email, password });
        await user.save();

        // Generate JsonWebToken and send to user response --
        const token = jwt.sign({ userId: user._id }, 'MY_SECRET_KEY');
        res.send({ token });

    } catch (err) {
        return res.status(422).send(err.message);
    }
});

module.exports = router;