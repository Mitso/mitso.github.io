const { User } = require('../models');

exports.registerNewUser = async (req, res) => {
    try {
        if (!req.body.phone) {
            return res.status(400).json({
                status: "error",
                error: "req body cannot be empty",
            });
        }
        const user = new User({
            username: req.body.username,
            phone: req.body.phone,
            clan: req.body.clan
        });
        res.status(201).json(user);
    }
    catch (err) {
        res.status(400).json({err: err});
    }
};