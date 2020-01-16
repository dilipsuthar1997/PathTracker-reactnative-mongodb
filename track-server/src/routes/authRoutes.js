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

router.post('/signin', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(422).send({ error: 'Must provide email and password.' });
    }

    const user = await User.findOne({ email });
    if (!user) {
        console.log('No user found!');
        return res.status(422).send({ error: 'Invalid password or email.' });
    }

    try {
        await user.comparePassword(password);
        // Generate JsonWebToken and send to user response --
        const token = jwt.sign({ userId: user._id }, 'MY_SECRET_KEY');
        res.send({ token });
    } catch (err) {
        console.log('password not match: ', err.message);
        return res.status(422).send({ error: 'Invalid password or email.', message: err.message });
    }
});

module.exports = router;