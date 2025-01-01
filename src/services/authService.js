const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const registerUser = async ({ username, email, password }) => {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return { status: 400, message: { error: 'Email already exists' } };
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    return { status: 201, message: { message: 'User registered successfully' } };
};

const loginUser = async ({ email, password }) => {
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
        return { status: 401, message: { error: 'Invalid credentials' } };
    }

    const token = jwt.sign({ email: user.email }, 'secret');
    return { status: 200, message: { token } };
};

module.exports = { registerUser, loginUser };
