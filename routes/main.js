const router = require("express").Router();
const mongoose = require("mongoose");

router.get("/", async(req, res) => {
    res.render("index");
})

module.exports = router;