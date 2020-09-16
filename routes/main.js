const mongoose = require("mongoose");
const router = require("express").Router();
const Task = require("../models/task");

//  TODO: Fetch task cards dynamically
router.get("/", (req, res) => {
    Task.find()
        .then(tasks => {
            res.render("index", { tasks: tasks });
        })
        .catch(e => {
            res.redirect("/");
            console.log(e);
        });
});

//  TODO: GET task cards dynamically
router.post("/create", async (req, res) => {

    const newTask = new Task({
        taskName: req.body.createTask,
    });

    await newTask
        .save()
        .then(() => {
            res.redirect("/")
        })
        .catch(e => {
            console.log(e);
            res.redirect("/")
        });

});

// TODO: DELETE cards when removing an object
router.post("/delete/:objectId", async(req, res) => {
    const objectId = req.params.objectId;
    await Task.findByIdAndRemove(objectId, { useFindAndModify: false })
    .then(() => {
        res.redirect("/");
    })
    .catch(e => {
        console.log(e);
        res.redirect("/")
    });
});

module.exports = router;
