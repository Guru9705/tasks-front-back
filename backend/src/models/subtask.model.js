const { text } = require("express");
const mongoose = require("mongoose")

const subTaskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    status: { type: Boolean, default: false },
})

const SubTask = mongoose.model("subTask", subTaskSchema);

module.exports = SubTask;