const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    taskName: String,
});

module.exports = Task = mongoose.model("task", taskSchema);