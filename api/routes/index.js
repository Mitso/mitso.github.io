//Routes
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send(
        [{
            title: "Hello!",
            description: "You are connected to the API"
        }]
    );
});

router.post("/api", (req, res) => {
    if (!req.body.phone) {
        return res.status(400).json({
            status: "error",
            error: "req body cannot be empty",
        });
    }

    res.status(200).json({
        data: req.body
    });
});

router.get("/users", (req, res) => {
    //Needs to get record from DB
    res.send(
        [
            {
                phone: "Hello!",

            }
        ]
    );
});

module.exports = router;