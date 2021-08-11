const express = require("express"),
    userInsertController = require("../controllers"),
    router = express.Router();

router.post("/signup", userInsertController.createUserEntry);
router.get("/users", userInsertController.listUsers);

module.exports = router;