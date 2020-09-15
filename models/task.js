const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    "taskName": String,
    "date": String
});

module.exports = mongoose.model("Task", taskSchema);