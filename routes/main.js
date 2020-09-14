const mongoose = require("mongoose");
const task = require("../models/task");
const router = require("express").Router();
const Task = require("../models/task");

router.get("/", (req, res) => {
    Task.find()
    .then(tasks => {
        res.render("index", { tasks });
    })
    .catch(e => {
        res.status(404).render("index", { e });
    });
})

router.post("/", (req, res) => {
    const newTask = new Task({
        id: new mongoose.Schema.Types.ObjectId,
        taskName: req.body.taskName,
    });

    newTask.save()
    .then(task => {
        res.render("index");
    })
    .catch(e => {
        console.log(e);
    })
})

module.exports = router;
