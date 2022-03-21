const { text } = require("express");
const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    status: { type: Boolean, default: false },
    subtasks: [
        {type: mongoose.Schema.Types.ObjectId, ref : "subTask"}
    ],
})

const Task = mongoose.model("task", taskSchema);

module.exports = Task;