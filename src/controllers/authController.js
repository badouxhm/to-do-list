const authService = require('../services/authService');

const register = async (req, res) => {
    try {
        const result = await authService.registerUser(req.body);
        res.status(result.status).json(result.message);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

const login = async (req, res) => {
    try {
        const result = await authService.loginUser(req.body);
        res.status(result.status).json(result.message);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = { register, login };
