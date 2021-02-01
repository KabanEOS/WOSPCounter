const express = require('express');
const router = express.Router();
const Counter = require("../models/counterModel");

router.route("/create").post((req, res) => {
    const counterValue = req.body.counterValue;
    const newCounter = new Counter({
        counterValue,
    })

    newCounter.save();
})

module.exports = router;

"proxy": "http://localhost:3001",