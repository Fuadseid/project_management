const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
  project_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project",
    default: null,
  },
  epic_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Epic",
    default: null,
  },
  module_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Module",
    default: null,
  },
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },
});


const Task = mongoose.model("Task", taskSchema);
module.exports = Task;